import { Long, DeepPartial } from "../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * BtcReserve is a mapping of a validator address to a reserve ID
 * It holds other values in the reserve struct such as total
 * value, private pool value, public pool value, and the btc relay capacity value
 */
export interface BtcReserve {
  ReserveId: Long;
  ReserveAddress: string;
  JudgeAddress: string;
  BtcRelayCapacityValue: Long;
  TotalValue: Long;
  PrivatePoolValue: Long;
  PublicValue: Long;
  FeePool: Long;
  UnlockHeight: Long;
  RoundId: Long;
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
  ReserveId: Long;
  ReserveAddress: string;
  JudgeAddress: string;
  BtcRelayCapacityValue: Long;
  TotalValue: Long;
  PrivatePoolValue: Long;
  PublicValue: Long;
  FeePool: Long;
  UnlockHeight: Long;
  RoundId: Long;
}
export interface ReserveWithdrawPool {
  ReserveID: Long;
  RoundID: Long;
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
  ReserveID: Long;
  RoundID: Long;
  Identifiers: Uint8Array[];
}
function createBaseBtcReserve(): BtcReserve {
  return {
    ReserveId: Long.UZERO,
    ReserveAddress: "",
    JudgeAddress: "",
    BtcRelayCapacityValue: Long.UZERO,
    TotalValue: Long.UZERO,
    PrivatePoolValue: Long.UZERO,
    PublicValue: Long.UZERO,
    FeePool: Long.UZERO,
    UnlockHeight: Long.UZERO,
    RoundId: Long.UZERO
  };
}
export const BtcReserve = {
  encode(message: BtcReserve, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.ReserveId.isZero()) {
      writer.uint32(8).uint64(message.ReserveId);
    }
    if (message.ReserveAddress !== "") {
      writer.uint32(18).string(message.ReserveAddress);
    }
    if (message.JudgeAddress !== "") {
      writer.uint32(26).string(message.JudgeAddress);
    }
    if (!message.BtcRelayCapacityValue.isZero()) {
      writer.uint32(32).uint64(message.BtcRelayCapacityValue);
    }
    if (!message.TotalValue.isZero()) {
      writer.uint32(40).uint64(message.TotalValue);
    }
    if (!message.PrivatePoolValue.isZero()) {
      writer.uint32(48).uint64(message.PrivatePoolValue);
    }
    if (!message.PublicValue.isZero()) {
      writer.uint32(56).uint64(message.PublicValue);
    }
    if (!message.FeePool.isZero()) {
      writer.uint32(64).uint64(message.FeePool);
    }
    if (!message.UnlockHeight.isZero()) {
      writer.uint32(72).uint64(message.UnlockHeight);
    }
    if (!message.RoundId.isZero()) {
      writer.uint32(80).uint64(message.RoundId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): BtcReserve {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBtcReserve();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ReserveId = (reader.uint64() as Long);
          break;
        case 2:
          message.ReserveAddress = reader.string();
          break;
        case 3:
          message.JudgeAddress = reader.string();
          break;
        case 4:
          message.BtcRelayCapacityValue = (reader.uint64() as Long);
          break;
        case 5:
          message.TotalValue = (reader.uint64() as Long);
          break;
        case 6:
          message.PrivatePoolValue = (reader.uint64() as Long);
          break;
        case 7:
          message.PublicValue = (reader.uint64() as Long);
          break;
        case 8:
          message.FeePool = (reader.uint64() as Long);
          break;
        case 9:
          message.UnlockHeight = (reader.uint64() as Long);
          break;
        case 10:
          message.RoundId = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<BtcReserve>): BtcReserve {
    const message = createBaseBtcReserve();
    message.ReserveId = object.ReserveId !== undefined && object.ReserveId !== null ? Long.fromValue(object.ReserveId) : Long.UZERO;
    message.ReserveAddress = object.ReserveAddress ?? "";
    message.JudgeAddress = object.JudgeAddress ?? "";
    message.BtcRelayCapacityValue = object.BtcRelayCapacityValue !== undefined && object.BtcRelayCapacityValue !== null ? Long.fromValue(object.BtcRelayCapacityValue) : Long.UZERO;
    message.TotalValue = object.TotalValue !== undefined && object.TotalValue !== null ? Long.fromValue(object.TotalValue) : Long.UZERO;
    message.PrivatePoolValue = object.PrivatePoolValue !== undefined && object.PrivatePoolValue !== null ? Long.fromValue(object.PrivatePoolValue) : Long.UZERO;
    message.PublicValue = object.PublicValue !== undefined && object.PublicValue !== null ? Long.fromValue(object.PublicValue) : Long.UZERO;
    message.FeePool = object.FeePool !== undefined && object.FeePool !== null ? Long.fromValue(object.FeePool) : Long.UZERO;
    message.UnlockHeight = object.UnlockHeight !== undefined && object.UnlockHeight !== null ? Long.fromValue(object.UnlockHeight) : Long.UZERO;
    message.RoundId = object.RoundId !== undefined && object.RoundId !== null ? Long.fromValue(object.RoundId) : Long.UZERO;
    return message;
  },
  fromAmino(object: BtcReserveAmino): BtcReserve {
    return {
      ReserveId: Long.fromString(object.ReserveId),
      ReserveAddress: object.ReserveAddress,
      JudgeAddress: object.JudgeAddress,
      BtcRelayCapacityValue: Long.fromString(object.BtcRelayCapacityValue),
      TotalValue: Long.fromString(object.TotalValue),
      PrivatePoolValue: Long.fromString(object.PrivatePoolValue),
      PublicValue: Long.fromString(object.PublicValue),
      FeePool: Long.fromString(object.FeePool),
      UnlockHeight: Long.fromString(object.UnlockHeight),
      RoundId: Long.fromString(object.RoundId)
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
    ReserveID: Long.UZERO,
    RoundID: Long.UZERO,
    Identifiers: []
  };
}
export const ReserveWithdrawPool = {
  encode(message: ReserveWithdrawPool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.ReserveID.isZero()) {
      writer.uint32(8).uint64(message.ReserveID);
    }
    if (!message.RoundID.isZero()) {
      writer.uint32(16).uint64(message.RoundID);
    }
    for (const v of message.Identifiers) {
      writer.uint32(26).bytes(v!);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ReserveWithdrawPool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReserveWithdrawPool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ReserveID = (reader.uint64() as Long);
          break;
        case 2:
          message.RoundID = (reader.uint64() as Long);
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
  fromPartial(object: DeepPartial<ReserveWithdrawPool>): ReserveWithdrawPool {
    const message = createBaseReserveWithdrawPool();
    message.ReserveID = object.ReserveID !== undefined && object.ReserveID !== null ? Long.fromValue(object.ReserveID) : Long.UZERO;
    message.RoundID = object.RoundID !== undefined && object.RoundID !== null ? Long.fromValue(object.RoundID) : Long.UZERO;
    message.Identifiers = object.Identifiers?.map(e => e) || [];
    return message;
  },
  fromAmino(object: ReserveWithdrawPoolAmino): ReserveWithdrawPool {
    return {
      ReserveID: Long.fromString(object.ReserveID),
      RoundID: Long.fromString(object.RoundID),
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