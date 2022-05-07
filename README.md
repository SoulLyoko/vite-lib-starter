<center> A template for building Vue components library

<a href="https://soullyoko.github.io/vite-lib-starter/">Docs</a>

</center>

# Directory

```bash
├── .github         # github workflows
├── .husky          # git hooks
├── docs            # vitepress docs
├── packages        # lib source
├── scripts         # command scripts
├── src             # dev source
└── test            # unit tests
```

# Features

- Support Vue2 and Vue3 with [VueDemi](https://github.com/vueuse/vue-demi)
- Develop and build with [Vite](https://cn.vitejs.dev/)
- Unit Testing with [Vitest](https://cn.vitest.dev/)
- Docs with [VitePress](https://vitejs.cn/vitepress/)
- Auto CI, Deploy, Publish with GitHub Actions

# Try it

- Use this template
- Global rename `vite-lib-starter` and `ViteLibStarter` to your own library name.
- Generate your github personal access token on https://github.com/settings/tokens (pass it if you already have)
- Add your github personal access token named `ACCESS_TOKEN` (or any other name, it corresponds to [deploy.yml](./.github/workflows/deploy.yml#L21)) to your repo `Setting>Secrets>Actions`
- Generate your npm access token (pass it if you already have)
- Add your npm access token named `NPM_ACCESS_TOKEN` (or any other name, it corresponds to [publish.yml](./.github/workflows/publish.yml#L21)) to your repo `Setting>Secrets>Actions`

# Usage

## Development

Install and run

```bash
yarn
yarn dev
```

Other commands

```bash
yarn dev # dev on vue3
yarn dev:2 # dev on vue2
yarn docs:dev # dev docs
yarn test # test on vue3 in watch mode
yarn test:2 # test on vue2 with single run
yarn test:3 # test on vue3 with single run
yarn test:all # test both of vue2 and vue3 with single run
yarn switch:2 # switch packeges and vue-demi to vue2
yarn switch:3 # switch packeges and vue-demi to vue3
yarn release # release by choicing a version
yarn changelog:init # init changelog
```

To support Vue2, do not use SFC(.vue) files, just use the function `h()` (encapsulated by h-demi) in `.ts` files, example: [hello-world](./packages/components/hello-world/index.ts)

## Build

```bash
yarn build
```

## Publish

Automatic publish to npm using [publish.yml](./.github/workflows/publish.yml), after running `yarn release` and push to origin.

If you want to publish manually, remove `publish.yml` and run

```bash
yarn release
yarn build
npm publish
```

## Deploy docs

Automatic deployment to gh-pages using [deploy.yml](./.github/workflows/deploy.yml).

If you want to deploy manually, remove `deploy.yml` and run

```bash
yarn docs:build # docs/.vitepress/dist
```
