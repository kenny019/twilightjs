import { BinaryReader, BinaryWriter } from "../../binary";
/**
 * BtcReserve is a mapping of a validator address to a reserve ID
 * It holds other values in the reserve struct such as total
 * value, private pool value, public pool value, and the btc relay capacity value
 */
export interface BtcReserve {
  ReserveId: bigint;
  ReserveAddress: string;
  JudgeAddress: string;
  BtcRelayCapacityValue: bigint;
  TotalValue: bigint;
  PrivatePoolValue: bigint;
  PublicValue: bigint;
  FeePool: bigint;
  UnlockHeight: bigint;
  RoundId: bigint;
}
export interface BtcReserveProtoMsg {
  typeUrl: "/twilightproject.nyks.volt.BtcReserve";
  value: Uint8Array;
}
/**
 * BtcReserve is a mapping of a validator address to a reserve ID
 * It holds other values in the reserve struct such as total
 * value, private pool value, public pool value, and the btc relay capacity value
 */
export interface BtcReserveAmino {
  ReserveId: string;
  ReserveAddress: string;
  JudgeAddress: string;
  BtcRelayCapacityValue: string;
  TotalValue: string;
  PrivatePoolValue: string;
  PublicValue: string;
  FeePool: string;
  UnlockHeight: string;
  RoundId: string;
}
export interface BtcReserveAminoMsg {
  type: "/twilightproject.nyks.volt.BtcReserve";
  value: BtcReserveAmino;
}
/**
 * BtcReserve is a mapping of a validator address to a reserve ID
 * It holds other values in the reserve struct such as total
 * value, private pool value, public pool value, and the btc relay capacity value
 */
