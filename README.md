# tiptap-fork-json-html-converter

This is a personal, special-purpose, temporary fork of [TipTap](https://github.com/ueberdosis/tiptap). It is not a replacement for the original; unless you specifically need this fork, get your TipTap packages from the [official source](https://tiptap.dev/).

### Publish

 - Create `~/.npmrc` with publish token

 - Clone and stay on `main` branch

 - `npm install`

 - Update version in `package.json`

 - `npm run publish`

### Use

 - Create `~/.npmrc` with the read-packages token

 - Install:

```
npm install @fsctl/tiptap-fork-json-html-converter
```

 - Write your package.json to reference this package:

```
{
  "name": "@my-org/my-app",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "author": "",
  "license": "MIT",
  "dependencies": {
    "@fsctl/tiptap-fork-json-html-converter": "^2.0.0"
  }
}
```
