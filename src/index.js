export function Guid(index = 0) {
    index = parseInt(index, 10);
    
    if (isNaN(index)) {
        index = 0;
    }

    this.index = index;
}

Guid.prototype.guid = function (prefix = '') {
    prefix = String(prefix);

    return prefix + this.index++;
};

const g = new Guid();

export function guid(prefix) {
    return g.guid(prefix);
}

export function uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        let r = Math.random() * 16 | 0;
        let v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    }).toUpperCase();
}
