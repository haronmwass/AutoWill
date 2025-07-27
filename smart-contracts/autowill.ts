// AutoWill Smart Contract for Massa Blockchain
// Language: AssemblyScript
import {
  Address,
  call,
  generateEvent,
  getCaller,
  getOwnAddress,
  storageGet,
  storageSet,
} from "@massalabs/massa-as-sdk";

import { Args, bytesToU64, u64ToBytes } from "@massalabs/as-types";

const WILLS_PREFIX = "will_";

// Structure of a Will: beneficiary address and amount
function serializeWill(beneficiary: Address, amount: u64): StaticArray<u8> {
  const args = new Args();
  args.add(beneficiary).add(amount);
  return args.serialize();
}

function deserializeWill(data: StaticArray<u8>): { beneficiary: Address; amount: u64 } {
  const args = new Args(data);
  const beneficiary = args.nextAddress();
  const amount = args.nextU64();
  return { beneficiary, amount };
}

export function createWill(data: StaticArray<u8>): void {
  const args = new Args(data);
  const beneficiary = args.nextAddress();
  const amount = args.nextU64();
  const caller = getCaller();
  const key = WILLS_PREFIX + caller.toString();
  const encoded = serializeWill(beneficiary, amount);

  storageSet(key, encoded);
  generateEvent(`Will created for ${caller.toString()} with beneficiary ${beneficiary.toString()} and amount ${amount.toString()}`);
}

export function getWill(data: StaticArray<u8>): StaticArray<u8> {
  const args = new Args(data);
  const owner = args.nextAddress();
  const key = WILLS_PREFIX + owner.toString();

  const willData = storageGet(key);
  if (willData === null) {
    return new Args().addString("No will found").serialize();
  }

  return willData;
}
