type DataType = 'text' | 'number'

enum DestinationName {
	suppliercode = 'suppliercode',
	vendorCode = 'vendorCode',
	name = 'name',
	description = 'description',
	buy = 'buy',
	rrp = 'rrp',
	vendorName = 'vendorName',
	category1 = 'category1',
	stockLevel1 = 'stockLevel1',
	stocketa = 'stocketa',
	weight = 'weight',
	warranty = 'warranty',
	colour = 'colour',
	features = 'features',
	specifications = 'specifications',
	imageurl = 'imageurl',
	vendorUrl = 'vendorUrl',
	supplierurl = 'supplierurl',
	accessories = 'accessories',
	shiptype = 'shiptype',
	gtin = 'gtin',
	category2 = 'category2',
	category3 = 'category3',
	stockLevel2 = 'stockLevel2',
	stockLevel3 = 'stockLevel3',
	stockLevel4 = 'stockLevel4',
	stockLevel5 = 'stockLevel5',
	stockLevel6 = 'stockLevel6',
	stockLevel7 = 'stockLevel7',
	stockLevel8 = 'stockLevel8',
	stockLevel9 = 'stockLevel9',
	stockText = 'stockText',
	minQuantity = 'minQuantity',
	maxQuantity = 'maxQuantity',
	requiresLicenseDetails = 'requiresLicenseDetails',
}

export type Destination = {
	index: number
	name: DestinationName
	dataType: DataType
	maxLength?: number
	allowMarkup?: boolean
	isRequired?: boolean
}

export const destinations: Record<DestinationName, Destination> = {
	suppliercode: {
		index: 0,
		name: DestinationName.suppliercode,
		dataType: 'text',
		maxLength: 50,
		isRequired: true,
	},
	vendorCode: {
		index: 1,
		name: DestinationName.vendorCode,
		dataType: 'text',
		maxLength: 50,
		isRequired: true,
	},
	name: {
		index: 2,
		name: DestinationName.name,
		dataType: 'text',
		isRequired: true,
	},
	description: {
		index: 3,
		name: DestinationName.description,
		dataType: 'text',
		allowMarkup: true,
	},
	buy: { index: 4, name: DestinationName.buy, dataType: 'number' },
	rrp: { index: 5, name: DestinationName.rrp, dataType: 'number' },
	vendorName: {
		index: 6,
		name: DestinationName.vendorName,
		dataType: 'text',
		maxLength: 100,
		isRequired: true,
	},
	category1: {
		index: 7,
		name: DestinationName.category1,
		dataType: 'text',
		maxLength: 100,
	},
	stockLevel1: {
		index: 8,
		name: DestinationName.stockLevel1,
		dataType: 'number',
	},
	stocketa: { index: 9, name: DestinationName.stocketa, dataType: 'text' },
	weight: { index: 10, name: DestinationName.weight, dataType: 'number' },
	warranty: { index: 11, name: DestinationName.warranty, dataType: 'text' },
	colour: { index: 12, name: DestinationName.colour, dataType: 'text' },
	features: {
		index: 13,
		name: DestinationName.features,
		dataType: 'text',
		allowMarkup: true,
	},
	specifications: {
		index: 14,
		name: DestinationName.specifications,
		dataType: 'text',
		allowMarkup: true,
	},
	imageurl: { index: 15, name: DestinationName.imageurl, dataType: 'text' },
	vendorUrl: { index: 16, name: DestinationName.vendorUrl, dataType: 'text' },
	supplierurl: {
		index: 17,
		name: DestinationName.supplierurl,
		dataType: 'text',
	},
	accessories: {
		index: 18,
		name: DestinationName.accessories,
		dataType: 'text',
	},
	shiptype: { index: 19, name: DestinationName.shiptype, dataType: 'text' },
	gtin: { index: 20, name: DestinationName.gtin, dataType: 'text' },
	category2: {
		index: 21,
		name: DestinationName.category2,
		dataType: 'text',
		maxLength: 100,
	},
	category3: {
		index: 22,
		name: DestinationName.category3,
		dataType: 'text',
		maxLength: 100,
	},
	stockLevel2: {
		index: 23,
		name: DestinationName.stockLevel2,
		dataType: 'number',
	},
	stockLevel3: {
		index: 24,
		name: DestinationName.stockLevel3,
		dataType: 'number',
	},
	stockLevel4: {
		index: 25,
		name: DestinationName.stockLevel4,
		dataType: 'number',
	},
	stockLevel5: {
		index: 26,
		name: DestinationName.stockLevel5,
		dataType: 'number',
	},
	stockLevel6: {
		index: 27,
		name: DestinationName.stockLevel6,
		dataType: 'number',
	},
	stockLevel7: {
		index: 28,
		name: DestinationName.stockLevel7,
		dataType: 'number',
	},
	stockLevel8: {
		index: 29,
		name: DestinationName.stockLevel8,
		dataType: 'number',
	},
	stockLevel9: {
		index: 30,
		name: DestinationName.stockLevel9,
		dataType: 'number',
	},
	stockText: { index: 31, name: DestinationName.stockText, dataType: 'text' },
	minQuantity: {
		index: 32,
		name: DestinationName.minQuantity,
		dataType: 'number',
	},
	maxQuantity: {
		index: 33,
		name: DestinationName.maxQuantity,
		dataType: 'number',
	},
	requiresLicenseDetails: {
		index: 34,
		name: DestinationName.requiresLicenseDetails,
		dataType: 'text',
	},
}

