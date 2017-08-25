# projector-typescript
> Run [TypeScript](https://www.typescriptlang.org/) with ease

### Transpile
```js
import * as ts from "projector-typescript";

export async function transpile() {
  const output = await ts.transpile({
    code: "import foo from 'bar'; foo();",
    compilerOptions: {
      /**
       * TypeScript Compiler Options
       * https://www.typescriptlang.org/docs/handbook/compiler-options.html
       */
    }
  });

  console.log(output.outputText);
}
```

### Compile TypeScript Project
```js
import * as ts from "projector-typescript";

export async function build() {
  /**
   * https://www.typescriptlang.org/docs/handbook/tsconfig-json.html
   *
   * Compile supports:
   * - files
   * – compilerOptions
   * - include / exclude
   * - loading existing tsconfig.json
   */
  await ts.compile({
    cwd: /* project path */,
    compilerOptions: {
      /* TypeScript Compiler Options */
    },
    include: ["src/**/*"],
    exclude: ["node_modules"]
  });
}
```
