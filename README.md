# zipToTz
Description 

  Updated list of US zipcodes from trusted source (2020).

Installation 

  npm install --save zipcode-to-timezone

Usage

  import { ZipToTz } from "zip-to-timezone";
  const zipToTz = new ZipToTz();
  
  const tz = zipToTz.full('33487'); // America/New_York
  const tz = zipToTz.short('33487'); // EDT 
  
