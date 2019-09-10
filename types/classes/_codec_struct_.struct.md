**[Polkadot JS API](../README.md)**

[Globals](../globals.md) › ["codec/Struct"](../modules/_codec_struct_.md) › [Struct](_codec_struct_.struct.md)

# Class: Struct <**S, T, V, E**>

**`name`** Struct

**`description`** 
A Struct defines an Object with key-value pairs - where the values are Codec values. It removes
a lot of repetition from the actual coding, define a structure type, pass it the key/Codec
values in the constructor and it manages the decoding. It is important that the constructor
values matches 100% to the order in th Rust code, i.e. don't go crazy and make it alphabetical,
it needs to decoded in the specific defined order.

## Type parameters

▪ **S**: *TypesDef*

▪ **T**: *object*

▪ **V**: *object*

▪ **E**: *object*

## Hierarchy

* Map‹keyof S, [Codec](../interfaces/_types_.codec.md)›

  * **Struct**

  * [Header](../interfaces/_interfaces_runtime_types_.header.md)

  * [SignedBlock](../interfaces/_interfaces_runtime_types_.signedblock.md)

  * [ExtrinsicPayloadV1](_primitive_extrinsic_v1_extrinsicpayload_.extrinsicpayloadv1.md)

  * [ExtrinsicSignatureV1](_primitive_extrinsic_v1_extrinsicsignature_.extrinsicsignaturev1.md)

  * [ExtrinsicV1](_primitive_extrinsic_v1_extrinsic_.extrinsicv1.md)

  * [ExtrinsicPayloadV2](_primitive_extrinsic_v2_extrinsicpayload_.extrinsicpayloadv2.md)

  * [ExtrinsicSignatureV2](_primitive_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md)

  * [ExtrinsicV2](_primitive_extrinsic_v2_extrinsic_.extrinsicv2.md)

  * [ExtrinsicPayloadV3](_primitive_extrinsic_v3_extrinsicpayload_.extrinsicpayloadv3.md)

  * [ExtrinsicV3](_primitive_extrinsic_v3_extrinsic_.extrinsicv3.md)

  * [ExtrinsicPayloadUnknown](_primitive_extrinsic_extrinsicpayloadunknown_.extrinsicpayloadunknown.md)

  * [ExtrinsicUnknown](_primitive_extrinsic_extrinsicunknown_.extrinsicunknown.md)

  * [RawAuraPreDigest](../interfaces/_interfaces_aura_types_.rawaurapredigest.md)

  * [RawBabePreDigestPrimary](../interfaces/_interfaces_babe_types_.rawbabepredigestprimary.md)

  * [RawBabePreDigestSecondary](../interfaces/_interfaces_babe_types_.rawbabepredigestsecondary.md)

  * [BalanceLock](../interfaces/_interfaces_balances_types_.balancelock.md)

  * [VestingSchedule](../interfaces/_interfaces_balances_types_.vestingschedule.md)

  * [Votes](../interfaces/_interfaces_collective_types_.votes.md)

  * [AliveContractInfo](../interfaces/_interfaces_contracts_types_.alivecontractinfo.md)

  * [PrefabWasmModule](../interfaces/_interfaces_contracts_types_.prefabwasmmodule.md)

  * [Schedule](../interfaces/_interfaces_contracts_types_.schedule.md)

  * [VoterInfo](../interfaces/_interfaces_elections_types_.voterinfo.md)

  * [ReferendumInfo](../interfaces/_interfaces_democracy_types_.referenduminfo.md)

  * [AccountInfo](../interfaces/_interfaces_deprecated_types_.accountinfo.md)

  * [AssetOptions](../interfaces/_interfaces_genericasset_types_.assetoptions.md)

  * [PermissionsV1](../interfaces/_interfaces_genericasset_types_.permissionsv1.md)

  * [PendingPause](../interfaces/_interfaces_grandpa_types_.pendingpause.md)

  * [PendingResume](../interfaces/_interfaces_grandpa_types_.pendingresume.md)

  * [StoredPendingChange](../interfaces/_interfaces_grandpa_types_.storedpendingchange.md)

  * [EraRewards](../interfaces/_interfaces_staking_types_.erarewards.md)

  * [Exposure](../interfaces/_interfaces_staking_types_.exposure.md)

  * [IndividualExposure](../interfaces/_interfaces_staking_types_.individualexposure.md)

  * [SlashJournalEntry](../interfaces/_interfaces_staking_types_.slashjournalentry.md)

  * [StakingLedger](../interfaces/_interfaces_staking_types_.stakingledger.md)

  * [UnlockChunk](../interfaces/_interfaces_staking_types_.unlockchunk.md)

  * [ValidatorPrefs](../interfaces/_interfaces_staking_types_.validatorprefs.md)

  * [ValidatorPrefs0to145](../interfaces/_interfaces_staking_types_.validatorprefs0to145.md)

  * [Heartbeat](../interfaces/_interfaces_imonline_types_.heartbeat.md)

  * [OpaqueNetworkState](../interfaces/_interfaces_imonline_types_.opaquenetworkstate.md)

  * [OffenceDetails](../interfaces/_interfaces_offences_types_.offencedetails.md)

  * [DispatchError](../interfaces/_interfaces_system_types_.dispatcherror.md)

  * [EventRecord](../interfaces/_interfaces_system_types_.eventrecord.md)

  * [EventRecord0to76](../interfaces/_interfaces_system_types_.eventrecord0to76.md)

  * [TreasuryProposal](../interfaces/_interfaces_treasury_types_.treasuryproposal.md)

  * [AttestedCandidate](../interfaces/_interfaces_parachains_types_.attestedcandidate.md)

  * [CandidateReceipt](../interfaces/_interfaces_parachains_types_.candidatereceipt.md)

  * [IncomingParachainDeploy](../interfaces/_interfaces_parachains_types_.incomingparachaindeploy.md)

  * [IncomingParachainFixed](../interfaces/_interfaces_parachains_types_.incomingparachainfixed.md)

  * [NewBidder](../interfaces/_interfaces_parachains_types_.newbidder.md)

  * [UpwardMessage](../interfaces/_interfaces_parachains_types_.upwardmessage.md)

  * [BlockAttestations](../interfaces/_interfaces_attestations_types_.blockattestations.md)

  * [IncludedBlocks](../interfaces/_interfaces_attestations_types_.includedblocks.md)

  * [MoreAttestations](../interfaces/_interfaces_attestations_types_.moreattestations.md)

  * [ChainProperties](../interfaces/_interfaces_rpc_types_.chainproperties.md)

  * [Health](../interfaces/_interfaces_rpc_types_.health.md)

  * [NetworkState](../interfaces/_interfaces_rpc_types_.networkstate.md)

  * [PeerInfo](../interfaces/_interfaces_rpc_types_.peerinfo.md)

  * [RuntimeVersion](../interfaces/_interfaces_rpc_types_.runtimeversion.md)

  * [StorageChangeSet](../interfaces/_interfaces_rpc_types_.storagechangeset.md)

  * [Block](_primitive_generic_block_.block.md)

  * [Call](_primitive_generic_call_.call.md)

  * [StorageFunctionMetadata](_metadata_v2_storage_.storagefunctionmetadata.md)

  * [ModuleMetadataV2](_metadata_v2_metadata_.modulemetadatav2.md)

  * [MetadataV2](_metadata_v2_metadata_.metadatav2.md)

  * [StorageFunctionMetadata](_metadata_v3_storage_.storagefunctionmetadata.md)

  * [ModuleMetadataV3](_metadata_v3_metadata_.modulemetadatav3.md)

  * [MetadataV3](_metadata_v3_metadata_.metadatav3.md)

  * [StorageFunctionMetadata](_metadata_v4_storage_.storagefunctionmetadata.md)

  * [ModuleMetadataV4](_metadata_v4_metadata_.modulemetadatav4.md)

  * [MetadataV4](_metadata_v4_metadata_.metadatav4.md)

  * [StorageFunctionMetadata](_metadata_v5_storage_.storagefunctionmetadata.md)

  * [ModuleMetadataV5](_metadata_v5_metadata_.modulemetadatav5.md)

  * [MetadataV5](_metadata_v5_metadata_.metadatav5.md)

  * [ModuleMetadataV6](_metadata_v6_metadata_.modulemetadatav6.md)

  * [MetadataV6](_metadata_v6_metadata_.metadatav6.md)

  * [StorageMetadata](_metadata_v7_storage_.storagemetadata.md)

  * [ModuleMetadataV7](_metadata_v7_metadata_.modulemetadatav7.md)

  * [MetadataV7](_metadata_v7_metadata_.metadatav7.md)

  * [MetadataVersioned](_metadata_metadataversioned_.metadataversioned.md)

  * [Event](_primitive_generic_event_.event.md)

  * [Digest](_primitive_generic_digest_.digest.md)

  * [Linkage](_codec_linkage_.linkage.md)

  * [CallMetadataV0](../interfaces/_interfaces_metadata_types_.callmetadatav0.md)

  * [DoubleMapTypeV3](../interfaces/_interfaces_metadata_types_.doublemaptypev3.md)

  * [DoubleMapTypeV4](../interfaces/_interfaces_metadata_types_.doublemaptypev4.md)

  * [DoubleMapTypeV5](../interfaces/_interfaces_metadata_types_.doublemaptypev5.md)

  * [EventMetadataV0](../interfaces/_interfaces_metadata_types_.eventmetadatav0.md)

  * [FunctionArgumentMetadataV0](../interfaces/_interfaces_metadata_types_.functionargumentmetadatav0.md)

  * [FunctionMetadataV0](../interfaces/_interfaces_metadata_types_.functionmetadatav0.md)

  * [FunctionMetadataV1](../interfaces/_interfaces_metadata_types_.functionmetadatav1.md)

  * [MapTypeV0](../interfaces/_interfaces_metadata_types_.maptypev0.md)

  * [MapTypeV2](../interfaces/_interfaces_metadata_types_.maptypev2.md)

  * [MapTypeV4](../interfaces/_interfaces_metadata_types_.maptypev4.md)

  * [MetadataV0](../interfaces/_interfaces_metadata_types_.metadatav0.md)

  * [MetadataV1](../interfaces/_interfaces_metadata_types_.metadatav1.md)

  * [ModuleConstantMetadataV6](../interfaces/_interfaces_metadata_types_.moduleconstantmetadatav6.md)

  * [ModuleMetadataV0](../interfaces/_interfaces_metadata_types_.modulemetadatav0.md)

  * [ModuleMetadataV1](../interfaces/_interfaces_metadata_types_.modulemetadatav1.md)

  * [OuterDispatchCallV0](../interfaces/_interfaces_metadata_types_.outerdispatchcallv0.md)

  * [OuterDispatchMetadataV0](../interfaces/_interfaces_metadata_types_.outerdispatchmetadatav0.md)

  * [OuterEventMetadataV0](../interfaces/_interfaces_metadata_types_.outereventmetadatav0.md)

  * [RuntimeModuleMetadataV0](../interfaces/_interfaces_metadata_types_.runtimemodulemetadatav0.md)

  * [StorageFunctionMetadataV0](../interfaces/_interfaces_metadata_types_.storagefunctionmetadatav0.md)

  * [StorageMetadataV0](../interfaces/_interfaces_metadata_types_.storagemetadatav0.md)

