import * as fs from 'fs';
import * as path from 'path';
import * as yaml from 'js-yaml';

export class ZipToTz {
  public short(zip: string): string {
    return this.getTimeZone(zip, 'timezones_to_zipcodes');
  }

  public full(zip:string): string {
    return this.getTimeZone(zip, 'timezones_to_zipcodes(full name)');
  }

  private getTimeZone(zip: string, fileName: string): string {
    const value = zip.replace(/\s/g, '');
    if (!Number.isInteger(Number(value)) || value.length != 5) {
      throw new Error('Invalid format or zipCode length');
    }
    const dirPath: string = path.dirname(__filename);
    console.log (dirPath);
    let zipList = <object> yaml.safeLoad(fs.readFileSync(dirPath +`/.${fileName}.yml`, 'utf8'));
    for (const [timezone] of Object.entries(zipList)) {
      const found = zipList[timezone].find(element => element === value)
      if (found)
        return timezone
    }
    throw new Error('Not found');
  }
}
