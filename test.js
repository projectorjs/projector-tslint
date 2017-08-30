// @flow
"use strict";

const tslint = require("./");
const glob = require("glob");

test("success", () => {
  const files = glob.sync("./example/no-errors/src/*.ts");

  return tslint.run({
    files,
    configPath: "./example/no-errors/tslint.json"
  });
});

test("failure", () => {
  expect.assertions(1);
  const files = glob.sync("./example/with-errors/src/*.ts");

  return tslint
    .run({
      files,
      configPath: "./example/with-errors/tslint.json"
    })
    .catch(err => {
      expect(err.length).toMatchSnapshot();
    });
});
