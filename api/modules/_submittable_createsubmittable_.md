**[Polkadot JS API](../README.md)**

[Globals](../globals.md) › ["submittable/createSubmittable"](_submittable_createsubmittable_.md)

# External module: "submittable/createSubmittable"

## Index

### Functions

* [createSubmittable](_submittable_createsubmittable_.md#createsubmittable)

## Functions

###  createSubmittable

▸ **createSubmittable**<**ApiType**>(`type`: [ApiTypes](_types_.md#apitypes), `api`: [ApiInterfaceRx](../interfaces/_types_.apiinterfacerx.md), `decorateMethod`: function): *Creator‹ApiType›*

*Defined in [submittable/createSubmittable.ts:16](https://github.com/polkadot-js/api/blob/a1a52fb/packages/api/src/submittable/createSubmittable.ts#L16)*

**Type parameters:**

▪ **ApiType**

**Parameters:**

▪ **type**: *[ApiTypes](_types_.md#apitypes)*

▪ **api**: *[ApiInterfaceRx](../interfaces/_types_.apiinterfacerx.md)*

▪ **decorateMethod**: *function*

▸ (`method`: function, `options?`: [DecorateMethodOptions](../interfaces/_types_.decoratemethodoptions.md)): *any*

**Parameters:**

▪ **method**: *function*

▸ (...`args`: any[]): *Observable‹any›*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

▪`Optional`  **options**: *[DecorateMethodOptions](../interfaces/_types_.decoratemethodoptions.md)*

**Returns:** *Creator‹ApiType›*