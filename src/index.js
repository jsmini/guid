import { isString } from '@yanhaijing/is_js';

import { warn } from './util';

let i = 0;

export function guid(prefix = '') {
    if (!isString(prefix)) {
        warn('guid param must is string');
        prefix = '';
    }

    return prefix + i++;
}

export function uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        let r = Math.random() * 16 | 0;
        let v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    }).toUpperCase();
}
