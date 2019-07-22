> # Interface: ConstantCodec

## Hierarchy

* `Codec`

  * **ConstantCodec**

## Index

### Properties

* [encodedLength](_consts_types_.constantcodec.md#encodedlength)
* [isEmpty](_consts_types_.constantcodec.md#isempty)
* [meta](_consts_types_.constantcodec.md#meta)

### Methods

* [eq](_consts_types_.constantcodec.md#eq)
* [toHex](_consts_types_.constantcodec.md#tohex)
* [toJSON](_consts_types_.constantcodec.md#tojson)
* [toRawType](_consts_types_.constantcodec.md#torawtype)
* [toString](_consts_types_.constantcodec.md#tostring)
* [toU8a](_consts_types_.constantcodec.md#tou8a)

## Properties

###  encodedLength

• **encodedLength**: *number*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:57](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/types.ts#L57)*

**`description`** The length of the value when encoded as a Uint8Array

___

###  isEmpty

• **isEmpty**: *boolean*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:62](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/types.ts#L62)*

**`description`** Checks if the value is an empty value

___

###  meta

• **meta**: *`MetaV6`*

*Defined in [consts/types.ts:9](https://github.com/polkadot-js/api/blob/98cffea/packages/api-metadata/src/consts/types.ts#L9)*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:67](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/types.ts#L67)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  toHex

▸ **toHex**(`isLe?`: undefined | false | true): *string*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:72](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/types.ts#L72)*

**`description`** Returns a hex string representation of the value. isLe returns a LE (number-only) representation

**Parameters:**

Name | Type |
------ | ------ |
`isLe?` | undefined \| false \| true |

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *`AnyJson`*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:77](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/types.ts#L77)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *`AnyJson`*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:82](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/types.ts#L82)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:87](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/types.ts#L87)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:93](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/types.ts#L93)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*