# projector-tslint
> Run [TSLint](https://palantir.github.io/tslint/) with ease

### Run
```js
import * as tslint from "projector-tslint";
import * as glob from "glob";

export async function lint() {
  const files = glob.sync("./src/**/*.+(ts|tsx)", { absolute: true });

  tslint.run({
    files: files,
    configPath: /* ... optional path to a tslint.json */,
    linterOptions: { // https://github.com/palantir/tslint/blob/544a5ac47e83a326c5cfcbbc906941b3e3192be7/src/index.ts#L46-L51
      formatter: "stylish", // https://palantir.github.io/tslint/formatters/
      fix: true
    }
  });
}
```
