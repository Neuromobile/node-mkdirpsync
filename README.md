# mkdirSync
A Node.js module to emulate Bash's mkdir -p based on fs.mkdirSync.

# example

## example.js

```js
var mkdirpSync = require('mkdirpsync');

mkdirpSync('/tmp/foo/bar/baz');
console.log('Dirs created!');
```

# methods

```js
var mkdirpSync = require('mkdirpsync');
```

## mkdirpSync(path, [mode])

It works the same way as [`fs.mkdirSync`](https://nodejs.org/api/fs.html#fs_fs_mkdirsync_path_mode), but recursively creating the dirs.

# install

With [npm](http://npmjs.org), do:
```
npm install mkdirpsync
```

# license

MIT
