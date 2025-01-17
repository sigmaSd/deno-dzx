import type {
  $ as _$,
  $e as _$e,
  $o as _$o,
  $s as _$s,
  async as _async,
  cd as _cd,
  flags as _flags,
  fs as _fs,
  io as _io,
  log as _log,
  path as _path,
  quote as _quote,
  streams as _streams,
} from "./src/runtime/mod.ts";

import type {
  ArgParsingOptions as _ArgParsingOptions,
  Args as _Args,
  CopyOptions as _CopyOptions,
  DebouncedFunction as _DebouncedFunction,
  Deferred as _Deferred,
  DelayOptions as _DelayOptions,
  ExpandGlobOptions as _ExpandGlobOptions,
  FormatInputPathObject as _FormatInputPathObject,
  FormatterFunction as _FormatterFunction,
  GlobOptions as _GlobOptions,
  GlobToRegExpOptions as _GlobToRegExpOptions,
  HandlerOptions as _HandlerOptions,
  IOReadableStreamFromReaderOptions as _IOReadableStreamFromReaderOptions,
  IOWritableStreamFromWriterOptions as _IOWritableStreamFromWriterOptions,
  LevelName as _LevelName,
  LogConfig as _LogConfig,
  LogMode as _LogMode,
  ParsedPath as _ParsedPath,
  ReadableStreamFromReaderOptions as _ReadableStreamFromReaderOptions,
  ReadLineResult as _ReadLineResult,
  WalkEntry as _WalkEntry,
  WalkOptions as _WalkOptions,
  WritableStreamFromWriterOptions as _WritableStreamFromWriterOptions,
} from "./src/runtime/deps.ts";

declare global {
  /**
   * Run a command and return its output streams as well
   * as details about the process exit status.
   */
  const $: _$;

  /**
   * Run a command and return only its exit code
   *
   * If the command throws an error or fails in some way,
   * this method will not re-throw that error. It will
   * either return the exit code from the process, or `1`
   * if no exit code is produced (due to an error)
   *
   * If you want assurance that a failure in the child process
   * will throw an error, use `$`
   * @see $
   */
  const $s: typeof _$s;

  /**
   * Run a command and return only its trimmed stdout
   *
   * If the command throws an error or fails in some way,
   * this method will not re-throw that error. It will only
   * have output if the command produces text written
   * to its stdout stream.
   *
   * If you want assurance that a failure in the child process
   * will throw an error, use `$`
   * @see $
   */
  const $o: typeof _$o;

  /**
   * Run a command and return only its trimmed stderr
   *
   * If the command throws an error or fails in some way,
   * this method will not re-throw that error. It will only
   * have output if the command produces text written
   * to its stderr stream.
   *
   * If you want assurance that a failure in the child process
   * will throw an error, use `$`
   * @see exec
   */
  const $e: typeof _$e;
  const cd: typeof _cd;
  const quote: typeof _quote;

  // x
  const async: typeof _async;
  const path: typeof _path;
  const io: typeof _io;
  const streams: typeof _streams;
  const fs: typeof _fs;
  const log: typeof _log;
  const flags: typeof _flags;

  namespace async {
    type DebouncedFunction<T extends Array<unknown>> = _DebouncedFunction<T>;
    type Deferred<T> = _Deferred<T>;
    type DelayOptions = _DelayOptions;
  }

  namespace path {
    type FormatInputPathObject = _FormatInputPathObject;
    type GlobOptions = _GlobOptions;
    type GlobToRegExpOptions = _GlobToRegExpOptions;
    type ParsedPath = _ParsedPath;
  }

  namespace io {
    /** @deprecated This interface has been moved to `streams`. */
    type ReadableStreamFromReaderOptions = _IOReadableStreamFromReaderOptions;
    type ReadLineResult = _ReadLineResult;
    /** @deprecated This interface has been moved to `streams`. */
    type WritableStreamFromWriterOptions = _IOWritableStreamFromWriterOptions;
  }

  namespace streams {
    type ReadableStreamFromReaderOptions = _ReadableStreamFromReaderOptions;
    type WritableStreamFromWriterOptions = _WritableStreamFromWriterOptions;
  }

  namespace fs {
    type CopyOptions = _CopyOptions;
    type ExpandGlobOptions = _ExpandGlobOptions;
    type WalkEntry = _WalkEntry;
    type WalkOptions = _WalkOptions;
  }

  namespace log {
    type FormatterFunction = _FormatterFunction;
    type HandlerOptions = _HandlerOptions;
    type LevelName = _LevelName;
    type LogConfig = _LogConfig;
    type LogMode = _LogMode;
  }

  namespace flags {
    type ArgParsingOptions = _ArgParsingOptions;
    type Args = _Args;
  }

  interface Window {
    // dzx
    $: _$;
    $s: typeof _$s;
    $o: typeof _$o;
    $e: typeof _$e;
    cd: typeof _cd;
    quote: typeof _quote;

    // x
    async: typeof _async;
    path: typeof _path;
    io: typeof _io;
    streams: typeof _streams;
    fs: typeof _fs;
    log: typeof _log;
    flags: typeof _flags;
  }

  interface WorkerGlobalScope {
    // dzx
    $: _$;
    $s: typeof _$s;
    $o: typeof _$o;
    $e: typeof _$e;
    cd: typeof _cd;
    quote: typeof _quote;

    // x
    async: typeof _async;
    path: typeof _path;
    io: typeof _io;
    streams: typeof _streams;
    fs: typeof _fs;
    log: typeof _log;
    flags: typeof _flags;
  }
}
