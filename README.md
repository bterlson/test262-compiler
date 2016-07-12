# test262-compiler
Compiles a test262 test into an [eshost](https://github.com/bterlson/eshost-cli)-runnable script.

## Example

```
npm install -g test262-compiler
test262-compiler path\to\test262\test.js | eshost --async
```

Note: the --async option is technically only required for async test262 tests but it doesn't hurt to always pass that option when running test262 tests with eshost.

## Options
* *test262Dir*: Path to test262 directory. By default detected automatically from the test path. Only needs to be passed when running tests outside the test262 directory.
* *includesDir*: Path to test262 includes directory. By default inferred from test262Dir.
