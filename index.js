const fs = require('fs');
const yaml = require('js-yaml');
class ZipToTz {
    short(zip) {
        return this.getTimeZone(zip, 'timezones_to_zipcodes');
    }
    full(zip) {
        return this.getTimeZone(zip, 'timezones_to_zipcodes(full name)');
    }
    getTimeZone(zip, fileName) {
        const value = zip.replace(/\s/g, '');
        if (!Number.isInteger(Number(value)) || value.length != 5) {
            throw new Error('Invalid format or zipCode length');
        }
        const filePath = process.cwd();
        let zipList = yaml.safeLoad(fs.readFileSync(`${filePath}/node_modules/zip-to-timezone/src/.${fileName}.yml`, 'utf8'));
        for (const [timezone] of Object.entries(zipList)) {
            const found = zipList[timezone].find(element => element === value);
            if (found)
                return timezone;
        }
        throw new Error('Not found');
    }
}
module.exports = new ZipToTz();
//# sourceMappingURL=index.js.map