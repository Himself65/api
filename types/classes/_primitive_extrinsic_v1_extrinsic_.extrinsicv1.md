> # Class: ExtrinsicV1 <**S, T, V, E**>

**`name`** ExtrinsicV1

**`description`** 
The first generation of compact extrinsics

## Type parameters

▪ **S**: *[ConstructorDef](../modules/_types_.md#constructordef)*

▪ **T**: *object*

▪ **V**: *object*

▪ **E**: *object*

## Hierarchy

  * [Struct](_codec_struct_.struct.md)

  * **ExtrinsicV1**

## Implements

* [Codec](../interfaces/_types_.codec.md)
* [IExtrinsicImpl](../interfaces/_types_.iextrinsicimpl.md)

## Index

### Constructors

* [constructor](_primitive_extrinsic_v1_extrinsic_.extrinsicv1.md#constructor)

### Accessors

* [Type](_primitive_extrinsic_v1_extrinsic_.extrinsicv1.md#type)
* [encodedLength](_primitive_extrinsic_v1_extrinsic_.extrinsicv1.md#encodedlength)
* [isEmpty](_primitive_extrinsic_v1_extrinsic_.extrinsicv1.md#isempty)
* [method](_primitive_extrinsic_v1_extrinsic_.extrinsicv1.md#method)
* [signature](_primitive_extrinsic_v1_extrinsic_.extrinsicv1.md#signature)
* [version](_primitive_extrinsic_v1_extrinsic_.extrinsicv1.md#version)

### Methods

* [addSignature](_primitive_extrinsic_v1_extrinsic_.extrinsicv1.md#addsignature)
* [eq](_primitive_extrinsic_v1_extrinsic_.extrinsicv1.md#eq)
* [get](_primitive_extrinsic_v1_extrinsic_.extrinsicv1.md#get)
* [getAtIndex](_primitive_extrinsic_v1_extrinsic_.extrinsicv1.md#getatindex)
* [sign](_primitive_extrinsic_v1_extrinsic_.extrinsicv1.md#sign)
* [toArray](_primitive_extrinsic_v1_extrinsic_.extrinsicv1.md#toarray)
* [toHex](_primitive_extrinsic_v1_extrinsic_.extrinsicv1.md#tohex)
* [toJSON](_primitive_extrinsic_v1_extrinsic_.extrinsicv1.md#tojson)
* [toRawType](_primitive_extrinsic_v1_extrinsic_.extrinsicv1.md#torawtype)
* [toString](_primitive_extrinsic_v1_extrinsic_.extrinsicv1.md#tostring)
* [toU8a](_primitive_extrinsic_v1_extrinsic_.extrinsicv1.md#tou8a)
* [decodeExtrinsic](_primitive_extrinsic_v1_extrinsic_.extrinsicv1.md#static-decodeextrinsic)
* [with](_primitive_extrinsic_v1_extrinsic_.extrinsicv1.md#static-with)

## Constructors

###  constructor

\+ **new ExtrinsicV1**(`value?`: `Uint8Array` | [ExtrinsicValueV1](../interfaces/_primitive_extrinsic_v1_extrinsic_.extrinsicvaluev1.md), `__namedParameters`: object): *[ExtrinsicV1](_primitive_extrinsic_v1_extrinsic_.extrinsicv1.md)*

*Overrides [Struct](_codec_struct_.struct.md).[constructor](_codec_struct_.struct.md#constructor)*

*Defined in [primitive/Extrinsic/v1/Extrinsic.ts:30](https://github.com/polkadot-js/api/blob/79e5f7c/packages/types/src/primitive/Extrinsic/v1/Extrinsic.ts#L30)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`value?` | `Uint8Array` \| [ExtrinsicValueV1](../interfaces/_primitive_extrinsic_v1_extrinsic_.extrinsicvaluev1.md) | - |
`__namedParameters` | object |  {} |

**Returns:** *[ExtrinsicV1](_primitive_extrinsic_v1_extrinsic_.extrinsicv1.md)*

## Accessors

###  Type

• **get Type**(): *`E`*

*Inherited from [Struct](_codec_struct_.struct.md).[Type](_codec_struct_.struct.md#type)*

*Defined in [codec/Struct.ts:163](https://github.com/polkadot-js/api/blob/79e5f7c/packages/types/src/codec/Struct.ts#L163)*

**`description`** Returns the Type description to sthe structure

**Returns:** *`E`*

___

###  encodedLength

• **get encodedLength**(): *number*

*Overrides [Struct](_codec_struct_.struct.md).[encodedLength](_codec_struct_.struct.md#encodedlength)*

*Defined in [primitive/Extrinsic/v1/Extrinsic.ts:60](https://github.com/polkadot-js/api/blob/79e5f7c/packages/types/src/primitive/Extrinsic/v1/Extrinsic.ts#L60)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Struct](_codec_struct_.struct.md).[isEmpty](_codec_struct_.struct.md#isempty)*

*Defined in [codec/Struct.ts:148](https://github.com/polkadot-js/api/blob/79e5f7c/packages/types/src/codec/Struct.ts#L148)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  method

• **get method**(): *[Method](_primitive_method_.method.md)*

*Defined in [primitive/Extrinsic/v1/Extrinsic.ts:67](https://github.com/polkadot-js/api/blob/79e5f7c/packages/types/src/primitive/Extrinsic/v1/Extrinsic.ts#L67)*

**`description`** The [Method](_primitive_method_.method.md) this extrinsic wraps

**Returns:** *[Method](_primitive_method_.method.md)*

___

###  signature

• **get signature**(): *`ExtrinsicSignature`*

*Defined in [primitive/Extrinsic/v1/Extrinsic.ts:74](https://github.com/polkadot-js/api/blob/79e5f7c/packages/types/src/primitive/Extrinsic/v1/Extrinsic.ts#L74)*

**`description`** The [[ExtrinsicSignature]]

**Returns:** *`ExtrinsicSignature`*

___

###  version

• **get version**(): *number*

*Defined in [primitive/Extrinsic/v1/Extrinsic.ts:81](https://github.com/polkadot-js/api/blob/79e5f7c/packages/types/src/primitive/Extrinsic/v1/Extrinsic.ts#L81)*

**`description`** The version for the signature

**Returns:** *number*

## Methods

###  addSignature

▸ **addSignature**(`signer`: [Address](_primitive_address_.address.md) | `Uint8Array` | string, `signature`: `Uint8Array` | string, `payload`: [ExtrinsicPayloadValue](../interfaces/_types_.extrinsicpayloadvalue.md) | `Uint8Array` | string): *[ExtrinsicV1](_primitive_extrinsic_v1_extrinsic_.extrinsicv1.md)*

*Implementation of [IExtrinsicImpl](../interfaces/_types_.iextrinsicimpl.md)*

*Defined in [primitive/Extrinsic/v1/Extrinsic.ts:88](https://github.com/polkadot-js/api/blob/79e5f7c/packages/types/src/primitive/Extrinsic/v1/Extrinsic.ts#L88)*

**`description`** Add an [[ExtrinsicSignature]] to the extrinsic (already generated)

**Parameters:**

Name | Type |
------ | ------ |
`signer` | [Address](_primitive_address_.address.md) \| `Uint8Array` \| string |
`signature` | `Uint8Array` \| string |
`payload` | [ExtrinsicPayloadValue](../interfaces/_types_.extrinsicpayloadvalue.md) \| `Uint8Array` \| string |

**Returns:** *[ExtrinsicV1](_primitive_extrinsic_v1_extrinsic_.extrinsicv1.md)*

___

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [IExtrinsicImpl](../interfaces/_types_.iextrinsicimpl.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[eq](_codec_struct_.struct.md#eq)*

*Defined in [codec/Struct.ts:187](https://github.com/polkadot-js/api/blob/79e5f7c/packages/types/src/codec/Struct.ts#L187)*

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

*Defined in [codec/Struct.ts:195](https://github.com/polkadot-js/api/blob/79e5f7c/packages/types/src/codec/Struct.ts#L195)*

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

*Defined in [codec/Struct.ts:202](https://github.com/polkadot-js/api/blob/79e5f7c/packages/types/src/codec/Struct.ts#L202)*

**`description`** Returns the values of a member at a specific index (Rather use get(name) for performance)

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *[Codec](../interfaces/_types_.codec.md)*

___

###  sign

▸ **sign**(`account`: [IKeyringPair](../interfaces/_types_.ikeyringpair.md), `options`: [SignatureOptions](../interfaces/_types_.signatureoptions.md)): *[ExtrinsicV1](_primitive_extrinsic_v1_extrinsic_.extrinsicv1.md)*

*Implementation of [IExtrinsicImpl](../interfaces/_types_.iextrinsicimpl.md)*

*Defined in [primitive/Extrinsic/v1/Extrinsic.ts:97](https://github.com/polkadot-js/api/blob/79e5f7c/packages/types/src/primitive/Extrinsic/v1/Extrinsic.ts#L97)*

**`description`** Sign the extrinsic with a specific keypair

**Parameters:**

Name | Type |
------ | ------ |
`account` | [IKeyringPair](../interfaces/_types_.ikeyringpair.md) |
`options` | [SignatureOptions](../interfaces/_types_.signatureoptions.md) |

**Returns:** *[ExtrinsicV1](_primitive_extrinsic_v1_extrinsic_.extrinsicv1.md)*

___

###  toArray

▸ **toArray**(): *[Codec](../interfaces/_types_.codec.md)[]*

*Inherited from [Struct](_codec_struct_.struct.md).[toArray](_codec_struct_.struct.md#toarray)*

*Defined in [codec/Struct.ts:209](https://github.com/polkadot-js/api/blob/79e5f7c/packages/types/src/codec/Struct.ts#L209)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *[Codec](../interfaces/_types_.codec.md)[]*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Struct](_codec_struct_.struct.md).[toHex](_codec_struct_.struct.md#tohex)*

*Defined in [codec/Struct.ts:216](https://github.com/polkadot-js/api/blob/79e5f7c/packages/types/src/codec/Struct.ts#L216)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJsonObject](../interfaces/_types_.anyjsonobject.md) | string*

*Implementation of [IExtrinsicImpl](../interfaces/_types_.iextrinsicimpl.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toJSON](_codec_struct_.struct.md#tojson)*

*Defined in [codec/Struct.ts:223](https://github.com/polkadot-js/api/blob/79e5f7c/packages/types/src/codec/Struct.ts#L223)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJsonObject](../interfaces/_types_.anyjsonobject.md) | string*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [IExtrinsicImpl](../interfaces/_types_.iextrinsicimpl.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toRawType](_codec_struct_.struct.md#torawtype)*

*Defined in [codec/Struct.ts:239](https://github.com/polkadot-js/api/blob/79e5f7c/packages/types/src/codec/Struct.ts#L239)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [IExtrinsicImpl](../interfaces/_types_.iextrinsicimpl.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toString](_codec_struct_.struct.md#tostring)*

*Defined in [codec/Struct.ts:252](https://github.com/polkadot-js/api/blob/79e5f7c/packages/types/src/codec/Struct.ts#L252)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Implementation of [IExtrinsicImpl](../interfaces/_types_.iextrinsicimpl.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toU8a](_codec_struct_.struct.md#tou8a)*

*Defined in [codec/Struct.ts:260](https://github.com/polkadot-js/api/blob/79e5f7c/packages/types/src/codec/Struct.ts#L260)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*

___

### `Static` decodeExtrinsic

▸ **decodeExtrinsic**(`value?`: `Uint8Array` | [ExtrinsicValueV1](../interfaces/_primitive_extrinsic_v1_extrinsic_.extrinsicvaluev1.md), `isSigned`: boolean): *[ExtrinsicValueV1](../interfaces/_primitive_extrinsic_v1_extrinsic_.extrinsicvaluev1.md)*

*Defined in [primitive/Extrinsic/v1/Extrinsic.ts:38](https://github.com/polkadot-js/api/blob/79e5f7c/packages/types/src/primitive/Extrinsic/v1/Extrinsic.ts#L38)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`value?` | `Uint8Array` \| [ExtrinsicValueV1](../interfaces/_primitive_extrinsic_v1_extrinsic_.extrinsicvaluev1.md) | - |
`isSigned` | boolean | false |

**Returns:** *[ExtrinsicValueV1](../interfaces/_primitive_extrinsic_v1_extrinsic_.extrinsicvaluev1.md)*

___

### `Static` with

▸ **with**<**S**>(`Types`: `S`): *[Constructor](../interfaces/_types_.constructor.md)‹*[Struct](_codec_struct_.struct.md)‹*`S`*›*›*

*Inherited from [Struct](_codec_struct_.struct.md).[with](_codec_struct_.struct.md#static-with)*

*Defined in [codec/Struct.ts:123](https://github.com/polkadot-js/api/blob/79e5f7c/packages/types/src/codec/Struct.ts#L123)*

**Type parameters:**

▪ **S**: *[ConstructorDef](../modules/_types_.md#constructordef)*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | `S` |

**Returns:** *[Constructor](../interfaces/_types_.constructor.md)‹*[Struct](_codec_struct_.struct.md)‹*`S`*›*›*