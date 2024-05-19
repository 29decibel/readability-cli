# readability-cli

This is to use `bun` and [mozilla/readability](https://github.com/mozilla/readability) to build a Node-free cli.

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
./readability-cli https://bun.sh/docs/bundler/executables
```
