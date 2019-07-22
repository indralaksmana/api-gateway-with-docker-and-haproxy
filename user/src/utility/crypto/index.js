const encrypter = require('object-encrypter');

const engine = encrypter('J4Mjdn212kaxeSsHnikL', { outputEncoding: 'hex' });
exports.encrypt = obj => engine.encrypt(obj)
exports.decrypt = obj => engine.decrypt(obj)
