import someFunc, { SomeType } from './utils';

class Foo {
  private prop: SomeType = { a: 1 };

  private method() {
    return 'bar';
  }

  secondMethod() {
    someFunc();
    return 'foo' + 'bar';
  }
}

export { SomeType };
