const compiler = require('vue-template-compiler');

module.exports = source => {
    const compiled = compiler.compile(source);
    return `module.exports = {
        default: function() {
            ${compiled.render}
        }
    }`
};
