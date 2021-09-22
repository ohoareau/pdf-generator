import usePdfContext from "./usePdfContext";

export function usePdfComponent(type: string, name: string|undefined, defaultName: string = 'default', fail = true) {
    const c = usePdfContext();

    try {
        return c.getComponent(type, name || defaultName, defaultName);
    } catch (e) {
        if (fail) throw e;
        return null;
    }
}

export default usePdfComponent;