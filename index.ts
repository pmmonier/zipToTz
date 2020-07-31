const fs = require('fs');
const yaml = require('js-yaml');

class ZipToTz {
    short(zip: string) {
        return this.getTimeZone(zip, 'timezones_to_zipcodes');
    }

    full(zip: string) {
        return this.getTimeZone(zip, 'timezones_to_zipcodes(full name)');
    }

    private getTimeZone(zip: string, fileName: string) {
        const value = zip.replace(/\s/g, '');
        if (!Number.isInteger(Number(value)) || value.length != 5) {
            console.log('Invalid format or zipCode length')
        }
        const filePath = process.cwd();
        let zipList = yaml.safeLoad(fs.readFileSync(`${filePath}/node_modules/zip-to-timezone/src/.${fileName}.yml`, 'utf8'));
        for (const [timezone] of Object.entries(zipList)) {
            const found = zipList[timezone].find(element => element === value)
            if (found)
                return timezone
        }
        return 'Not found'
    }
}

module.exports = new ZipToTz();
//Eastern Time  - America/New_York
//Central Time  - America/Chicago
// Mountain Time - America/Denver
// Pacific Time - America/Los_Angeles
// Arizona  -  America/Phoenix
// Hawaii  - Pacific/Honolulu
// Alaska  - America/Anchorage