> # Interface: PrefabWasmModule <**S, T, V, E**>

## Type parameters

▪ **S**: *[ConstructorDef](../modules/_types_.md#constructordef)*

▪ **T**: *object*

▪ **V**: *object*

▪ **E**: *object*

## Hierarchy

  * [Struct](../classes/_codec_struct_.struct.md)

  * **PrefabWasmModule**

## Implements

* [Codec](_types_.codec.md)

## Index

### Constructors

* [constructor](_srml_contracts_types_.prefabwasmmodule.md#constructor)

### Properties

* [_reserved](_srml_contracts_types_.prefabwasmmodule.md#_reserved)
* [code](_srml_contracts_types_.prefabwasmmodule.md#code)
* [initial](_srml_contracts_types_.prefabwasmmodule.md#initial)
* [maximum](_srml_contracts_types_.prefabwasmmodule.md#maximum)
* [scheduleVersion](_srml_contracts_types_.prefabwasmmodule.md#scheduleversion)

### Accessors

* [Type](_srml_contracts_types_.prefabwasmmodule.md#type)
* [encodedLength](_srml_contracts_types_.prefabwasmmodule.md#encodedlength)
* [isEmpty](_srml_contracts_types_.prefabwasmmodule.md#isempty)

### Methods

* [eq](_srml_contracts_types_.prefabwasmmodule.md#eq)
* [get](_srml_contracts_types_.prefabwasmmodule.md#get)
* [getAtIndex](_srml_contracts_types_.prefabwasmmodule.md#getatindex)
* [toArray](_srml_contracts_types_.prefabwasmmodule.md#toarray)
* [toHex](_srml_contracts_types_.prefabwasmmodule.md#tohex)
* [toJSON](_srml_contracts_types_.prefabwasmmodule.md#tojson)
* [toRawType](_srml_contracts_types_.prefabwasmmodule.md#torawtype)
* [toString](_srml_contracts_types_.prefabwasmmodule.md#tostring)
* [toU8a](_srml_contracts_types_.prefabwasmmodule.md#tou8a)
* [with](_srml_contracts_types_.prefabwasmmodule.md#static-with)

## Constructors

###  constructor

\+ **new PrefabWasmModule**(`Types`: `S`, `value`: `V` | `Map<any, any>` | any[] | string, `jsonMap`: `Map<keyof S, string>`): *[PrefabWasmModule](_srml_contracts_types_.prefabwasmmodule.md)*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[constructor](../classes/_codec_struct_.struct.md#constructor)*

*Defined in [codec/Struct.ts:31](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/codec/Struct.ts#L31)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`Types` | `S` | - |
`value` | `V` \| `Map<any, any>` \| any[] \| string |  {} as unknown as V |
`jsonMap` | `Map<keyof S, string>` |  new Map() |

**Returns:** *[PrefabWasmModule](_srml_contracts_types_.prefabwasmmodule.md)*

## Properties

###  _reserved

• **_reserved**: *[PrefabWasmModuleReserved](_srml_contracts_types_.prefabwasmmodulereserved.md)*

*Defined in [srml/contracts/types.ts:40](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/srml/contracts/types.ts#L40)*

___

###  code

• **code**: *[Bytes](../classes/_primitive_bytes_.bytes.md)*

*Defined in [srml/contracts/types.ts:41](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/srml/contracts/types.ts#L41)*

___

###  initial

• **initial**: *[Compact](../classes/_codec_compact_.compact.md)‹*`u32`*›*

*Defined in [srml/contracts/types.ts:38](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/srml/contracts/types.ts#L38)*

___

###  maximum

• **maximum**: *[Compact](../classes/_codec_compact_.compact.md)‹*`u32`*›*

*Defined in [srml/contracts/types.ts:39](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/srml/contracts/types.ts#L39)*

___

###  scheduleVersion

• **scheduleVersion**: *[Compact](../classes/_codec_compact_.compact.md)‹*`u32`*›*

*Defined in [srml/contracts/types.ts:37](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/srml/contracts/types.ts#L37)*

## Accessors

###  Type

• **get Type**(): *`E`*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[Type](../classes/_codec_struct_.struct.md#type)*

*Defined in [codec/Struct.ts:163](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/codec/Struct.ts#L163)*

**`description`** Returns the Type description to sthe structure

**Returns:** *`E`*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[encodedLength](../classes/_codec_struct_.struct.md#encodedlength)*

*Defined in [codec/Struct.ts:176](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/codec/Struct.ts#L176)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[isEmpty](../classes/_codec_struct_.struct.md#isempty)*

*Defined in [codec/Struct.ts:148](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/codec/Struct.ts#L148)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[eq](../classes/_codec_struct_.struct.md#eq)*

*Defined in [codec/Struct.ts:187](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/codec/Struct.ts#L187)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  get

▸ **get**(`name`: keyof S): *[Codec](_types_.codec.md) | undefined*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[get](../classes/_codec_struct_.struct.md#get)*

*Overrides void*

*Defined in [codec/Struct.ts:195](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/codec/Struct.ts#L195)*

**`description`** Returns a specific names entry in the structure

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | keyof S | The name of the entry to retrieve  |

**Returns:** *[Codec](_types_.codec.md) | undefined*

___

###  getAtIndex

▸ **getAtIndex**(`index`: number): *[Codec](_types_.codec.md)*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[getAtIndex](../classes/_codec_struct_.struct.md#getatindex)*

*Defined in [codec/Struct.ts:202](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/codec/Struct.ts#L202)*

**`description`** Returns the values of a member at a specific index (Rather use get(name) for performance)

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *[Codec](_types_.codec.md)*

___

###  toArray

▸ **toArray**(): *[Codec](_types_.codec.md)[]*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toArray](../classes/_codec_struct_.struct.md#toarray)*

*Defined in [codec/Struct.ts:209](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/codec/Struct.ts#L209)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *[Codec](_types_.codec.md)[]*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toHex](../classes/_codec_struct_.struct.md#tohex)*

*Defined in [codec/Struct.ts:216](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/codec/Struct.ts#L216)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJsonObject](_types_.anyjsonobject.md) | string*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toJSON](../classes/_codec_struct_.struct.md#tojson)*

*Defined in [codec/Struct.ts:223](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/codec/Struct.ts#L223)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJsonObject](_types_.anyjsonobject.md) | string*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toRawType](../classes/_codec_struct_.struct.md#torawtype)*

*Defined in [codec/Struct.ts:239](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/codec/Struct.ts#L239)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toString](../classes/_codec_struct_.struct.md#tostring)*

*Defined in [codec/Struct.ts:252](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/codec/Struct.ts#L252)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toU8a](../classes/_codec_struct_.struct.md#tou8a)*

*Defined in [codec/Struct.ts:260](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/codec/Struct.ts#L260)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*

___

### `Static` with

▸ **with**<**S**>(`Types`: `S`): *[Constructor](_types_.constructor.md)‹*[Struct](../classes/_codec_struct_.struct.md)‹*`S`*›*›*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[with](../classes/_codec_struct_.struct.md#static-with)*

*Defined in [codec/Struct.ts:123](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/codec/Struct.ts#L123)*

**Type parameters:**

▪ **S**: *[ConstructorDef](../modules/_types_.md#constructordef)*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | `S` |

**Returns:** *[Constructor](_types_.constructor.md)‹*[Struct](../classes/_codec_struct_.struct.md)‹*`S`*›*›*