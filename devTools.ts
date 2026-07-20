import { notify } from "./utils/notifications";
import { state } from "./store";
import { PLUGIN_VERSION } from "./constants";

export function registerDevTools() {
    (window as any).ClonecordDev = {
        testNotification: () => {
            notify("Test", "This is a test notification", "info");
        },
        testSuccess: () => {
            notify("Success", "Operation completed successfully", "success");
        },
        testError: () => {
            notify("Error", "Something went wrong", "error");
        },
        getState: () => {
            return { ...state, abortController: undefined };
        },
        PLUGIN_VERSION,
    };
}

export function unregisterDevTools() {
    delete (window as any).ClonecordDev;
}
