// @flow

export type RuleFailure = mixed;

export interface Formatter {
  format(failures: RuleFailure[], fixes?: RuleFailure[]): string
}

export type LintResult = {
  errorCount: number,
  warningCount: number,
  failures: RuleFailure[],
  fixes?: RuleFailure[],
  format: string | Formatter,
  output: string
};

export type LinterOptions = {
  fix?: boolean,
  formatter?: string | Formatter,
  formattersDirectory?: string,
  rulesDirectory?: string | string[]
};

export type RunOptions = {
  files: Array<string>,
  configPath?: string,
  linterOptions?: LinterOptions
};

export type ConfigCache = {
  [key: string]: mixed
};
