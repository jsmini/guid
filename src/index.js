let i = 0;

export function guid(prefix) {
    if (typeof prefix === 'undefined') {
        prefix = '';
    } else {
        prefix = String(prefix);
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
