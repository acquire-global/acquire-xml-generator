type DataType = 'text' | 'number';
declare enum DestinationName {
    suppliercode = "suppliercode",
    vendorCode = "vendorCode",
    name = "name",
    description = "description",
    buy = "buy",
    rrp = "rrp",
    vendorName = "vendorName",
    category1 = "category1",
    stockLevel1 = "stockLevel1",
    stocketa = "stocketa",
    weight = "weight",
    warranty = "warranty",
    colour = "colour",
    features = "features",
    specifications = "specifications",
    imageurl = "imageurl",
    vendorUrl = "vendorUrl",
    supplierurl = "supplierurl",
    accessories = "accessories",
    shiptype = "shiptype",
    gtin = "gtin",
    category2 = "category2",
    category3 = "category3",
    stockLevel2 = "stockLevel2",
    stockLevel3 = "stockLevel3",
    stockLevel4 = "stockLevel4",
    stockLevel5 = "stockLevel5",
    stockLevel6 = "stockLevel6",
    stockLevel7 = "stockLevel7",
    stockLevel8 = "stockLevel8",
    stockLevel9 = "stockLevel9",
    stockText = "stockText",
    minQuantity = "minQuantity",
    maxQuantity = "maxQuantity",
    requiresLicenseDetails = "requiresLicenseDetails"
}
export type Destination = {
    index: number;
    name: DestinationName;
    dataType: DataType;
    maxLength?: number;
    allowMarkup?: boolean;
    isRequired?: boolean;
};
export declare const destinations: Record<DestinationName, Destination>;
export type MappingConfig = {
    sourceIndex?: number;
    sourceName?: string;
    destination?: keyof typeof DestinationName;
    skip?: boolean;
};
export type SupplierSettingsConfig = {
    hasHeader?: boolean;
    appendMissingColumns?: boolean;
    skipRows?: number;
    columnDelimiter?: string;
    rowDelimiter?: string;
    textDelimiter?: string;
    encoding?: 'UTF-8' | 'ASCII';
    mappings: MappingConfig[];
};
declare class SupplierColumnMapping {
    '@DestinationIndex'?: Destination['index'];
    '@DestinationName'?: DestinationName;
    '@SourceIndex'?: MappingConfig['sourceIndex'];
    '@SourceName'?: MappingConfig['sourceName'];
    '@DataType'?: Destination['dataType'];
    '@MaxLength'?: Destination['maxLength'];
    '@AllowMarkup'?: Destination['allowMarkup'];
    '@Skip'?: boolean;
    constructor(config: MappingConfig);
}
export declare class SupplierFeedSettings {
    Settings: {
        HasHeader?: boolean;
        AppendMissingColumns?: boolean;
        SkipRows?: number;
        ColumnDelimiter?: string;
        RowDelimiter?: string;
        TextDelimiter?: string;
        Encoding?: 'UTF-8' | 'ASCII';
        Mappings: {
            Mapping: SupplierColumnMapping[];
        };
    };
    constructor(config: SupplierSettingsConfig);
}
export {};
//# sourceMappingURL=index.d.ts.map