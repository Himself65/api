> # Interface: ExtrinsicStatus

Enum

## Hierarchy

  * [Enum](../classes/_codec_enum_.enum.md)

  * **ExtrinsicStatus**

## Implements

* [Codec](_types_.codec.md)

## Index

### Constructors

* [constructor](_interfaces_rpc_types_.extrinsicstatus.md#constructor)

### Properties

* [asBroadcast](_interfaces_rpc_types_.extrinsicstatus.md#asbroadcast)
* [asFinalized](_interfaces_rpc_types_.extrinsicstatus.md#asfinalized)
* [asUsurped](_interfaces_rpc_types_.extrinsicstatus.md#asusurped)
* [isBroadcast](_interfaces_rpc_types_.extrinsicstatus.md#isbroadcast)
* [isDropped](_interfaces_rpc_types_.extrinsicstatus.md#isdropped)
* [isFinalized](_interfaces_rpc_types_.extrinsicstatus.md#isfinalized)
* [isFuture](_interfaces_rpc_types_.extrinsicstatus.md#isfuture)
* [isInvalid](_interfaces_rpc_types_.extrinsicstatus.md#isinvalid)
* [isReady](_interfaces_rpc_types_.extrinsicstatus.md#isready)
* [isUsurped](_interfaces_rpc_types_.extrinsicstatus.md#isusurped)

### Accessors

* [encodedLength](_interfaces_rpc_types_.extrinsicstatus.md#encodedlength)
* [hash](_interfaces_rpc_types_.extrinsicstatus.md#hash)
* [index](_interfaces_rpc_types_.extrinsicstatus.md#index)
* [isEmpty](_interfaces_rpc_types_.extrinsicstatus.md#isempty)
* [isNone](_interfaces_rpc_types_.extrinsicstatus.md#isnone)
* [isNull](_interfaces_rpc_types_.extrinsicstatus.md#isnull)
* [type](_interfaces_rpc_types_.extrinsicstatus.md#type)
* [value](_interfaces_rpc_types_.extrinsicstatus.md#value)

### Methods

* [eq](_interfaces_rpc_types_.extrinsicstatus.md#eq)
* [toHex](_interfaces_rpc_types_.extrinsicstatus.md#tohex)
* [toJSON](_interfaces_rpc_types_.extrinsicstatus.md#tojson)
* [toNumber](_interfaces_rpc_types_.extrinsicstatus.md#tonumber)
* [toRawType](_interfaces_rpc_types_.extrinsicstatus.md#torawtype)
* [toString](_interfaces_rpc_types_.extrinsicstatus.md#tostring)
* [toU8a](_interfaces_rpc_types_.extrinsicstatus.md#tou8a)
* [with](_interfaces_rpc_types_.extrinsicstatus.md#static-with)

## Constructors

###  constructor

\+ **new ExtrinsicStatus**(`def`: `Record<string, InterfaceTypes | Constructor>` | string[], `value?`: any, `index?`: undefined | number): *[ExtrinsicStatus](_interfaces_rpc_types_.extrinsicstatus.md)*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[constructor](../classes/_codec_enum_.enum.md#constructor)*

*Overrides [Base](../classes/_codec_base_.base.md).[constructor](../classes/_codec_base_.base.md#constructor)*

*Defined in [codec/Enum.ts:63](https://github.com/polkadot-js/api/blob/960d399/packages/types/src/codec/Enum.ts#L63)*

**Parameters:**

Name | Type |
------ | ------ |
`def` | `Record<string, InterfaceTypes \| Constructor>` \| string[] |
`value?` | any |
`index?` | undefined \| number |

**Returns:** *[ExtrinsicStatus](_interfaces_rpc_types_.extrinsicstatus.md)*

## Properties

###  asBroadcast

• **asBroadcast**: *[Vec](../classes/_codec_vec_.vec.md)‹*[Text](../classes/_primitive_text_.text.md)*›*

*Defined in [interfaces/rpc/types.ts:49](https://github.com/polkadot-js/api/blob/960d399/packages/types/src/interfaces/rpc/types.ts#L49)*

Vec<Text>

___

###  asFinalized

• **asFinalized**: *[Hash](../modules/_interfaces_runtime_types_.md#hash)*

*Defined in [interfaces/rpc/types.ts:41](https://github.com/polkadot-js/api/blob/960d399/packages/types/src/interfaces/rpc/types.ts#L41)*

Hash

___

###  asUsurped

• **asUsurped**: *[Hash](../modules/_interfaces_runtime_types_.md#hash)*

*Defined in [interfaces/rpc/types.ts:45](https://github.com/polkadot-js/api/blob/960d399/packages/types/src/interfaces/rpc/types.ts#L45)*

Hash

___

###  isBroadcast

• **isBroadcast**: *boolean*

*Defined in [interfaces/rpc/types.ts:47](https://github.com/polkadot-js/api/blob/960d399/packages/types/src/interfaces/rpc/types.ts#L47)*

4:: Broadcast(Vec<Text>)

___

###  isDropped

• **isDropped**: *boolean*

*Defined in [interfaces/rpc/types.ts:51](https://github.com/polkadot-js/api/blob/960d399/packages/types/src/interfaces/rpc/types.ts#L51)*

5:: Dropped

___

###  isFinalized

• **isFinalized**: *boolean*

*Defined in [interfaces/rpc/types.ts:39](https://github.com/polkadot-js/api/blob/960d399/packages/types/src/interfaces/rpc/types.ts#L39)*

2:: Finalized(Hash)

___

###  isFuture

• **isFuture**: *boolean*

*Defined in [interfaces/rpc/types.ts:35](https://github.com/polkadot-js/api/blob/960d399/packages/types/src/interfaces/rpc/types.ts#L35)*

0:: Future

___

###  isInvalid

• **isInvalid**: *boolean*

*Defined in [interfaces/rpc/types.ts:53](https://github.com/polkadot-js/api/blob/960d399/packages/types/src/interfaces/rpc/types.ts#L53)*

6:: Invalid

___

###  isReady

• **isReady**: *boolean*

*Defined in [interfaces/rpc/types.ts:37](https://github.com/polkadot-js/api/blob/960d399/packages/types/src/interfaces/rpc/types.ts#L37)*

1:: Ready

___

###  isUsurped

• **isUsurped**: *boolean*

*Defined in [interfaces/rpc/types.ts:43](https://github.com/polkadot-js/api/blob/960d399/packages/types/src/interfaces/rpc/types.ts#L43)*

3:: Usurped(Hash)

## Accessors

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[encodedLength](../classes/_codec_enum_.enum.md#encodedlength)*

*Overrides [Base](../classes/_codec_base_.base.md).[encodedLength](../classes/_codec_base_.base.md#encodedlength)*

*Defined in [codec/Enum.ts:172](https://github.com/polkadot-js/api/blob/960d399/packages/types/src/codec/Enum.ts#L172)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *[IHash](_types_.ihash.md)*

*Inherited from [Base](../classes/_codec_base_.base.md).[hash](../classes/_codec_base_.base.md#hash)*

*Defined in [codec/Base.ts:32](https://github.com/polkadot-js/api/blob/960d399/packages/types/src/codec/Base.ts#L32)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](_types_.ihash.md)*

___

###  index

• **get index**(): *number*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[index](../classes/_codec_enum_.enum.md#index)*

*Defined in [codec/Enum.ts:179](https://github.com/polkadot-js/api/blob/960d399/packages/types/src/codec/Enum.ts#L179)*

**`description`** The index of the metadata value

**Returns:** *number*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Base](../classes/_codec_base_.base.md).[isEmpty](../classes/_codec_base_.base.md#isempty)*

*Defined in [codec/Base.ts:39](https://github.com/polkadot-js/api/blob/960d399/packages/types/src/codec/Base.ts#L39)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  isNone

• **get isNone**(): *boolean*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[isNone](../classes/_codec_enum_.enum.md#isnone)*

*Defined in [codec/Enum.ts:186](https://github.com/polkadot-js/api/blob/960d399/packages/types/src/codec/Enum.ts#L186)*

**`description`** Checks if the Enum points to a [Null](../classes/_primitive_null_.null.md) type

**Returns:** *boolean*

___

###  isNull

• **get isNull**(): *boolean*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[isNull](../classes/_codec_enum_.enum.md#isnull)*

*Defined in [codec/Enum.ts:193](https://github.com/polkadot-js/api/blob/960d399/packages/types/src/codec/Enum.ts#L193)*

**`description`** Checks if the Enum points to a [Null](../classes/_primitive_null_.null.md) type (deprecated, use isNone)

**Returns:** *boolean*

___

###  type

• **get type**(): *string*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[type](../classes/_codec_enum_.enum.md#type)*

*Defined in [codec/Enum.ts:200](https://github.com/polkadot-js/api/blob/960d399/packages/types/src/codec/Enum.ts#L200)*

**`description`** The name of the type this enum value represents

**Returns:** *string*

___

###  value

• **get value**(): *[Codec](_types_.codec.md)*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[value](../classes/_codec_enum_.enum.md#value)*

*Defined in [codec/Enum.ts:207](https://github.com/polkadot-js/api/blob/960d399/packages/types/src/codec/Enum.ts#L207)*

**`description`** The value of the enum

**Returns:** *[Codec](_types_.codec.md)*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[eq](../classes/_codec_enum_.enum.md#eq)*

*Overrides [Base](../classes/_codec_base_.base.md).[eq](../classes/_codec_base_.base.md#eq)*

*Defined in [codec/Enum.ts:214](https://github.com/polkadot-js/api/blob/960d399/packages/types/src/codec/Enum.ts#L214)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[toHex](../classes/_codec_enum_.enum.md#tohex)*

*Overrides [Base](../classes/_codec_base_.base.md).[toHex](../classes/_codec_base_.base.md#tohex)*

*Defined in [codec/Enum.ts:229](https://github.com/polkadot-js/api/blob/960d399/packages/types/src/codec/Enum.ts#L229)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJson](../modules/_types_.md#anyjson)*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[toJSON](../classes/_codec_enum_.enum.md#tojson)*

*Overrides [Base](../classes/_codec_base_.base.md).[toJSON](../classes/_codec_base_.base.md#tojson)*

*Defined in [codec/Enum.ts:236](https://github.com/polkadot-js/api/blob/960d399/packages/types/src/codec/Enum.ts#L236)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJson](../modules/_types_.md#anyjson)*

___

###  toNumber

▸ **toNumber**(): *number*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[toNumber](../classes/_codec_enum_.enum.md#tonumber)*

*Defined in [codec/Enum.ts:245](https://github.com/polkadot-js/api/blob/960d399/packages/types/src/codec/Enum.ts#L245)*

**`description`** Returns the number representation for the value

**Returns:** *number*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[toRawType](../classes/_codec_enum_.enum.md#torawtype)*

*Overrides [Base](../classes/_codec_base_.base.md).[toRawType](../classes/_codec_base_.base.md#torawtype)*

*Defined in [codec/Enum.ts:252](https://github.com/polkadot-js/api/blob/960d399/packages/types/src/codec/Enum.ts#L252)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[toString](../classes/_codec_enum_.enum.md#tostring)*

*Overrides [Base](../classes/_codec_base_.base.md).[toString](../classes/_codec_base_.base.md#tostring)*

*Defined in [codec/Enum.ts:263](https://github.com/polkadot-js/api/blob/960d399/packages/types/src/codec/Enum.ts#L263)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[toU8a](../classes/_codec_enum_.enum.md#tou8a)*

*Overrides [Base](../classes/_codec_base_.base.md).[toU8a](../classes/_codec_base_.base.md#tou8a)*

*Defined in [codec/Enum.ts:273](https://github.com/polkadot-js/api/blob/960d399/packages/types/src/codec/Enum.ts#L273)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*

___

### `Static` with

▸ **with**(`Types`: `Record<string, InterfaceTypes | Constructor>` | string[]): *[EnumConstructor](_codec_enum_.enumconstructor.md)‹*[Enum](../classes/_codec_enum_.enum.md)*›*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[with](../classes/_codec_enum_.enum.md#static-with)*

*Defined in [codec/Enum.ts:136](https://github.com/polkadot-js/api/blob/960d399/packages/types/src/codec/Enum.ts#L136)*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | `Record<string, InterfaceTypes \| Constructor>` \| string[] |

**Returns:** *[EnumConstructor](_codec_enum_.enumconstructor.md)‹*[Enum](../classes/_codec_enum_.enum.md)*›*