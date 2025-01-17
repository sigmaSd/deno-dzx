export interface ProcessOutputOptions {
  stdout: string;
  stderr: string;
  combined: string;
  status: Deno.ProcessStatus;
}

export class ProcessOutput {
  readonly stdout: string;
  readonly stderr: string;
  readonly combined: string;
  readonly status: Deno.ProcessStatus;

  constructor({ stdout, stderr, combined, status }: ProcessOutputOptions) {
    this.stdout = stdout;
    this.stderr = stderr;
    this.combined = combined;
    this.status = status;
  }

  toString(): string {
    return this.combined;
  }
}