const requiredDestinations = Object.values(destinations).filter(
	(d) => d.isRequired
)

export type MappingConfig = {
	sourceIndex?: number
	sourceName?: string
	destination?: keyof typeof DestinationName
	skip?: boolean
}

export type SupplierSettingsConfig = {
	hasHeader?: boolean
	appendMissingColumns?: boolean
	skipRows?: number
	columnDelimiter?: string
	rowDelimiter?: string
	textDelimiter?: string
	encoding?: 'UTF-8' | 'ASCII'
	mappings: MappingConfig[]
}

class SupplierColumnMapping {
	'@DestinationIndex'?: Destination['index']
	'@DestinationName'?: DestinationName
	'@SourceIndex'?: MappingConfig['sourceIndex']
	'@SourceName'?: MappingConfig['sourceName']
	'@DataType'?: Destination['dataType']
	'@MaxLength'?: Destination['maxLength']
	'@AllowMarkup'?: Destination['allowMarkup']
	'@Skip'?: boolean

	constructor(config: MappingConfig) {
		if (!config.destination && !config.skip) {
			throw new Error(
				`Destination is required for column ${config.sourceIndex}${
					config.sourceName ? `(${config.sourceName})` : ''
				} unless the column is skipped`
			)
		}
		this['@SourceIndex'] = config.sourceIndex
		this['@Skip'] = config.skip
		this['@SourceName'] = config.sourceName
		const destination = config.destination && destinations[config.destination]
		this['@DestinationIndex'] = destination?.index
		this['@DestinationName'] = destination?.name
		this['@DataType'] = destination?.dataType
		this['@MaxLength'] = destination?.maxLength
		this['@AllowMarkup'] = destination?.allowMarkup
	}
}

const checkRequiredDestinations = (mappings: MappingConfig[]) => {
	const missingDestinations = requiredDestinations.filter(
		(destination) =>
			!mappings.some((mapping) => mapping.destination === destination.name)
	)
	if (missingDestinations.length > 0) {
		throw new Error(
			`Missing required columns: ${missingDestinations
				.map((d) => d.name)
				.join(', ')}`
		)
	}
}

const addMissingDestinations = (mappings: MappingConfig[]): MappingConfig[] => {
	const missingDestinations = Object.values(destinations).filter(
		(destination) =>
			!mappings.some((mapping) => mapping.destination === destination.name)
	)
	return mappings.concat(
		missingDestinations.map((destination) => ({
			destination: destination.name,
		}))
	)
}

export class SupplierFeedSettings {
	Settings: {
		HasHeader?: boolean
		AppendMissingColumns?: boolean
		SkipRows?: number
		ColumnDelimiter?: string
		RowDelimiter?: string
		TextDelimiter?: string
		Encoding?: 'UTF-8' | 'ASCII'
		Mappings: {
			Mapping: SupplierColumnMapping[]
		}
	}

	constructor(config: SupplierSettingsConfig) {
		try {
			checkRequiredDestinations(config.mappings)

			const allMappings = addMissingDestinations(config.mappings)

			this.Settings = {
				HasHeader: config.hasHeader,
				AppendMissingColumns: config.appendMissingColumns,
				SkipRows: config.skipRows,
				ColumnDelimiter: config.columnDelimiter,
				RowDelimiter: config.rowDelimiter ?? '\\n',
				TextDelimiter: config.textDelimiter ?? '"',
				Encoding: config.encoding,
				Mappings: {
					Mapping: allMappings.map(
						(mapping) => new SupplierColumnMapping(mapping)
					),
				},
			}
		} catch (error) {
			let message = `Error creating SupplierFeedSettings`
			if (error instanceof Error) {
				message = `${message}: ${error.message}`
			} else if (typeof error === 'string') {
				message = `${message}: ${error}`
			}
			throw new Error(message)
		}
	}
}
