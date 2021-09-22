import usePdfContext from "./usePdfContext";

export function usePdfComponent(type: string, name: string|undefined, defaultName: string = 'default') {
    return usePdfContext().getComponent(type, name || defaultName, defaultName);
}

export default usePdfComponent;