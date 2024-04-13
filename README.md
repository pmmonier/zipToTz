# zipToTz

This is a fork of https://github.com/pmmonier/zipToTz (original project)
This package provides an updated list of US zipcodes from trusted source (2020).

## Installation

```bash
  npm install --save zip-to-timezone
```

## Import

```javascript
const { ZipToTz } = require("zip-to-timezone");
// OR
import { ZipToTz } from "zip-to-timezone";
```

## Usage

```javascript
try {
  const tz = new ZipToTz().full("33487"); // America/New_York
  const tz = new ZipToTz().short("33487"); // EDT
} catch (error) {
  // handler error
}
```

## Error Messages

- Incorrect input

If the input is non-number as string or the length is not 5

- Not found

If the provided zip does not have any mapping.

## build and test

```bash
npm install && npm test
```

## publish

```bash
npm run publish
```

> Note: Do not forget to update the version using `npm version` command!
