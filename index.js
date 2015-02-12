var fs = require('fs')
  , path = require('path')

/**
 * Recursively requires files in a specified directory
 * 
 * @param {String}   - absolute path of directory to read through
 * @param {Srray}    - valid file extensions - may contain '.js', '.json' or both
 * @param {Object}   - object to assign modules to
 * @returns {Object} - the exports from all required files
 */
module.exports = function reqdirp (dir, exts, exports) {
  if (!exts) exts = ['.js','.json']
  if (!exports) exports = {}
  fs.readdirSync(dir).forEach(function (name) {
    var filepath = path.join(dir, name)
    if ('index.js'===name) return
    if ('package.json'===name) return
    if ('node_modules'===name) return
    if (fs.lstatSync(filepath).isDirectory()) {
      exports[path.basename(filepath)] = reqdirp(filepath, exts, exports[path.basename(name)])
    } else {
      exts.forEach(function (ext) {
        if (ext===path.extname(name)) {
          exports[path.basename(name, ext)] = require(filepath)
        }
      })
    }
  })
  return exports
}
