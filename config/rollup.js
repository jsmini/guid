var pkg = require('../package.json');

// 兼容 jslib-base 和 @yanhaijing/jslib-base 
var name = pkg.name.split('/').pop();
var version = pkg.version;

var banner = 
`/*!
 * guid.js ${version} (https://github.com/yanhaijing/guid.js)
 * API https://github.com/yanhaijing/guid.js/blob/master/doc/api.md
 * Copyright 2017-${(new Date).getFullYear()} yanhaijing. All Rights Reserved
 * Licensed under MIT (https://github.com/yanhaijing/guid.js/blob/master/LICENSE)
 */
`;

exports.name = name;
exports.banner = banner;
