const loaderUtil = require('loader-utils');

module.exports = function (source) {
    const url = loaderUtil.interpolateName(this, '[name].[ext]', source);
    console.log(url, '888888888');
    this.emitFile(url, source);
    return source;
}
