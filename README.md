# json-env

Loads json file into process.env

## Getting started

```bash
npm install json-env
```

Require as soon as possible. This used sync to open the file to be sure that nothing runs until this is done.

```js
require('json-env')();
```

You can load a specific file or overwrite env variables with another require

```js
require('json-env')('myconfig.json');

require('json-env')(); // loads .env.json by default
require('json-env')('.env.overwrite.json'); // overwrites keys already in process.env

```
