**[Polkadot JS API](../README.md)**

[Globals](../globals.md) › ["Metadata/v7/Metadata"](../modules/_metadata_v7_metadata_.md) › [MetadataV7](_metadata_v7_metadata_.metadatav7.md)

# Class: MetadataV7 <**S, T, V, E**>

**`name`** MetadataV7

**`description`** 
The runtime metadata as a decoded structure

## Type parameters

▪ **S**: *TypesDef*

▪ **T**: *object*

▪ **V**: *object*

▪ **E**: *object*

## Hierarchy

  * [Struct](_codec_struct_.struct.md)

  * **MetadataV7**

## Implements

* [Codec](../interfaces/_types_.codec.md)
* [MetadataInterface](../interfaces/_metadata_types_.metadatainterface.md)‹[ModuleMetadataV7](_metadata_v7_metadata_.modulemetadatav7.md)›

## Index

### Constructors

* [constructor](_metadata_v7_metadata_.metadatav7.md#constructor)

### Accessors

* [Type](_metadata_v7_metadata_.metadatav7.md#type)
* [encodedLength](_metadata_v7_metadata_.metadatav7.md#encodedlength)
* [hash](_metadata_v7_metadata_.metadatav7.md#hash)
* [isEmpty](_metadata_v7_metadata_.metadatav7.md#isempty)
* [modules](_metadata_v7_metadata_.metadatav7.md#modules)

### Methods

* [eq](_metadata_v7_metadata_.metadatav7.md#eq)
* [get](_metadata_v7_metadata_.metadatav7.md#get)
* [getAtIndex](_metadata_v7_metadata_.metadatav7.md#getatindex)
* [toArray](_metadata_v7_metadata_.metadatav7.md#toarray)
* [toHex](_metadata_v7_metadata_.metadatav7.md#tohex)
* [toJSON](_metadata_v7_metadata_.metadatav7.md#tojson)
* [toRawType](_metadata_v7_metadata_.metadatav7.md#torawtype)
* [toString](_metadata_v7_metadata_.metadatav7.md#tostring)
* [toU8a](_metadata_v7_metadata_.metadatav7.md#tou8a)
* [typesToMap](_metadata_v7_metadata_.metadatav7.md#static-typestomap)
* [with](_metadata_v7_metadata_.metadatav7.md#static-with)

## Constructors

###  constructor

\+ **new MetadataV7**(`value?`: any): *[MetadataV7](_metadata_v7_metadata_.metadatav7.md)*

*Overrides [Struct](_codec_struct_.struct.md).[constructor](_codec_struct_.struct.md#constructor)*

*Defined in [Metadata/v7/Metadata.ts:78](https://github.com/polkadot-js/api/blob/05d697c/packages/types/src/Metadata/v7/Metadata.ts#L78)*

**Parameters:**

Name | Type |
------ | ------ |
`value?` | any |

**Returns:** *[MetadataV7](_metadata_v7_metadata_.metadatav7.md)*

## Accessors

###  Type

• **get Type**(): *E*

*Inherited from [Struct](_codec_struct_.struct.md).[Type](_codec_struct_.struct.md#type)*

*Defined in [codec/Struct.ts:157](https://github.com/polkadot-js/api/blob/05d697c/packages/types/src/codec/Struct.ts#L157)*

**`description`** Returns the Type description to sthe structure

**Returns:** *E*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Struct](_codec_struct_.struct.md).[encodedLength](_codec_struct_.struct.md#encodedlength)*

*Defined in [codec/Struct.ts:170](https://github.com/polkadot-js/api/blob/05d697c/packages/types/src/codec/Struct.ts#L170)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *[IHash](../interfaces/_types_.ihash.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[hash](_codec_struct_.struct.md#hash)*

*Defined in [codec/Struct.ts:181](https://github.com/polkadot-js/api/blob/05d697c/packages/types/src/codec/Struct.ts#L181)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](../interfaces/_types_.ihash.md)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Struct](_codec_struct_.struct.md).[isEmpty](_codec_struct_.struct.md#isempty)*

*Defined in [codec/Struct.ts:142](https://github.com/polkadot-js/api/blob/05d697c/packages/types/src/codec/Struct.ts#L142)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  modules

• **get modules**(): *[Vec](_codec_vec_.vec.md)‹[ModuleMetadataV7](_metadata_v7_metadata_.modulemetadatav7.md)›*

*Defined in [Metadata/v7/Metadata.ts:88](https://github.com/polkadot-js/api/blob/05d697c/packages/types/src/Metadata/v7/Metadata.ts#L88)*

**`description`** The associated modules for this structure

**Returns:** *[Vec](_codec_vec_.vec.md)‹[ModuleMetadataV7](_metadata_v7_metadata_.modulemetadatav7.md)›*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [MetadataInterface](../interfaces/_metadata_types_.metadatainterface.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[eq](_codec_struct_.struct.md#eq)*

*Defined in [codec/Struct.ts:188](https://github.com/polkadot-js/api/blob/05d697c/packages/types/src/codec/Struct.ts#L188)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  get

▸ **get**(`name`: keyof S): *[Codec](../interfaces/_types_.codec.md) | undefined*

*Inherited from [Struct](_codec_struct_.struct.md).[get](_codec_struct_.struct.md#get)*

*Overrides void*

*Defined in [codec/Struct.ts:196](https://github.com/polkadot-js/api/blob/05d697c/packages/types/src/codec/Struct.ts#L196)*

**`description`** Returns a specific names entry in the structure

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | keyof S | The name of the entry to retrieve  |

**Returns:** *[Codec](../interfaces/_types_.codec.md) | undefined*

___

###  getAtIndex

▸ **getAtIndex**(`index`: number): *[Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[getAtIndex](_codec_struct_.struct.md#getatindex)*

*Defined in [codec/Struct.ts:203](https://github.com/polkadot-js/api/blob/05d697c/packages/types/src/codec/Struct.ts#L203)*

**`description`** Returns the values of a member at a specific index (Rather use get(name) for performance)

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *[Codec](../interfaces/_types_.codec.md)*

___

###  toArray

▸ **toArray**(): *[Codec](../interfaces/_types_.codec.md)[]*

*Inherited from [Struct](_codec_struct_.struct.md).[toArray](_codec_struct_.struct.md#toarray)*

*Defined in [codec/Struct.ts:210](https://github.com/polkadot-js/api/blob/05d697c/packages/types/src/codec/Struct.ts#L210)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *[Codec](../interfaces/_types_.codec.md)[]*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Struct](_codec_struct_.struct.md).[toHex](_codec_struct_.struct.md#tohex)*

*Defined in [codec/Struct.ts:217](https://github.com/polkadot-js/api/blob/05d697c/packages/types/src/codec/Struct.ts#L217)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJsonObject](../interfaces/_types_.anyjsonobject.md) | string*

*Implementation of [MetadataInterface](../interfaces/_metadata_types_.metadatainterface.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toJSON](_codec_struct_.struct.md#tojson)*

*Defined in [codec/Struct.ts:224](https://github.com/polkadot-js/api/blob/05d697c/packages/types/src/codec/Struct.ts#L224)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJsonObject](../interfaces/_types_.anyjsonobject.md) | string*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [MetadataInterface](../interfaces/_metadata_types_.metadatainterface.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toRawType](_codec_struct_.struct.md#torawtype)*

*Defined in [codec/Struct.ts:248](https://github.com/polkadot-js/api/blob/05d697c/packages/types/src/codec/Struct.ts#L248)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [MetadataInterface](../interfaces/_metadata_types_.metadatainterface.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toString](_codec_struct_.struct.md#tostring)*

*Defined in [codec/Struct.ts:257](https://github.com/polkadot-js/api/blob/05d697c/packages/types/src/codec/Struct.ts#L257)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *Uint8Array*

*Implementation of [MetadataInterface](../interfaces/_metadata_types_.metadatainterface.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toU8a](_codec_struct_.struct.md#tou8a)*

*Defined in [codec/Struct.ts:265](https://github.com/polkadot-js/api/blob/05d697c/packages/types/src/codec/Struct.ts#L265)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *Uint8Array*

___

### `Static` typesToMap

▸ **typesToMap**(`Types`: Record‹string, [Constructor](../interfaces/_types_.constructor.md)›): *Record‹string, string›*

*Inherited from [Struct](_codec_struct_.struct.md).[typesToMap](_codec_struct_.struct.md#static-typestomap)*

*Defined in [codec/Struct.ts:237](https://github.com/polkadot-js/api/blob/05d697c/packages/types/src/codec/Struct.ts#L237)*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | Record‹string, [Constructor](../interfaces/_types_.constructor.md)› |

**Returns:** *Record‹string, string›*

___

### `Static` with

▸ **with**<**S**>(`Types`: S): *[Constructor](../interfaces/_types_.constructor.md)‹[Struct](_codec_struct_.struct.md)‹S››*

*Inherited from [Struct](_codec_struct_.struct.md).[with](_codec_struct_.struct.md#static-with)*

*Defined in [codec/Struct.ts:119](https://github.com/polkadot-js/api/blob/05d697c/packages/types/src/codec/Struct.ts#L119)*

**Type parameters:**

▪ **S**: *TypesDef*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | S |

**Returns:** *[Constructor](../interfaces/_types_.constructor.md)‹[Struct](_codec_struct_.struct.md)‹S››*