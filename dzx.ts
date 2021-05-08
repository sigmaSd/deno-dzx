/// <reference path="./types.d.ts" />

import { join, readAll } from "./deps.ts";
import { ProcessError } from "./src/process_error.ts";
import { $ } from "./mod.ts";

window.$ = $;

const script: string | undefined = Deno.args[0];

try {
  if (!script) {
    if (!Deno.isatty(Deno.stdin.rid)) {
      const data = new TextDecoder().decode(await readAll(Deno.stdin));
      if (data) {
        await import(
          `data:application/typescript,${encodeURIComponent(data)}`
        );
      } else {
        console.error(`usage: dzx <script>`);
        Deno.exit(2);
      }
    }
  } else if (script.startsWith("http://") || script.startsWith("https://")) {
    await import(script);
  } else if (script) {
    // await import(join($.cwd, script));
    const data = await Deno.readTextFile(join($.cwd, script));
    await import(`data:application/typescript,${encodeURIComponent(data)}`);
  } else {
    console.error(`usage: dzx <script>`);
    Deno.exit(1);
  }
} catch (error) {
  if (error instanceof ProcessError) {
    console.error(error);
  }
  throw error;
}
