declare module "@utils/types" {
    enum OptionType {
        STRING = 0,
        NUMBER = 1,
        BOOLEAN = 2,
        SELECT = 3,
        MULTI_SELECT = 4,
        SLIDER = 5,
        COLOR = 6,
        COMPONENT = 7,
    }

    interface PluginDefinition {
        name: string;
        description: string;
        authors: Array<{ name: string; id?: string | bigint }>;
        settings?: any;
        required?: boolean;
        start?: () => void | Promise<void>;
        stop?: () => void | Promise<void>;
        patches?: any[];
        contextMenus?: Record<string, any>;
        flux?: Record<string, any>;
        [key: string]: any;
    }

    export default function definePlugin(plugin: PluginDefinition): PluginDefinition;
    export { OptionType, PluginDefinition };
}
