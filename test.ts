/// <reference path="./types.d.ts" />

import {
  assert,
  assertEquals,
  assertStringIncludes,
  assertThrowsAsync,
} from "./dev_deps.ts";

import { $, $e, $o, $s, cd, path, ProcessError } from "./mod.ts";

Deno.test("$ works", async () => {
  const result = await $`echo hello`;

  assertEquals(result.stdout, "hello\n");
});

Deno.test("$s works", async () => {
  const result1 = await $s`echo hello`;
  assertEquals(result1, 0);

  const result2 = await $s`echo hello >&2`;
  assertEquals(result2, 0);

  const result3 = await $s`echo hello; exit 1;`;
  assertEquals(result3, 1);
});

Deno.test("$o works", async () => {
  const result1 = await $o`echo hello`;
  assertEquals(result1, "hello");

  const result2 = await $o`echo hello >&2`;
  assertEquals(result2, "");

  const result3 = await $o`echo hello; exit 1;`;
  assertEquals(result3, "hello");
});

Deno.test("$e works", async () => {
  const result1 = await $e`echo hello`;
  assertEquals(result1, "");

  const result2 = await $e`echo hello >&2`;
  assertEquals(result2, "hello");

  const result3 = await $e`echo hello; exit 1;`;
  assertEquals(result3, "");
});

Deno.test("only stdout of an exec result will be used if passed to a second call to exec", async () => {
  const result1 = await $`echo sup >&2; echo hiii`;
  assertEquals(result1.stderr, "sup\n");

  const result2 = await $`echo ${result1}`;
  assertEquals(result2.stdout, "hiii\n");
});

Deno.test("passing environment variables to the child process", async () => {
  Deno.env.set("IS_THIS_THING_ON", "yes");
  const result = await $`echo $IS_THIS_THING_ON`;

  assertEquals(result.stdout, "yes\n");
});

Deno.test("escape and quote arguments", async () => {
  const complexArg = 'bar"";baz!$#^$\'&*~*%)({}||\\/';
  const result = (await $`echo ${complexArg}`);

  assertEquals(result.stdout.trim(), complexArg);
});

Deno.test("create a directory with a space in the name", async () => {
  const now = Date.now();
  const path = `./.tmp/test_${now}/foo bar`;

  try {
    await $`mkdir -p ${path}`;
    assert((await Deno.stat(path)).isDirectory);
  } finally {
    await Deno.remove(`./.tmp`, { recursive: true });
  }
});

Deno.test("subprocess command failure throws a ProcessError", async () => {
  await assertThrowsAsync(async () => await $`somefakebinary`, ProcessError);
});

Deno.test("cwd of the parent process is always the starting point for calls to cd", async () => {
  const parentPwd = Deno.cwd();

  try {
    const testStartingDir = path.dirname(path.fromFileUrl(import.meta.url));
    Deno.chdir(testStartingDir);

    cd("src");
    const pwd1 = await $`pwd`;
    assertEquals(pwd1.stdout.trim(), path.join(testStartingDir, "src"));

    cd(".github");
    const pwd2 = await $`pwd`;
    assertEquals(pwd2.stdout.trim(), path.join(testStartingDir, ".github"));
  } finally {
    Deno.chdir(parentPwd);
  }
});

Deno.test("markdown files can be executed as scripts", async () => {
  const output = await $
    `deno run -A --unstable ./dzx.ts ./examples/markdown.md`;

  assertStringIncludes(output.stdout, `$ echo "Hello World!"`);
  assertStringIncludes(output.stdout, `$ echo "Hello again World!"`);
});