## Implements

* [Codec](../interfaces/_types_.codec.md)

## Index

### Constructors

* [constructor](_codec_struct_.struct.md#constructor)

### Properties

* [Map](_codec_struct_.struct.md#static-map)

### Accessors

* [Type](_codec_struct_.struct.md#type)
* [encodedLength](_codec_struct_.struct.md#encodedlength)
* [hash](_codec_struct_.struct.md#hash)
* [isEmpty](_codec_struct_.struct.md#isempty)

### Methods

* [eq](_codec_struct_.struct.md#eq)
* [get](_codec_struct_.struct.md#get)
* [getAtIndex](_codec_struct_.struct.md#getatindex)
* [toArray](_codec_struct_.struct.md#toarray)
* [toHex](_codec_struct_.struct.md#tohex)
* [toJSON](_codec_struct_.struct.md#tojson)
* [toRawType](_codec_struct_.struct.md#torawtype)
* [toString](_codec_struct_.struct.md#tostring)
* [toU8a](_codec_struct_.struct.md#tou8a)
* [typesToMap](_codec_struct_.struct.md#static-typestomap)
* [with](_codec_struct_.struct.md#static-with)

## Constructors

###  constructor

\+ **new Struct**(`Types`: S, `value`: V | Map‹any, any› | any[] | string, `jsonMap`: Map‹keyof S, string›): *[Struct](_codec_struct_.struct.md)*

*Defined in [codec/Struct.ts:36](https://github.com/polkadot-js/api/blob/a1a52fb/packages/types/src/codec/Struct.ts#L36)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`Types` | S | - |
`value` | V \| Map‹any, any› \| any[] \| string |  {} as unknown as V |
`jsonMap` | Map‹keyof S, string› |  new Map() |

**Returns:** *[Struct](_codec_struct_.struct.md)*

## Properties

### `Static` Map

▪ **Map**: *MapConstructor*

Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.collection.d.ts:36

## Accessors

###  Type

• **get Type**(): *E*

*Defined in [codec/Struct.ts:157](https://github.com/polkadot-js/api/blob/a1a52fb/packages/types/src/codec/Struct.ts#L157)*

**`description`** Returns the Type description to sthe structure

**Returns:** *E*

___

###  encodedLength

• **get encodedLength**(): *number*

*Defined in [codec/Struct.ts:170](https://github.com/polkadot-js/api/blob/a1a52fb/packages/types/src/codec/Struct.ts#L170)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *[IHash](../interfaces/_types_.ihash.md)*

*Defined in [codec/Struct.ts:181](https://github.com/polkadot-js/api/blob/a1a52fb/packages/types/src/codec/Struct.ts#L181)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](../interfaces/_types_.ihash.md)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Defined in [codec/Struct.ts:142](https://github.com/polkadot-js/api/blob/a1a52fb/packages/types/src/codec/Struct.ts#L142)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Defined in [codec/Struct.ts:188](https://github.com/polkadot-js/api/blob/a1a52fb/packages/types/src/codec/Struct.ts#L188)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  get

▸ **get**(`name`: keyof S): *[Codec](../interfaces/_types_.codec.md) | undefined*

*Overrides void*

*Defined in [codec/Struct.ts:196](https://github.com/polkadot-js/api/blob/a1a52fb/packages/types/src/codec/Struct.ts#L196)*

**`description`** Returns a specific names entry in the structure

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | keyof S | The name of the entry to retrieve  |

**Returns:** *[Codec](../interfaces/_types_.codec.md) | undefined*

___

###  getAtIndex

▸ **getAtIndex**(`index`: number): *[Codec](../interfaces/_types_.codec.md)*

*Defined in [codec/Struct.ts:203](https://github.com/polkadot-js/api/blob/a1a52fb/packages/types/src/codec/Struct.ts#L203)*

**`description`** Returns the values of a member at a specific index (Rather use get(name) for performance)

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *[Codec](../interfaces/_types_.codec.md)*

___

###  toArray

▸ **toArray**(): *[Codec](../interfaces/_types_.codec.md)[]*

*Defined in [codec/Struct.ts:210](https://github.com/polkadot-js/api/blob/a1a52fb/packages/types/src/codec/Struct.ts#L210)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *[Codec](../interfaces/_types_.codec.md)[]*

___

###  toHex

▸ **toHex**(): *string*

*Defined in [codec/Struct.ts:217](https://github.com/polkadot-js/api/blob/a1a52fb/packages/types/src/codec/Struct.ts#L217)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJsonObject](../interfaces/_types_.anyjsonobject.md) | string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Defined in [codec/Struct.ts:224](https://github.com/polkadot-js/api/blob/a1a52fb/packages/types/src/codec/Struct.ts#L224)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJsonObject](../interfaces/_types_.anyjsonobject.md) | string*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Defined in [codec/Struct.ts:248](https://github.com/polkadot-js/api/blob/a1a52fb/packages/types/src/codec/Struct.ts#L248)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Defined in [codec/Struct.ts:257](https://github.com/polkadot-js/api/blob/a1a52fb/packages/types/src/codec/Struct.ts#L257)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *Uint8Array*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Defined in [codec/Struct.ts:265](https://github.com/polkadot-js/api/blob/a1a52fb/packages/types/src/codec/Struct.ts#L265)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *Uint8Array*

___

### `Static` typesToMap

▸ **typesToMap**(`Types`: Record‹string, [Constructor](../interfaces/_types_.constructor.md)›): *Record‹string, string›*

*Defined in [codec/Struct.ts:237](https://github.com/polkadot-js/api/blob/a1a52fb/packages/types/src/codec/Struct.ts#L237)*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | Record‹string, [Constructor](../interfaces/_types_.constructor.md)› |

**Returns:** *Record‹string, string›*

___

### `Static` with

▸ **with**<**S**>(`Types`: S): *[Constructor](../interfaces/_types_.constructor.md)‹[Struct](_codec_struct_.struct.md)‹S››*

*Defined in [codec/Struct.ts:119](https://github.com/polkadot-js/api/blob/a1a52fb/packages/types/src/codec/Struct.ts#L119)*

**Type parameters:**

▪ **S**: *TypesDef*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | S |

**Returns:** *[Constructor](../interfaces/_types_.constructor.md)‹[Struct](_codec_struct_.struct.md)‹S››*