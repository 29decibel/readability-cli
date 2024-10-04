# readability-cli

This is to use `bun` and [mozilla/readability](https://github.com/mozilla/readability) to build a Node-free cli.

## Why

I really want to use the a high quality tool to extract article from given URL. [mozilla/readability](https://github.com/mozilla/readability) is one of them, however, I still want to use Elixir/Phoenix for my overall application system.

Thanks to [bun](https://bun.sh/), we can wrap the readability's `parse` call in a script without touching NodeJS at all.

Ultimately all we need is a `bun` binary. (Optionally another bun built script. Or go with compiled single executable).

## Development and usage

To install dependencies:

```bash
bun install
```

Build the output

```bash
bun run build
```

Test run

```bash
bun run test-run
```

Get readability article JSON string

```bash
bun out/index.js https://github.com/mozilla/readability
```

Build cli binary

```bash
bun run build:cli
```

Using binary:

```bash
./dist/readability-cli https://bun.sh/docs/bundler/executables
```
