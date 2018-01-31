# Money Exchange

### Quick start

**Make sure you have Node version >= 6.0 and NPM >= 3**

**Use latest TypeScript compiler**
TypeScript 2.1.x includes everything you need. Make sure to upgrade, even if you installed TypeScript previously.
```
npm install --global typescript
```

```bash
# clone our repo
# --depth 1 removes all but one .git commit history
git clone --depth 1 https://github.com/Luiggi370z/money-exchange-angular2.git

# change directory to our repo
cd angular-starter

# WINDOWS only. In terminal as administrator
npm install -g node-pre-gyp

# install the repo with npm
npm install

# start the server
npm start

# use Hot Module Replacement
npm run server:dev:hmr

# run unit tests
npm run test

# watch and run our tests
npm run watch:test

# build dist folder with necessary files
npm run build:prod

```
go to [http://0.0.0.0:3000](http://0.0.0.0:3000) or [http://localhost:3000](http://localhost:3000) in your browser

**Connection to REST API Service**
You can change the url in `src/app/core/api.service.ts` line 9 to use a local server or a public server.

# Table of Contents
* [Stack](#stack)
* [File Structure](#file-structure)
* [Getting Started](#getting-started)
    * [Dependencies](#dependencies)
    * [Installing](#installing)
    * [Running the app](#running-the-app)
* [Configuration](#configuration)

## Stack
* Angular Starter Kit from AngularClass.
* Angular 2 (5.x).
* Webpack.
* Typescript.
* Jasmin / Karma.
* Semantic UI (referenced as a cdn only).
* Sass.

## File Structure
We use the component approach in our starter. This is the new standard for developing Angular apps and a great way to ensure maintainable code by encapsulation of our behavior logic. A component is basically a self contained app usually in a single file or a folder with each concern as a file: style, template, specs and component class. Here's how it looks:
```
angular-starter/
 ├──config/                        * our configuration
 │   ├──helpers.js                 * helper functions for our configuration files
 │   ├──spec-bundle.js             * ignore this magic that sets up our Angular testing environment
 │   ├──karma.conf.js              * karma config for our unit tests
 │   ├──protractor.conf.js         * protractor config for our end-to-end tests
 │   ├──webpack.dev.js             * our development webpack config
 │   ├──webpack.prod.js            * our production webpack config
 │   └──webpack.test.js            * our testing webpack config
 │
 ├──src/                           * our source files
 │   ├──main.browser.ts            * our entry file for our browser environment
 │   ├──index.html                 * Index.html: where we generate our index page
 │   ├──polyfills.ts               * our polyfills file
 │   │
 │   ├──app/                       * WebApp: folder
 │   │   ├──app.component.spec.ts  * a simple test of components in app.component.ts
 │   │   ├──app.component.ts       * a simple version of our App component components
 │   │   ├──core/                  * our main components and/or services that will be use in the app
 │   │   ├──shared/                * our shared components: Pipes, Components, etc.
 │   │   └──home/                  * our home component
 │   │
 │   └──assets/                    * static assets are served here
 │       └──icon/                  * our list of icons from www.favicon-generator.org
 │
 ├──tslint.json                    * typescript lint config
 ├──typedoc.json                   * typescript documentation generator
 ├──tsconfig.json                  * typescript config used outside webpack
 ├──tsconfig.webpack.json          * config that webpack uses for typescript
 ├──package.json                   * what npm uses to manage its dependencies
 └──webpack.config.js              * webpack main configuration file

```

# Getting Started
## Dependencies
What you need to run this app:
* `node` and `npm` (`brew install node`)
* Ensure you're running the latest versions Node `v6.x.x`+ (or `v7.x.x`) and NPM `3.x.x`+

> If you have `nvm` installed, which is highly recommended (`brew install nvm`) you can do a `nvm install --lts && nvm use` in `$` to run with the latest Node LTS. You can also have this `zsh` done for you [automatically](https://github.com/creationix/nvm#calling-nvm-use-automatically-in-a-directory-with-a-nvmrc-file)

Once you have those, you should install these globals with `npm install --global`:
* `webpack` (`npm install --global webpack`)
* `webpack-dev-server` (`npm install --global webpack-dev-server`)
* `karma` (`npm install --global karma-cli`)
* `protractor` (`npm install --global protractor`)
* `typescript` (`npm install --global typescript`)

## Installing
* `fork` this repo
* `clone` your fork
* `npm install webpack-dev-server rimraf webpack -g` to install required global dependencies
* `npm install` to install all dependencies or `yarn`
* `npm run server` to start the dev server in another tab

## Running the app
After you have installed all dependencies you can now run the app. Run `npm run server` or `npm start` to start a local server using `webpack-dev-server` which will watch, build (in-memory), and reload for you. The port will be displayed to you as `http://0.0.0.0:3000` or `http://localhost:3000`

### server
```bash
# development
npm run server

# production
npm run build:prod
npm run server:prod
```

## Other commands

### build files
```bash
# development
npm run build:dev
# production (jit)
npm run build:prod
# AoT
npm run build:aot
```

### hot module replacement
```bash
npm run server:dev:hmr
```

### watch and build files
```bash
npm run watch
```

### run unit tests
```bash
npm run test
```

### watch and run our tests
```bash
npm run watch:test
```

# Configuration
Configuration files live in `config/` we are currently using webpack, karma, and protractor for different stages of your application
