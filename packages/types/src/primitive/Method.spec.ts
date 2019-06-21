// Copyright 2017-2019 @polkadot/extrinsics authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Method from './Method';

describe('Method', () => {
  // FIXME susbtrate master does not currently expose the new system module calls in meta,
  // once it does the index here will change, so a different method would be refrerred to
  it('handles decoding correctly (bare)', () => {
    expect(
      new Method({
        args: [],
        callIndex: [3, 1] // balances.setBalance
      }, { args: [] } as any).toU8a()
    ).toEqual(new Uint8Array([3, 1, 0, 0, 0]));
  });

  it('handles creation from a hex value properly', () => {
    expect(
      new Method('0x0301', { args: [{ name: 'a', type: 'Address' }, { name: 'b', type: 'Compact<Balance>' }, { name: 'c', type: 'Compact<Balance>' }] } as any).toU8a()
    ).toEqual(new Uint8Array([3, 1, 0, 0, 0])); // balances.setBalance
  });

  describe('hasOrigin', () => {
    const test = {
      args: [],
      callIndex: [2, 2] // timestamp
    };

    it('is false with no arguments', () => {
      expect(
        new Method(test, { args: [] } as any).hasOrigin
      ).toEqual(false);
    });

    it('is false with first argument as non-Origin', () => {
      expect(
        new Method(test, { args: [{ name: 'a', type: 'u32' }] } as any).hasOrigin
      ).toEqual(false);
    });

    it('is false with first argument as non-Origin', () => {
      expect(
        new Method(test, { args: [{ name: 'a', type: 'Origin' }] } as any).hasOrigin
      ).toEqual(true);
    });
  });
});
