"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
const testOutput = (0, _1.generateSupplierFeedSettings)({
    mappings: [
        {
            sourceIndex: 0,
            sourceName: 'testSourceName',
            skip: true,
        },
        {
            sourceIndex: 1,
            destination: 'vendorCode',
        },
        {
            sourceIndex: 2,
            destination: 'name',
        },
        {
            sourceIndex: 3,
            destination: 'suppliercode',
        },
        {
            sourceIndex: 4,
            destination: 'vendorName',
        },
    ],
});
console.log(`testOutput: ${testOutput}`);
