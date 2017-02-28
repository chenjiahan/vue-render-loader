const compiler = require('vue-template-compiler');
const transpile = require('vue-template-es2015-compiler')

module.exports = function (html) {
    this.cacheable();

    const compiled = compiler.compile(html);

    if (compiled.errors.length) {
        this.emitError(
            `\n  Error compiling template:\n${pad(html)}\n` +
            compiled.errors.map(e => `  - ${e}`).join('\n') + '\n'
        );
    }

    return transpile('var template = {' +
      'render:' + toFunction(compiled.render) + ',' +
      'staticRenderFns: [' + compiled.staticRenderFns.map(toFunction).join(',') + ']' +
    '}').replace('var template =', 'export default ');
};

function pad (html) {
  return html.split(/\r?\n/).map(line => `  ${line}`).join('\n')
}

function toFunction (code) {
  return `function (){${code}}`;
}
