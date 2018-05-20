[![Build Status](https://travis-ci.org/Microsoft/TypeScript.svg?branch=master)](https://travis-ci.org/Microsoft/TypeScript)
[![VSTS Build Status](https://typescript.visualstudio.com/_apis/public/build/definitions/cf7ac146-d525-443c-b23c-0d58337efebc/4/badge)](https://typescript.visualstudio.com/TypeScript/_build/index?context=allDefinitions&path=%5C&definitionId=4&_a=completed) 
[![npm version](https://badge.fury.io/js/typescript.svg)](https://www.npmjs.com/package/typescript)
[![install size](https://packagephobia.now.sh/badge?p=typescript)](https://packagephobia.now.sh/result?p=typescript)
[![Downloads](https://img.shields.io/npm/dm/typescript.svg)](https://www.npmjs.com/package/typescript)

# TypeScript

[![Join the chat at https://gitter.im/Microsoft/TypeScript](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/Microsoft/TypeScript?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

[TypeScript](https://www.typescriptlang.org/) is a language for application-scale JavaScript. TypeScript adds optional types, classes, and modules to JavaScript. TypeScript supports tools for large-scale JavaScript applications for any browser, for any host, on any OS. TypeScript compiles to readable, standards-based JavaScript. Try it out at the [playground](https://www.typescriptlang.org/play/), and stay up to date via [our blog](https://blogs.msdn.microsoft.com/typescript) and [Twitter account](https://twitter.com/typescriptlang).

## Installing

For the latest stable version:

```bash
npm install -g typescript
```

For our nightly builds:

```bash
npm install -g typescript@next
```

## Contribute

There are many ways to [contribute](https://github.com/Microsoft/TypeScript/blob/master/CONTRIBUTING.md) to TypeScript.
* [Submit bugs](https://github.com/Microsoft/TypeScript/issues) and help us verify fixes as they are checked in.
* Review the [source code changes](https://github.com/Microsoft/TypeScript/pulls).
* Engage with other TypeScript users and developers on [StackOverflow](https://stackoverflow.com/questions/tagged/typescript). 
* Join the [#typescript](https://twitter.com/#!/search/realtime/%23typescript) discussion on Twitter.
* [Contribute bug fixes](https://github.com/Microsoft/TypeScript/blob/master/CONTRIBUTING.md).
* Read the language specification ([docx](https://github.com/Microsoft/TypeScript/blob/master/doc/TypeScript%20Language%20Specification.docx?raw=true),
 [pdf](https://github.com/Microsoft/TypeScript/blob/master/doc/TypeScript%20Language%20Specification.pdf?raw=true), [md](https://github.com/Microsoft/TypeScript/blob/master/doc/spec.md)).

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/). For more information see 
the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or contact [opencode@microsoft.com](mailto:opencode@microsoft.com) 
with any additional questions or comments.

## Documentation

*  [Quick tutorial](https://www.typescriptlang.org/docs/tutorial.html)
*  [Programming handbook](https://www.typescriptlang.org/docs/handbook/basic-types.html)
*  [Language specification](https://github.com/Microsoft/TypeScript/blob/master/doc/spec.md)
*  [Homepage](https://www.typescriptlang.org/)

## Building

In order to build the TypeScript compiler, ensure that you have [Git](https://git-scm.com/downloads) and [Node.js](https://nodejs.org/) installed.

Clone a copy of the repo:

```bash
git clone https://github.com/Microsoft/TypeScript.git
```

Change to the TypeScript directory:

```bash
cd TypeScript
```

Install Gulp tools and dev dependencies:

```bash
npm install -g gulp
npm install
```

Use one of the following to build and test:

```
gulp local            # Build the compiler into built/local 
gulp clean            # Delete the built compiler 
gulp LKG              # Replace the last known good with the built one.
                      # Bootstrapping step to be executed when the built compiler reaches a stable state.
gulp tests            # Build the test infrastructure using the built compiler. 
gulp runtests         # Run tests using the built compiler and test infrastructure. 
                      # You can override the host or specify a test for this command. 
                      # Use host=<hostName> or tests=<testPath>. 
gulp runtests-browser # Runs the tests using the built run.js file. Syntax is gulp runtests. Optional
                        parameters 'host=', 'tests=[regex], reporter=[list|spec|json|<more>]'.
gulp baseline-accept  # This replaces the baseline test results with the results obtained from gulp runtests.
gulp lint             # Runs tslint on the TypeScript source.
gulp help             # List the above commands. 
```


## Usage

```bash
node built/local/tsc.js hello.ts
```


## Roadmap

For details on our planned features and future direction please refer to our [roadmap](https://github.com/Microsoft/TypeScript/wiki/Roadmap).
