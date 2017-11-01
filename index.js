var loaderUtils = require('loader-utils');

module.exports = function () {};

module.exports.pitch = function (request) {
  return [
    'var content = require(' + loaderUtils.stringifyRequest(this, '!!' + request) + ')',
    'if (content.locals) module.exports = content.locals;',
  ].join('\n');
};
