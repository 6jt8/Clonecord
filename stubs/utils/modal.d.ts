declare module "@utils/modal" {
    import React from "react";

    export interface ModalProps {
        onClose: () => void;
        [key: string]: any;
    }

    export interface ModalRootProps {
        children: React.ReactNode;
        className?: string;
        onClick?: () => void;
        onKeyDown?: (e: React.KeyboardEvent) => void;
    }

    export interface ModalHeaderProps {
        children: React.ReactNode;
        className?: string;
        separator?: boolean;
    }

    export interface ModalContentProps {
        children: React.ReactNode;
        className?: string;
    }

    export interface ModalFooterProps {
        children: React.ReactNode;
        className?: string;
    }

    export const ModalRoot: React.FC<ModalRootProps>;
    export const ModalHeader: React.FC<ModalHeaderProps>;
    export const ModalContent: React.FC<ModalContentProps>;
    export const ModalFooter: React.FC<ModalFooterProps>;

    export function openModal(
        render: (props: ModalProps) => React.ReactNode,
        options?: {
            modalKey?: string;
            onCloseRequest?: () => void;
            oncloseCallback?: () => void;
        }
    ): string;

    export function closeModal(modalKey: string): void;
    export function closeAllModals(): void;
}
