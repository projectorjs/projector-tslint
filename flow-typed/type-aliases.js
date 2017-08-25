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

export type ILinterOptions = {
  fix: boolean,
  formatter?: string | Formatter,
  formattersDirectory?: string,
  rulesDirectory?: string | string[]
};
