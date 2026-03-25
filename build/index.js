"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateSupplierFeedSettings = exports.destinations = void 0;
const fast_xml_parser_1 = require("fast-xml-parser");
const supplier_feeds_1 = require("./supplier-feeds");
var supplier_feeds_2 = require("./supplier-feeds");
Object.defineProperty(exports, "destinations", { enumerable: true, get: function () { return supplier_feeds_2.destinations; } });
const options = {
    attributeNamePrefix: '@',
    ignoreAttributes: false,
    processEntities: false,
    unpairedTags: ['Mapping', 'xml'],
    format: true,
    suppressUnpairedNode: false,
    suppressBooleanAttributes: false,
};
const xmlBuilder = new fast_xml_parser_1.XMLBuilder(options);
const generateSupplierFeedSettings = (config) => {
    var _a;
    return (`<?xml version="1.0" encoding="${(_a = config.encoding) !== null && _a !== void 0 ? _a : 'UTF-8'}"?>\n` +
        xmlBuilder.build(new supplier_feeds_1.SupplierFeedSettings(config)));
};
exports.generateSupplierFeedSettings = generateSupplierFeedSettings;
