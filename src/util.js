import { isFunction } from '@yanhaijing/is_js';

export function warn(...args) {
    if (console && isFunction(console.warn)) {
        console.warn('warn:', ...args);
    }
}
