var resolveModule = require('../_modules/resolve').sync;
var resolvePath = require('path').resolve;
var parseOpts = require('../_modules/minimist');
var opts = parseOpts(process.argv.slice(2), {
  alias: { r: 'require' },
  string: 'require',
  default: { r: [] }
});
var cwd = process.cwd();

if (typeof opts.require === 'string') {
  opts.require = [opts.require];
}

opts.require.forEach(function (module) {
  if (module) {
    /* This check ensures we ignore `-r ""`, trailing `-r`, or
     * other silly things the user might (inadvertently) be doing.
     */
    require(resolveModule(module, { basedir: cwd }));
  }
});

opts._.forEach(function (arg) {
  require(resolvePath(cwd, arg));
});