export interface BtcReserveSDKType {
  ReserveId: bigint;
  ReserveAddress: string;
  JudgeAddress: string;
  BtcRelayCapacityValue: bigint;
  TotalValue: bigint;
  PrivatePoolValue: bigint;
  PublicValue: bigint;
  FeePool: bigint;
  UnlockHeight: bigint;
  RoundId: bigint;
}
export interface ReserveWithdrawPool {
  ReserveID: bigint;
  RoundID: bigint;
  /** vector of identifiers */
  Identifiers: Uint8Array[];
}
export interface ReserveWithdrawPoolProtoMsg {
  typeUrl: "/twilightproject.nyks.volt.ReserveWithdrawPool";
  value: Uint8Array;
}
export interface ReserveWithdrawPoolAmino {
  ReserveID: string;
  RoundID: string;
  /** vector of identifiers */
  Identifiers: Uint8Array[];
}
export interface ReserveWithdrawPoolAminoMsg {
  type: "/twilightproject.nyks.volt.ReserveWithdrawPool";
  value: ReserveWithdrawPoolAmino;
}
export interface ReserveWithdrawPoolSDKType {
  ReserveID: bigint;
  RoundID: bigint;
  Identifiers: Uint8Array[];
}
function createBaseBtcReserve(): BtcReserve {
  return {
    ReserveId: BigInt(0),
    ReserveAddress: "",
    JudgeAddress: "",
    BtcRelayCapacityValue: BigInt(0),
    TotalValue: BigInt(0),
    PrivatePoolValue: BigInt(0),
    PublicValue: BigInt(0),
    FeePool: BigInt(0),
    UnlockHeight: BigInt(0),
    RoundId: BigInt(0)
  };
}
export const BtcReserve = {
  typeUrl: "/twilightproject.nyks.volt.BtcReserve",
  encode(message: BtcReserve, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.ReserveId !== BigInt(0)) {
      writer.uint32(8).uint64(message.ReserveId);
    }
    if (message.ReserveAddress !== "") {
      writer.uint32(18).string(message.ReserveAddress);
    }
    if (message.JudgeAddress !== "") {
      writer.uint32(26).string(message.JudgeAddress);
    }
    if (message.BtcRelayCapacityValue !== BigInt(0)) {
      writer.uint32(32).uint64(message.BtcRelayCapacityValue);
    }
    if (message.TotalValue !== BigInt(0)) {
      writer.uint32(40).uint64(message.TotalValue);
    }
    if (message.PrivatePoolValue !== BigInt(0)) {
      writer.uint32(48).uint64(message.PrivatePoolValue);
    }
    if (message.PublicValue !== BigInt(0)) {
      writer.uint32(56).uint64(message.PublicValue);
    }
    if (message.FeePool !== BigInt(0)) {
      writer.uint32(64).uint64(message.FeePool);
    }
    if (message.UnlockHeight !== BigInt(0)) {
      writer.uint32(72).uint64(message.UnlockHeight);
    }
    if (message.RoundId !== BigInt(0)) {
      writer.uint32(80).uint64(message.RoundId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BtcReserve {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBtcReserve();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ReserveId = reader.uint64();
          break;
        case 2:
          message.ReserveAddress = reader.string();
          break;
        case 3:
          message.JudgeAddress = reader.string();
          break;
        case 4:
          message.BtcRelayCapacityValue = reader.uint64();
          break;
        case 5:
          message.TotalValue = reader.uint64();
          break;
        case 6:
          message.PrivatePoolValue = reader.uint64();
          break;
        case 7:
          message.PublicValue = reader.uint64();
          break;
        case 8:
          message.FeePool = reader.uint64();
          break;
        case 9:
          message.UnlockHeight = reader.uint64();
          break;
        case 10:
          message.RoundId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<BtcReserve>): BtcReserve {
    const message = createBaseBtcReserve();
    message.ReserveId = object.ReserveId !== undefined && object.ReserveId !== null ? BigInt(object.ReserveId.toString()) : BigInt(0);
    message.ReserveAddress = object.ReserveAddress ?? "";
    message.JudgeAddress = object.JudgeAddress ?? "";
    message.BtcRelayCapacityValue = object.BtcRelayCapacityValue !== undefined && object.BtcRelayCapacityValue !== null ? BigInt(object.BtcRelayCapacityValue.toString()) : BigInt(0);
    message.TotalValue = object.TotalValue !== undefined && object.TotalValue !== null ? BigInt(object.TotalValue.toString()) : BigInt(0);
    message.PrivatePoolValue = object.PrivatePoolValue !== undefined && object.PrivatePoolValue !== null ? BigInt(object.PrivatePoolValue.toString()) : BigInt(0);
    message.PublicValue = object.PublicValue !== undefined && object.PublicValue !== null ? BigInt(object.PublicValue.toString()) : BigInt(0);
    message.FeePool = object.FeePool !== undefined && object.FeePool !== null ? BigInt(object.FeePool.toString()) : BigInt(0);
    message.UnlockHeight = object.UnlockHeight !== undefined && object.UnlockHeight !== null ? BigInt(object.UnlockHeight.toString()) : BigInt(0);
    message.RoundId = object.RoundId !== undefined && object.RoundId !== null ? BigInt(object.RoundId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: BtcReserveAmino): BtcReserve {
    return {
      ReserveId: BigInt(object.ReserveId),
      ReserveAddress: object.ReserveAddress,
      JudgeAddress: object.JudgeAddress,
      BtcRelayCapacityValue: BigInt(object.BtcRelayCapacityValue),
      TotalValue: BigInt(object.TotalValue),
      PrivatePoolValue: BigInt(object.PrivatePoolValue),
      PublicValue: BigInt(object.PublicValue),
      FeePool: BigInt(object.FeePool),
      UnlockHeight: BigInt(object.UnlockHeight),
      RoundId: BigInt(object.RoundId)
    };
  },
  toAmino(message: BtcReserve): BtcReserveAmino {
    const obj: any = {};
    obj.ReserveId = message.ReserveId ? message.ReserveId.toString() : undefined;
    obj.ReserveAddress = message.ReserveAddress;
    obj.JudgeAddress = message.JudgeAddress;
    obj.BtcRelayCapacityValue = message.BtcRelayCapacityValue ? message.BtcRelayCapacityValue.toString() : undefined;
    obj.TotalValue = message.TotalValue ? message.TotalValue.toString() : undefined;
    obj.PrivatePoolValue = message.PrivatePoolValue ? message.PrivatePoolValue.toString() : undefined;
    obj.PublicValue = message.PublicValue ? message.PublicValue.toString() : undefined;
    obj.FeePool = message.FeePool ? message.FeePool.toString() : undefined;
    obj.UnlockHeight = message.UnlockHeight ? message.UnlockHeight.toString() : undefined;
    obj.RoundId = message.RoundId ? message.RoundId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: BtcReserveAminoMsg): BtcReserve {
    return BtcReserve.fromAmino(object.value);
  },
  fromProtoMsg(message: BtcReserveProtoMsg): BtcReserve {
    return BtcReserve.decode(message.value);
  },
  toProto(message: BtcReserve): Uint8Array {
    return BtcReserve.encode(message).finish();
  },
  toProtoMsg(message: BtcReserve): BtcReserveProtoMsg {
    return {
      typeUrl: "/twilightproject.nyks.volt.BtcReserve",
      value: BtcReserve.encode(message).finish()
    };
  }
};
function createBaseReserveWithdrawPool(): ReserveWithdrawPool {
  return {
    ReserveID: BigInt(0),
    RoundID: BigInt(0),
    Identifiers: []
  };
}
export const ReserveWithdrawPool = {
  typeUrl: "/twilightproject.nyks.volt.ReserveWithdrawPool",
  encode(message: ReserveWithdrawPool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.ReserveID !== BigInt(0)) {
      writer.uint32(8).uint64(message.ReserveID);
    }
    if (message.RoundID !== BigInt(0)) {
      writer.uint32(16).uint64(message.RoundID);
    }
    for (const v of message.Identifiers) {
      writer.uint32(26).bytes(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ReserveWithdrawPool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReserveWithdrawPool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ReserveID = reader.uint64();
          break;
        case 2:
          message.RoundID = reader.uint64();
          break;
        case 3:
          message.Identifiers.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ReserveWithdrawPool>): ReserveWithdrawPool {
    const message = createBaseReserveWithdrawPool();
    message.ReserveID = object.ReserveID !== undefined && object.ReserveID !== null ? BigInt(object.ReserveID.toString()) : BigInt(0);
    message.RoundID = object.RoundID !== undefined && object.RoundID !== null ? BigInt(object.RoundID.toString()) : BigInt(0);
    message.Identifiers = object.Identifiers?.map(e => e) || [];
    return message;
  },
  fromAmino(object: ReserveWithdrawPoolAmino): ReserveWithdrawPool {
    return {
      ReserveID: BigInt(object.ReserveID),
      RoundID: BigInt(object.RoundID),
      Identifiers: Array.isArray(object?.Identifiers) ? object.Identifiers.map((e: any) => e) : []
    };
  },
  toAmino(message: ReserveWithdrawPool): ReserveWithdrawPoolAmino {
    const obj: any = {};
    obj.ReserveID = message.ReserveID ? message.ReserveID.toString() : undefined;
    obj.RoundID = message.RoundID ? message.RoundID.toString() : undefined;
    if (message.Identifiers) {
      obj.Identifiers = message.Identifiers.map(e => e);
    } else {
      obj.Identifiers = [];
    }
    return obj;
  },
  fromAminoMsg(object: ReserveWithdrawPoolAminoMsg): ReserveWithdrawPool {
    return ReserveWithdrawPool.fromAmino(object.value);
  },
  fromProtoMsg(message: ReserveWithdrawPoolProtoMsg): ReserveWithdrawPool {
    return ReserveWithdrawPool.decode(message.value);
  },
  toProto(message: ReserveWithdrawPool): Uint8Array {
    return ReserveWithdrawPool.encode(message).finish();
  },
  toProtoMsg(message: ReserveWithdrawPool): ReserveWithdrawPoolProtoMsg {
    return {
      typeUrl: "/twilightproject.nyks.volt.ReserveWithdrawPool",
      value: ReserveWithdrawPool.encode(message).finish()
    };
  }
};