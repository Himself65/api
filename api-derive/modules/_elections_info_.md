> # External module: "elections/info"

## Index

### Functions

* [info](_elections_info_.md#info)

## Functions

###  info

▸ **info**(`api`: `ApiInterfaceRx`): *function*

*Defined in [elections/info.ts:29](https://github.com/polkadot-js/api/blob/72af35d/packages/api-derive/src/elections/info.ts#L29)*

**`name`** info

**`example`** 
<BR>

```javascript
api.derive.elections.info(([members, candidates]) => {
  console.log(`There are currently ${members.length} council members and ${candidates.length} prospective council candidates.`);
});
```

**Parameters:**

Name | Type |
------ | ------ |
`api` | `ApiInterfaceRx` |

**Returns:** *function*

An object containing the combined results of the storage queries for
all relevant election module properties.

▸ (): *`Observable<DerivedElectionsInfo>`*