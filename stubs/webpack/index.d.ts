declare module "@webpack" {
    export function findByPropsLazy(...props: string[]): any;
    export function findByProps(...props: string[]): any;
    export function find(module: (m: any) => boolean): any;
    export function findLazy(module: (m: any) => boolean): any;
    export function waitFor(module: (m: any) => boolean, callback: (m: any) => void): void;
}
