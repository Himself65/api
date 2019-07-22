> # Class: Broadcast <**T**>

**`name`** Broadcast

**`description`** 
An [ExtrinsicStatus](_rpc_extrinsicstatus_.extrinsicstatus.md) indicating that the [Extrinsic](_primitive_extrinsic_extrinsic_.extrinsic.md) has been boradcast to peers

## Type parameters

▪ **T**: *[Codec](../interfaces/_types_.codec.md)*

## Hierarchy

  * [Vector](_codec_vector_.vector.md)

  * **Broadcast**

## Implements

* [Codec](../interfaces/_types_.codec.md)

## Indexable

● \[▪ **n**: *number*\]: `T`

## Index

### Constructors

* [constructor](_rpc_extrinsicstatus_.broadcast.md#constructor)

### Accessors

* [Type](_rpc_extrinsicstatus_.broadcast.md#type)
* [encodedLength](_rpc_extrinsicstatus_.broadcast.md#encodedlength)
* [isEmpty](_rpc_extrinsicstatus_.broadcast.md#isempty)
* [length](_rpc_extrinsicstatus_.broadcast.md#length)

### Methods

* [eq](_rpc_extrinsicstatus_.broadcast.md#eq)
* [filter](_rpc_extrinsicstatus_.broadcast.md#filter)
* [map](_rpc_extrinsicstatus_.broadcast.md#map)
* [toArray](_rpc_extrinsicstatus_.broadcast.md#toarray)
* [toHex](_rpc_extrinsicstatus_.broadcast.md#tohex)
* [toJSON](_rpc_extrinsicstatus_.broadcast.md#tojson)
* [toRawType](_rpc_extrinsicstatus_.broadcast.md#torawtype)
* [toString](_rpc_extrinsicstatus_.broadcast.md#tostring)
* [toU8a](_rpc_extrinsicstatus_.broadcast.md#tou8a)
* [decodeVector](_rpc_extrinsicstatus_.broadcast.md#static-decodevector)
* [with](_rpc_extrinsicstatus_.broadcast.md#static-with)

## Constructors

###  constructor

\+ **new Broadcast**(`Type`: [Constructor](../interfaces/_types_.constructor.md)‹*`T`*›, `value`: [Vector](_codec_vector_.vector.md)‹*any*› | `Uint8Array` | string | any[]): *[Broadcast](_rpc_extrinsicstatus_.broadcast.md)*

*Inherited from [Vector](_codec_vector_.vector.md).[constructor](_codec_vector_.vector.md#constructor)*

*Defined in [codec/Vector.ts:22](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/codec/Vector.ts#L22)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`Type` | [Constructor](../interfaces/_types_.constructor.md)‹*`T`*› | - |
`value` | [Vector](_codec_vector_.vector.md)‹*any*› \| `Uint8Array` \| string \| any[] |  [] as any[] |

**Returns:** *[Broadcast](_rpc_extrinsicstatus_.broadcast.md)*

## Accessors

###  Type

• **get Type**(): *string*

*Inherited from [Vector](_codec_vector_.vector.md).[Type](_codec_vector_.vector.md#type)*

*Defined in [codec/Vector.ts:70](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/codec/Vector.ts#L70)*

**`description`** The type for the items

**Returns:** *string*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[encodedLength](_codec_abstractarray_.abstractarray.md#encodedlength)*

*Defined in [codec/AbstractArray.ts:29](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/codec/AbstractArray.ts#L29)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[isEmpty](_codec_abstractarray_.abstractarray.md#isempty)*

*Defined in [codec/AbstractArray.ts:22](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/codec/AbstractArray.ts#L22)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  length

• **get length**(): *number*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[length](_codec_abstractarray_.abstractarray.md#length)*

*Overrides void*

*Defined in [codec/AbstractArray.ts:38](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/codec/AbstractArray.ts#L38)*

**`description`** The length of the value

**Returns:** *number*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[eq](_codec_abstractarray_.abstractarray.md#eq)*

*Defined in [codec/AbstractArray.ts:46](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/codec/AbstractArray.ts#L46)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  filter

▸ **filter**(`callbackfn`: function, `thisArg?`: any): *`T`[]*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[filter](_codec_abstractarray_.abstractarray.md#filter)*

*Overrides void*

*Defined in [codec/AbstractArray.ts:116](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/codec/AbstractArray.ts#L116)*

**`description`** Filters the array with the callback

**Parameters:**

▪ **callbackfn**: *function*

The filter function

▸ (`value`: `T`, `index`: number, `array`: `T`[]): *any*

**Parameters:**

Name | Type |
------ | ------ |
`value` | `T` |
`index` | number |
`array` | `T`[] |

▪`Optional`  **thisArg**: *any*

The `this` object to apply the result to

**Returns:** *`T`[]*

___

###  map

▸ **map**<**U**>(`callbackfn`: function, `thisArg?`: any): *`U`[]*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[map](_codec_abstractarray_.abstractarray.md#map)*

*Overrides void*

*Defined in [codec/AbstractArray.ts:125](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/codec/AbstractArray.ts#L125)*

**`description`** Maps the array with the callback

**Type parameters:**

▪ **U**

**Parameters:**

▪ **callbackfn**: *function*

The mapping function

▸ (`value`: `T`, `index`: number, `array`: `T`[]): *`U`*

**Parameters:**

Name | Type |
------ | ------ |
`value` | `T` |
`index` | number |
`array` | `T`[] |

▪`Optional`  **thisArg**: *any*

The `this` onject to apply the result to

**Returns:** *`U`[]*

___

###  toArray

▸ **toArray**(): *`T`[]*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[toArray](_codec_abstractarray_.abstractarray.md#toarray)*

*Defined in [codec/AbstractArray.ts:53](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/codec/AbstractArray.ts#L53)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *`T`[]*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[toHex](_codec_abstractarray_.abstractarray.md#tohex)*

*Defined in [codec/AbstractArray.ts:60](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/codec/AbstractArray.ts#L60)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJsonArray](../interfaces/_types_.anyjsonarray.md)*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[toJSON](_codec_abstractarray_.abstractarray.md#tojson)*

*Defined in [codec/AbstractArray.ts:67](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/codec/AbstractArray.ts#L67)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJsonArray](../interfaces/_types_.anyjsonarray.md)*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Vector](_codec_vector_.vector.md).[toRawType](_codec_vector_.vector.md#torawtype)*

*Overrides [AbstractArray](_codec_abstractarray_.abstractarray.md).[toRawType](_codec_abstractarray_.abstractarray.md#abstract-torawtype)*

*Defined in [codec/Vector.ts:95](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/codec/Vector.ts#L95)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[toString](_codec_abstractarray_.abstractarray.md#tostring)*

*Overrides void*

*Defined in [codec/AbstractArray.ts:81](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/codec/AbstractArray.ts#L81)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[toU8a](_codec_abstractarray_.abstractarray.md#tou8a)*

*Defined in [codec/AbstractArray.ts:94](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/codec/AbstractArray.ts#L94)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*

___

### `Static` decodeVector

▸ **decodeVector**<**T**>(`Type`: [Constructor](../interfaces/_types_.constructor.md)‹*`T`*›, `value`: [Vector](_codec_vector_.vector.md)‹*any*› | `Uint8Array` | string | any[]): *`T`[]*

*Inherited from [Vector](_codec_vector_.vector.md).[decodeVector](_codec_vector_.vector.md#static-decodevector)*

*Defined in [codec/Vector.ts:32](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/codec/Vector.ts#L32)*

**Type parameters:**

▪ **T**: *[Codec](../interfaces/_types_.codec.md)*

**Parameters:**

Name | Type |
------ | ------ |
`Type` | [Constructor](../interfaces/_types_.constructor.md)‹*`T`*› |
`value` | [Vector](_codec_vector_.vector.md)‹*any*› \| `Uint8Array` \| string \| any[] |

**Returns:** *`T`[]*

___

### `Static` with

▸ **with**<**O**>(`Type`: [Constructor](../interfaces/_types_.constructor.md)‹*`O`*›): *[Constructor](../interfaces/_types_.constructor.md)‹*[Vector](_codec_vector_.vector.md)‹*`O`*›*›*

*Inherited from [Vector](_codec_vector_.vector.md).[with](_codec_vector_.vector.md#static-with)*

*Defined in [codec/Vector.ts:55](https://github.com/polkadot-js/api/blob/98cffea/packages/types/src/codec/Vector.ts#L55)*

**Type parameters:**

▪ **O**: *[Codec](../interfaces/_types_.codec.md)*

**Parameters:**

Name | Type |
------ | ------ |
`Type` | [Constructor](../interfaces/_types_.constructor.md)‹*`O`*› |

**Returns:** *[Constructor](../interfaces/_types_.constructor.md)‹*[Vector](_codec_vector_.vector.md)‹*`O`*›*›*