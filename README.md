# zipToTz
## Description
```
  Updated list of US zipcodes from trusted source (2020).
```
## Installation 
```
  npm install --save zipcode-to-timezone
```
## Import
```
  const zipToTz = require('zip-to-timezone');
```
## Usage
```
  try {
  
    const tz = zipToTz.full('33487'); // America/New_York
  
    const tz = zipToTz.short('33487'); // EDT 
  
  } catch(error) {
    
  }
```
## Error Messages
```
   1. "Invalid format or zipCode length" // Zipcode must be length 5.

   2. "Not found" 
```
