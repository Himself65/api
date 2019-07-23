> # Class: SignerPayload <**S, T, V, E**>

## Type parameters

▪ **S**: *`ConstructorDef`*

▪ **T**: *object*

▪ **V**: *object*

▪ **E**: *object*

## Hierarchy

* `Struct`

  * **SignerPayload**

## Implements

* `Codec`

## Index

### Constructors

* [constructor](_signerpayload_.signerpayload.md#constructor)

### Properties

* [__@toStringTag](_signerpayload_.signerpayload.md#__@tostringtag)
* [size](_signerpayload_.signerpayload.md#size)

### Accessors

* [Type](_signerpayload_.signerpayload.md#type)
* [encodedLength](_signerpayload_.signerpayload.md#encodedlength)
* [isEmpty](_signerpayload_.signerpayload.md#isempty)
* [self](_signerpayload_.signerpayload.md#self)

### Methods

* [__@iterator](_signerpayload_.signerpayload.md#__@iterator)
* [clear](_signerpayload_.signerpayload.md#clear)
* [delete](_signerpayload_.signerpayload.md#delete)
* [entries](_signerpayload_.signerpayload.md#entries)
* [eq](_signerpayload_.signerpayload.md#eq)
* [forEach](_signerpayload_.signerpayload.md#foreach)
* [get](_signerpayload_.signerpayload.md#get)
* [getAtIndex](_signerpayload_.signerpayload.md#getatindex)
* [has](_signerpayload_.signerpayload.md#has)
* [keys](_signerpayload_.signerpayload.md#keys)
* [set](_signerpayload_.signerpayload.md#set)
* [toArray](_signerpayload_.signerpayload.md#toarray)
* [toHex](_signerpayload_.signerpayload.md#tohex)
* [toJSON](_signerpayload_.signerpayload.md#tojson)
* [toPayload](_signerpayload_.signerpayload.md#topayload)
* [toRawType](_signerpayload_.signerpayload.md#torawtype)
* [toString](_signerpayload_.signerpayload.md#tostring)
* [toU8a](_signerpayload_.signerpayload.md#tou8a)
* [values](_signerpayload_.signerpayload.md#values)
* [with](_signerpayload_.signerpayload.md#static-with)

## Constructors

###  constructor

\+ **new SignerPayload**(`Types`: `S`, `value`: `V` | `Map<any, any>` | any[] | string, `jsonMap`: `Map<keyof S, string>`): *[SignerPayload](_signerpayload_.signerpayload.md)*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:31](https://github.com/polkadot-js/api/blob/d34eb15/packages/types/src/codec/Struct.ts#L31)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`Types` | `S` | - |
`value` | `V` \| `Map<any, any>` \| any[] \| string |  {} as unknown as V |
`jsonMap` | `Map<keyof S, string>` |  new Map() |

**Returns:** *[SignerPayload](_signerpayload_.signerpayload.md)*

## Properties

###  __@toStringTag

• **__@toStringTag**: *string*

*Inherited from void*

Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:130

___

###  size

• **size**: *number*

*Inherited from void*

Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.collection.d.ts:28

## Accessors

###  Type

• **get Type**(): *`E`*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:163](https://github.com/polkadot-js/api/blob/d34eb15/packages/types/src/codec/Struct.ts#L163)*

**`description`** Returns the Type description to sthe structure

**Returns:** *`E`*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:176](https://github.com/polkadot-js/api/blob/d34eb15/packages/types/src/codec/Struct.ts#L176)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:148](https://github.com/polkadot-js/api/blob/d34eb15/packages/types/src/codec/Struct.ts#L148)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  self

• **get self**(): *[SignerPayloadType](../interfaces/_signerpayload_.signerpayloadtype.md)*

*Defined in [SignerPayload.ts:35](https://github.com/polkadot-js/api/blob/d34eb15/packages/api/src/SignerPayload.ts#L35)*

**`description`** Returns this as a SignerPayloadType. This works since the Struct.with injects all the getters automatically (just ensure the 2 definitiona are matching)

**Returns:** *[SignerPayloadType](../interfaces/_signerpayload_.signerpayloadtype.md)*

## Methods

###  __@iterator

▸ **__@iterator**(): *`IterableIterator<[keyof S, Codec]>`*

*Inherited from void*

Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.iterable.d.ts:113

Returns an iterable of entries in the map.

**Returns:** *`IterableIterator<[keyof S, Codec]>`*

___

###  clear

▸ **clear**(): *void*

*Inherited from void*

Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.collection.d.ts:22

**Returns:** *void*

___

###  delete

▸ **delete**(`key`: keyof S): *boolean*

*Inherited from void*

Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.collection.d.ts:23

**Parameters:**

Name | Type |
------ | ------ |
`key` | keyof S |

**Returns:** *boolean*

___

###  entries

▸ **entries**(): *`IterableIterator<[keyof S, Codec]>`*

*Inherited from void*

Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.iterable.d.ts:118

Returns an iterable of key, value pairs for every entry in the map.

**Returns:** *`IterableIterator<[keyof S, Codec]>`*

___

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:187](https://github.com/polkadot-js/api/blob/d34eb15/packages/types/src/codec/Struct.ts#L187)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  forEach

▸ **forEach**(`callbackfn`: function, `thisArg?`: any): *void*

*Inherited from void*

Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.collection.d.ts:24

**Parameters:**

▪ **callbackfn**: *function*

▸ (`value`: `Codec`, `key`: keyof S, `map`: `Map<keyof S, Codec>`): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | `Codec` |
`key` | keyof S |
`map` | `Map<keyof S, Codec>` |

▪`Optional`  **thisArg**: *any*

**Returns:** *void*

___

###  get

▸ **get**(`name`: keyof S): *`Codec` | undefined*

*Inherited from void*

*Overrides void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:195](https://github.com/polkadot-js/api/blob/d34eb15/packages/types/src/codec/Struct.ts#L195)*

**`description`** Returns a specific names entry in the structure

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | keyof S | The name of the entry to retrieve  |

**Returns:** *`Codec` | undefined*

___

###  getAtIndex

▸ **getAtIndex**(`index`: number): *`Codec`*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:202](https://github.com/polkadot-js/api/blob/d34eb15/packages/types/src/codec/Struct.ts#L202)*

**`description`** Returns the values of a member at a specific index (Rather use get(name) for performance)

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *`Codec`*

___

###  has

▸ **has**(`key`: keyof S): *boolean*

*Inherited from void*

Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.collection.d.ts:26

**Parameters:**

Name | Type |
------ | ------ |
`key` | keyof S |

**Returns:** *boolean*

___

###  keys

▸ **keys**(): *`IterableIterator<keyof S>`*

*Inherited from void*

Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.iterable.d.ts:123

Returns an iterable of keys in the map

**Returns:** *`IterableIterator<keyof S>`*

___

###  set

▸ **set**(`key`: keyof S, `value`: `Codec`): *this*

*Inherited from void*

Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.collection.d.ts:27

**Parameters:**

Name | Type |
------ | ------ |
`key` | keyof S |
`value` | `Codec` |

**Returns:** *this*

___

###  toArray

▸ **toArray**(): *`Codec`[]*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:209](https://github.com/polkadot-js/api/blob/d34eb15/packages/types/src/codec/Struct.ts#L209)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *`Codec`[]*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:216](https://github.com/polkadot-js/api/blob/d34eb15/packages/types/src/codec/Struct.ts#L216)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *`AnyJsonObject` | string*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:223](https://github.com/polkadot-js/api/blob/d34eb15/packages/types/src/codec/Struct.ts#L223)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *`AnyJsonObject` | string*

___

###  toPayload

▸ **toPayload**(): *`ISignerPayload`*

*Defined in [SignerPayload.ts:42](https://github.com/polkadot-js/api/blob/d34eb15/packages/api/src/SignerPayload.ts#L42)*

**`description`** Creates an representation of the structure as an ISignerPayload JSON

**Returns:** *`ISignerPayload`*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:239](https://github.com/polkadot-js/api/blob/d34eb15/packages/types/src/codec/Struct.ts#L239)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:252](https://github.com/polkadot-js/api/blob/d34eb15/packages/types/src/codec/Struct.ts#L252)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:260](https://github.com/polkadot-js/api/blob/d34eb15/packages/types/src/codec/Struct.ts#L260)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*

___

###  values

▸ **values**(): *`IterableIterator<Codec>`*

*Inherited from void*

Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.iterable.d.ts:128

Returns an iterable of values in the map

**Returns:** *`IterableIterator<Codec>`*

___

### `Static` with

▸ **with**<**S**>(`Types`: `S`): *`Constructor<Struct<S>>`*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:123](https://github.com/polkadot-js/api/blob/d34eb15/packages/types/src/codec/Struct.ts#L123)*

**Type parameters:**

▪ **S**: *`ConstructorDef`*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | `S` |

**Returns:** *`Constructor<Struct<S>>`*