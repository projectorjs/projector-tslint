import someFunc, { SomeType } from "./utils";

class Foo {
  private prop: SomeType = { a: 1 };

  private method() {
    return "bar";
  }

  private sum() {
    const a: number = 1 + "2";
  }

  secondMethod() {
    someFunc();
    this.test();
    return "foo" + "bar";
  }
}

export { SomeType };
