"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZipToTz = void 0;
const fs = require('fs');
const yaml = require('js-yaml');
class ZipToTz {
    short(zip) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getTimeZone(zip, 'timezones_to_zipcodes');
        });
    }
    full(zip) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getTimeZone(zip, 'timezones_to_zipcodes(full name)');
        });
    }
    getTimeZone(zip, fileName) {
        return __awaiter(this, void 0, void 0, function* () {
            const value = zip.replace(/\s/g, '');
            if (!Number.isInteger(Number(value)) || value.length != 5) {
                console.log('Invalid format or zipCode length');
            }
            let fileContents = yield fs.readFileSync(`./src/${fileName}.yml`, 'utf8');
            let data = yaml.safeLoad(fileContents);
            for (const [timezone] of Object.entries(data)) {
                const found = data[timezone].find(element => element === value);
                console.log(timezone);
                if (found)
                    return timezone;
            }
            return 'Not found';
        });
    }
}
exports.ZipToTz = ZipToTz;
//# sourceMappingURL=index.js.map