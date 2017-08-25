const ts = require("../../index");

ts.compile({
  compilerOptions: {
    project: __dirname,
    sourceMap: true,
    declaration: true
  }
});
