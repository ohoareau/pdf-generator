import IBundle from "./IBundle";
import {ComponentType} from "react";
import upperCamelCase from "./utils/upperCamelCase";
import {Font} from "@react-pdf/renderer";
import {font} from "./types";
import debug from 'debug';

export abstract class AbstractBundle implements IBundle {
    private readonly name: string;
    protected debugPdfBundle: Function;
    protected constructor(name: string) {
        this.name = name;
        this.debugPdfBundle = debug(`pdf:bundle:${name}`);
        this.init();
    }
    debug(log: string, ...args: any[]) {
        this.debugPdfBundle(log, ...args);
    }
    protected resolve(path: string) {
        return path;
    }
    protected getFonts(): font[] {
        return []
    }
    protected registerFontType(name: string, style: string, weight: number, path: string, format: string) {
        const font = {
            family: name,
            fontWeight: weight,
            format,
            fontStyle: style,
            src: path,
        };
        this.debug('registering font %j', font);
        Font.register(font);
    }
    protected init() {
        this.debug('init');
        this.getFonts().forEach(f => {
            this.registerFontType(f.name, f.style, f.weight, this.resolve(f.path), f.format || 'truetype');
        });
    }
    getName() {
        return this.name;
    }
    protected buildComponentName(type: string, name: string) {
        return upperCamelCase([name, type]);
    }
    abstract getComponent(type: string, name: string): ComponentType<any>;
    abstract hasComponent(type: string, name: string): boolean;
}

export default AbstractBundle;