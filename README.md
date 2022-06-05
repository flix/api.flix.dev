# api.flix.dev

The source code for api.flix.dev.

## Building

In [Flix](https://github.com/flix/flix) repository:

```
cd main/src/library
java -jar ../../../build/libs/flix.jar --doc
```

Copy the resulting `build/api/api.json` file to replace `src/Data.js` in this repository and edit the first line to read:

```
export default {
```

Then:

```
npm ci 
npm start
```
