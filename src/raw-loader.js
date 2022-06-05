// 手写loaders

const fs = require('fs');
const path = require('path')

module.exports = function (source) {
    const {name} = this.query; // 获取参数
    const callback = this.async();
    const json = JSON.stringify(source).replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029');
    fs.readFile(path.join(__dirname, './async.txt'), 'utf-8', (err, data) => {
        // 异步调用
        callback(null, data)
    })

    // loader 报错方式
    // throw new Error('err');

    // callback 1、可以传递参数；2、返回数据
    // this.callback(null, json, 1, 2, 3);

    // return `export default ${json}`;
}
