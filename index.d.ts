export as namespace jsminiGuid;

export function guid (prefix?: string): string;
export function uuid (): string;

export declare class Guid {
    constructor(index?: number);
    guid (prefix?: string): string;
}
