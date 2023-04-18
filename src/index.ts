import { XMLBuilder, XmlBuilderOptionsOptional } from 'fast-xml-parser'
import { SupplierFeedSettings, SupplierSettingsConfig } from './supplier-feeds'
export { destinations, Destination, MappingConfig } from './supplier-feeds'

const options: XmlBuilderOptionsOptional = {
	attributeNamePrefix: '@',
	ignoreAttributes: false,
	processEntities: false,
	unpairedTags: ['Mapping', 'xml'],
	format: true,
	suppressUnpairedNode: false,
}

const xmlBuilder = new XMLBuilder(options)

export const generateSupplierFeedSettings = (
	config: SupplierSettingsConfig
): string => {
	return (`<?xml version="1.0" encoding="${config.encoding ?? 'UTF-8'}"?>\n` +
		xmlBuilder.build(new SupplierFeedSettings(config))) as string
}
