import { BinaryReader, BinaryWriter } from "../../binary";
export interface MsgSetDelegateAddresses {
  validatorAddress: string;
  btcOracleAddress: string;
  btcPublicKey: string;
}
export interface MsgSetDelegateAddressesProtoMsg {
  typeUrl: "/twilightproject.nyks.forks.MsgSetDelegateAddresses";
  value: Uint8Array;
}
export interface MsgSetDelegateAddressesAmino {
  validatorAddress: string;
  btcOracleAddress: string;
  btcPublicKey: string;
}
export interface MsgSetDelegateAddressesAminoMsg {
  type: "/twilightproject.nyks.forks.MsgSetDelegateAddresses";
  value: MsgSetDelegateAddressesAmino;
}
export interface MsgSetDelegateAddressesSDKType {
  validatorAddress: string;
  btcOracleAddress: string;
  btcPublicKey: string;
}
export interface MsgSetDelegateAddressesResponse {
  id: bigint;
}
export interface MsgSetDelegateAddressesResponseProtoMsg {
  typeUrl: "/twilightproject.nyks.forks.MsgSetDelegateAddressesResponse";
  value: Uint8Array;
}
export interface MsgSetDelegateAddressesResponseAmino {
  id: string;
}
export interface MsgSetDelegateAddressesResponseAminoMsg {
  type: "/twilightproject.nyks.forks.MsgSetDelegateAddressesResponse";
  value: MsgSetDelegateAddressesResponseAmino;
}
export interface MsgSetDelegateAddressesResponseSDKType {
  id: bigint;
}
export interface MsgSeenBtcChainTip {
  height: bigint;
  hash: string;
  btcOracleAddress: string;
}
export interface MsgSeenBtcChainTipProtoMsg {
  typeUrl: "/twilightproject.nyks.forks.MsgSeenBtcChainTip";
  value: Uint8Array;
}
export interface MsgSeenBtcChainTipAmino {
  height: string;
  hash: string;
  btcOracleAddress: string;
}
export interface MsgSeenBtcChainTipAminoMsg {
  type: "/twilightproject.nyks.forks.MsgSeenBtcChainTip";
  value: MsgSeenBtcChainTipAmino;
}
export interface MsgSeenBtcChainTipSDKType {
  height: bigint;
  hash: string;
  btcOracleAddress: string;
}
export interface MsgSeenBtcChainTipResponse {}
export interface MsgSeenBtcChainTipResponseProtoMsg {
  typeUrl: "/twilightproject.nyks.forks.MsgSeenBtcChainTipResponse";
  value: Uint8Array;
}
export interface MsgSeenBtcChainTipResponseAmino {}
export interface MsgSeenBtcChainTipResponseAminoMsg {
  type: "/twilightproject.nyks.forks.MsgSeenBtcChainTipResponse";
  value: MsgSeenBtcChainTipResponseAmino;
}
export interface MsgSeenBtcChainTipResponseSDKType {}
function createBaseMsgSetDelegateAddresses(): MsgSetDelegateAddresses {
  return {
    validatorAddress: "",
    btcOracleAddress: "",
    btcPublicKey: ""
  };
}
export const MsgSetDelegateAddresses = {
  typeUrl: "/twilightproject.nyks.forks.MsgSetDelegateAddresses",
  encode(message: MsgSetDelegateAddresses, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    if (message.btcOracleAddress !== "") {
      writer.uint32(26).string(message.btcOracleAddress);
    }
    if (message.btcPublicKey !== "") {
      writer.uint32(34).string(message.btcPublicKey);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetDelegateAddresses {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetDelegateAddresses();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.validatorAddress = reader.string();
          break;
        case 3:
          message.btcOracleAddress = reader.string();
          break;
        case 4:
          message.btcPublicKey = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSetDelegateAddresses>): MsgSetDelegateAddresses {
    const message = createBaseMsgSetDelegateAddresses();
    message.validatorAddress = object.validatorAddress ?? "";
    message.btcOracleAddress = object.btcOracleAddress ?? "";
    message.btcPublicKey = object.btcPublicKey ?? "";
    return message;
  },
  fromAmino(object: MsgSetDelegateAddressesAmino): MsgSetDelegateAddresses {
    return {
      validatorAddress: object.validatorAddress,
      btcOracleAddress: object.btcOracleAddress,
      btcPublicKey: object.btcPublicKey
    };
  },
  toAmino(message: MsgSetDelegateAddresses): MsgSetDelegateAddressesAmino {
    const obj: any = {};
    obj.validatorAddress = message.validatorAddress;
    obj.btcOracleAddress = message.btcOracleAddress;
    obj.btcPublicKey = message.btcPublicKey;
    return obj;
  },
  fromAminoMsg(object: MsgSetDelegateAddressesAminoMsg): MsgSetDelegateAddresses {
    return MsgSetDelegateAddresses.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetDelegateAddressesProtoMsg): MsgSetDelegateAddresses {
    return MsgSetDelegateAddresses.decode(message.value);
  },
  toProto(message: MsgSetDelegateAddresses): Uint8Array {
    return MsgSetDelegateAddresses.encode(message).finish();
  },
  toProtoMsg(message: MsgSetDelegateAddresses): MsgSetDelegateAddressesProtoMsg {
    return {
      typeUrl: "/twilightproject.nyks.forks.MsgSetDelegateAddresses",
      value: MsgSetDelegateAddresses.encode(message).finish()
    };
  }
};
function createBaseMsgSetDelegateAddressesResponse(): MsgSetDelegateAddressesResponse {
  return {
    id: BigInt(0)
  };
}
export const MsgSetDelegateAddressesResponse = {
  typeUrl: "/twilightproject.nyks.forks.MsgSetDelegateAddressesResponse",
  encode(message: MsgSetDelegateAddressesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetDelegateAddressesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetDelegateAddressesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSetDelegateAddressesResponse>): MsgSetDelegateAddressesResponse {
    const message = createBaseMsgSetDelegateAddressesResponse();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgSetDelegateAddressesResponseAmino): MsgSetDelegateAddressesResponse {
    return {
      id: BigInt(object.id)
    };
  },
  toAmino(message: MsgSetDelegateAddressesResponse): MsgSetDelegateAddressesResponseAmino {
    const obj: any = {};
    obj.id = message.id ? message.id.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSetDelegateAddressesResponseAminoMsg): MsgSetDelegateAddressesResponse {
    return MsgSetDelegateAddressesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetDelegateAddressesResponseProtoMsg): MsgSetDelegateAddressesResponse {
    return MsgSetDelegateAddressesResponse.decode(message.value);
  },
  toProto(message: MsgSetDelegateAddressesResponse): Uint8Array {
    return MsgSetDelegateAddressesResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetDelegateAddressesResponse): MsgSetDelegateAddressesResponseProtoMsg {
    return {
      typeUrl: "/twilightproject.nyks.forks.MsgSetDelegateAddressesResponse",
      value: MsgSetDelegateAddressesResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSeenBtcChainTip(): MsgSeenBtcChainTip {
  return {
    height: BigInt(0),
    hash: "",
    btcOracleAddress: ""
  };
}
export const MsgSeenBtcChainTip = {
  typeUrl: "/twilightproject.nyks.forks.MsgSeenBtcChainTip",
  encode(message: MsgSeenBtcChainTip, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.height !== BigInt(0)) {
      writer.uint32(8).uint64(message.height);
    }
    if (message.hash !== "") {
      writer.uint32(18).string(message.hash);
    }
    if (message.btcOracleAddress !== "") {
      writer.uint32(26).string(message.btcOracleAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSeenBtcChainTip {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSeenBtcChainTip();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.uint64();
          break;
        case 2:
          message.hash = reader.string();
          break;
        case 3:
          message.btcOracleAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSeenBtcChainTip>): MsgSeenBtcChainTip {
    const message = createBaseMsgSeenBtcChainTip();
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.hash = object.hash ?? "";
    message.btcOracleAddress = object.btcOracleAddress ?? "";
    return message;
  },
  fromAmino(object: MsgSeenBtcChainTipAmino): MsgSeenBtcChainTip {
    return {
      height: BigInt(object.height),
      hash: object.hash,
      btcOracleAddress: object.btcOracleAddress
    };
  },
  toAmino(message: MsgSeenBtcChainTip): MsgSeenBtcChainTipAmino {
    const obj: any = {};
    obj.height = message.height ? message.height.toString() : undefined;
    obj.hash = message.hash;
    obj.btcOracleAddress = message.btcOracleAddress;
    return obj;
  },
  fromAminoMsg(object: MsgSeenBtcChainTipAminoMsg): MsgSeenBtcChainTip {
    return MsgSeenBtcChainTip.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSeenBtcChainTipProtoMsg): MsgSeenBtcChainTip {
    return MsgSeenBtcChainTip.decode(message.value);
  },
  toProto(message: MsgSeenBtcChainTip): Uint8Array {
    return MsgSeenBtcChainTip.encode(message).finish();
  },
  toProtoMsg(message: MsgSeenBtcChainTip): MsgSeenBtcChainTipProtoMsg {
    return {
      typeUrl: "/twilightproject.nyks.forks.MsgSeenBtcChainTip",
      value: MsgSeenBtcChainTip.encode(message).finish()
    };
  }
};
function createBaseMsgSeenBtcChainTipResponse(): MsgSeenBtcChainTipResponse {
  return {};
}
export const MsgSeenBtcChainTipResponse = {
  typeUrl: "/twilightproject.nyks.forks.MsgSeenBtcChainTipResponse",
  encode(_: MsgSeenBtcChainTipResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSeenBtcChainTipResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSeenBtcChainTipResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgSeenBtcChainTipResponse>): MsgSeenBtcChainTipResponse {
    const message = createBaseMsgSeenBtcChainTipResponse();
    return message;
  },
  fromAmino(_: MsgSeenBtcChainTipResponseAmino): MsgSeenBtcChainTipResponse {
    return {};
  },
  toAmino(_: MsgSeenBtcChainTipResponse): MsgSeenBtcChainTipResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSeenBtcChainTipResponseAminoMsg): MsgSeenBtcChainTipResponse {
    return MsgSeenBtcChainTipResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSeenBtcChainTipResponseProtoMsg): MsgSeenBtcChainTipResponse {
    return MsgSeenBtcChainTipResponse.decode(message.value);
  },
  toProto(message: MsgSeenBtcChainTipResponse): Uint8Array {
    return MsgSeenBtcChainTipResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSeenBtcChainTipResponse): MsgSeenBtcChainTipResponseProtoMsg {
    return {
      typeUrl: "/twilightproject.nyks.forks.MsgSeenBtcChainTipResponse",
      value: MsgSeenBtcChainTipResponse.encode(message).finish()
    };
  }
};