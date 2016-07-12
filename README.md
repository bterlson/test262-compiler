# test262-compiler
Compiles a test262 test into an [eshost](https://github.com/bterlson/eshost-cli)-runnable script.

## Example

```
npm install -g test262-compiler
test262-compiler path\to\test262\test.js | eshost
```

## Options
* *test262Dir*: Path to test262 directory. By default detected automatically from the test path. Only needs to be passed when running tests outside the test262 directory.
* *includesDir*: Path to test262 includes directory. By default inferred from test262Dir.
