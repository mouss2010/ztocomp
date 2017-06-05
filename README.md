# ztocomp
[![Build Status](https://travis-ci.org/mouss2010/ztocomp.svg?branch=master)](https://travis-ci.org/mouss2010/ztocomp)
[![codecov](https://codecov.io/gh/mouss2010/ztocomp/branch/master/graph/badge.svg)](https://codecov.io/gh/mouss2010/ztocomp)
[![npm version](https://badge.fury.io/js/ztocomp.svg)](http://badge.fury.io/js/ztocomp)
[![devDependency Status](https://david-dm.org/mouss2010/ztocomp/dev-status.svg)](https://david-dm.org/mouss2010/ztocomp?type=dev)
[![GitHub issues](https://img.shields.io/github/issues/mouss2010/ztocomp.svg)](https://github.com/mouss2010/ztocomp/issues)
[![GitHub stars](https://img.shields.io/github/stars/mouss2010/ztocomp.svg)](https://github.com/mouss2010/ztocomp/stargazers)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/mouss2010/ztocomp/master/LICENSE)

## Demo
https://mouss2010.github.io/ztocomp/

## Table of contents

- [About](#about)
- [Installation](#installation)
- [Documentation](#documentation)
- [Development](#development)
- [License](#license)

## About



## Installation

Install through npm:
```
npm install --save ztocomp
```

Then include in your apps module:

```typescript
import { Component, NgModule } from '@angular/core';
import { ZtocompModule } from 'ztocomp';

@NgModule({
  imports: [
    ZtocompModule.forRoot()
  ]
})
export class MyModule {}
```

Finally use in one of your apps components:
```typescript
import { Component } from '@angular/core';

@Component({
  template: '<hello-world></hello-world>'
})
export class MyComponent {}
```

You may also find it useful to view the [demo source](https://github.com/mouss2010/ztocomp/blob/master/demo/demo.component.ts).

### Usage without a module bundler
```
<script src="node_modules/ztocomp/bundles/ztocomp.umd.js"></script>
<script>
    // everything is exported ztocomp namespace
</script>
```

## Documentation
All documentation is auto-generated from the source via [compodoc](https://compodoc.github.io/compodoc/) and can be viewed here:
https://mouss2010.github.io/ztocomp/docs/

## Development

### Prepare your environment
* Install [Node.js](http://nodejs.org/) and NPM
* Install local dev dependencies: `npm install` while current directory is this repo

### Development server
Run `npm start` to start a development server on port 8000 with auto reload + tests.

### Testing
Run `npm test` to run tests once or `npm run test:watch` to continually run tests.

### Release
* Bump the version in package.json (once the module hits 1.0 this will become automatic)
```bash
npm run release
```

## License

MIT
