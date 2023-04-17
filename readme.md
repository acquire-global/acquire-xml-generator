# Acquire XML Generator

This package facilitates the generation of various XML files formatted for use in Acquire's systems.

## Installation

Install directly from github, e.g.

    npm i github:acquire-global/acquire-xml-generator

## Usage

### Generate Supplier Feed Settings

```
import { generateSupplierFeedSettings } from 'acquire-xml-generator'

const supplierFeedXML = generateSupplierFeedSettings({
	mappings: [
		{ sourceIndex: 0, destination: 'buy' },
		{ sourceIndex: 1, destination: 'suppliercode' },
		{ sourceIndex: 2, destination: 'vendorCode' },
		{ sourceIndex: 3, destination: 'name' },
		{ sourceIndex: 4, destination: 'vendorName' },
	],
})
```

Produces:

```
<?xml version="1.0" encoding="UTF-8"?>
<Settings>
  <RowDelimiter>\n</RowDelimiter>
  <TextDelimiter>"</TextDelimiter>
  <Mappings>
    <Mapping DestinationIndex="4" DestinationName="buy" SourceIndex="0" DataType="number"/>
    <Mapping DestinationIndex="0" DestinationName="suppliercode" SourceIndex="1" DataType="text" MaxLength="50"/>
    <Mapping DestinationIndex="1" DestinationName="vendorCode" SourceIndex="2" DataType="text" MaxLength="50"/>
    <Mapping DestinationIndex="2" DestinationName="name" SourceIndex="3" DataType="text"/>
    <Mapping DestinationIndex="6" DestinationName="vendorName" SourceIndex="4" DataType="text" MaxLength="100"/>
  </Mappings>
</Settings>
```
