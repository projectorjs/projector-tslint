// @flow

/**
 *  Docs:
 *  https://palantir.github.io/tslint/usage/configuration/
 */

"use strict";

const path = require("path");
const fs = require("fs");
const Linter = require("tslint").Linter;
const Configuration = require("tslint").Configuration;

function loadConfig(
  cache /*: ConfigCache */,
  configPath /*: string | null */,
  file /*: string */
) /*: Promise<mixed> */ {
  return new Promise(resolve => {
    const fileDir = path.dirname(file);
    if (cache[fileDir]) return resolve(cache[fileDir]);
    const config = Configuration.findConfiguration(configPath, file).results;
    cache[fileDir] = config;
    resolve(config);
  });
}

function lint(
  linterOptions /*: LinterOptions */,
  configPathsCache /*: ConfigCache */,
  configPath /*: string | null */,
  file /*: string */
) /*: Promise<LintResult>*/ {
  return loadConfig(configPathsCache, configPath, file).then(config => {
    const linter = new Linter(linterOptions);
    const fileContent = fs.readFileSync(file, "utf8");
    linter.lint(file, fileContent, config);
    return linter.getResult();
  });
}

function printLintResults(lintResults /*: Array<LintResult> */) {
  lintResults.forEach(lintResult => {
    if (lintResult.errorCount || lintResult.warningCount) {
      console.log(lintResult.output);
    }
  });
}

exports.run = function compile(opts /*: RunOptions */) {
  const configPathsCache = {};
  const configPath = opts.configPath || null;
  const linterOptions = opts.linterOptions || {};
  const files = (opts.files || []).map(file => lint(linterOptions, configPathsCache, configPath, file));

  return Promise.all(files)
    .catch((e /*: Error */) => {
      console.error(e.message || e);
      throw e;
    })
    .then(lintResults => {
      printLintResults(lintResults);

      // Fail if there are any errors in lintResults
      if (lintResults.some(lintResult => lintResult.errorCount)) {
        return Promise.reject(lintResults);
      }
    });
};
