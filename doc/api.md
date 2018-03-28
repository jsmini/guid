# 文档
简单好用的JS全局ID生成工具

## guid
生成全局唯一的ID，支持0-2^64个，可选前缀

- param {string} prefix 指定前缀
- return {string} 生成的ID

```js
guid(); // '0'
guid(); // '1'

guid('a-'); // 'a-2'
```

**注意:** 若果传入prefix为非字符串，将进行自动转换

## uuid
生成32的字符串，每一位都是随机的16进制数，重复的概率是1/(16^32)

- return {string} 生成的随机字符串

```js
uuid(); // 'C7604E73-0EB9-4438-A1C1-5FE0A8C2C6A6'
uuid(); // 'E0375220-E1E4-4C4B-8525-DA2F058BB950'
uuid(); // '3B271CDF-94D1-4DDE-BD6E-7280CC924D8B'
```
