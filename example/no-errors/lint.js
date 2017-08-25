const glob = require("glob");
const tslint = require("../../index");

const files = glob.sync("./src/**/*.+(ts|tsx)", { absolute: true });

tslint.run({
  files: files,
  linterOptions: {
    formatter: "stylish",
    fix: true
  }
});
