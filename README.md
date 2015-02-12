# reqdirp

Recursively requires files in a specified directory

## API

### reqdirp(dir [,exts, exports])

Returns and object containing all module.exports from .js/.json files within a directory and its subdirectories

```js
var reqdirp = require('reqdirp')
  , modules = reqdirp('./path/to/some/directory')
  
// `modules` will now be an object containing all exports from every .js and .json file
// reqdirp excludes index.js, package.json, and node_modules
  
```

#### dir

Type: `String`

Path of directory to be required. If not absolute, will be relative to `process.cwd()`

#### exts

Type: `Array` Default: `['.js','.json']`

A list of files to require()

#### exports

Type: `Object` Default: `{}`

An object to assign all module.exports to
