import { Long, DeepPartial } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface MsgTransferTx {
  txId: string;
  txByteCode: string;
  zkOracleAddress: string;
}
export interface MsgTransferTxProtoMsg {
  typeUrl: "/twilightproject.nyks.zkos.MsgTransferTx";
  value: Uint8Array;
}
export interface MsgTransferTxAmino {
  txId: string;
  txByteCode: string;
  zkOracleAddress: string;
}
export interface MsgTransferTxAminoMsg {
  type: "/twilightproject.nyks.zkos.MsgTransferTx";
  value: MsgTransferTxAmino;
}
export interface MsgTransferTxSDKType {
  txId: string;
  txByteCode: string;
  zkOracleAddress: string;
}
export interface MsgTransferTxResponse {}
export interface MsgTransferTxResponseProtoMsg {
  typeUrl: "/twilightproject.nyks.zkos.MsgTransferTxResponse";
  value: Uint8Array;
}
export interface MsgTransferTxResponseAmino {}
export interface MsgTransferTxResponseAminoMsg {
  type: "/twilightproject.nyks.zkos.MsgTransferTxResponse";
  value: MsgTransferTxResponseAmino;
}
export interface MsgTransferTxResponseSDKType {}
export interface MsgMintBurnTradingBtc {
  mintOrBurn: boolean;
  btcValue: Long;
  qqAccount: string;
  encryptScalar: string;
  twilightAddress: string;
}
export interface MsgMintBurnTradingBtcProtoMsg {
  typeUrl: "/twilightproject.nyks.zkos.MsgMintBurnTradingBtc";
  value: Uint8Array;
}
export interface MsgMintBurnTradingBtcAmino {
  mintOrBurn: boolean;
  btcValue: string;
  qqAccount: string;
  encryptScalar: string;
  twilightAddress: string;
}
export interface MsgMintBurnTradingBtcAminoMsg {
  type: "/twilightproject.nyks.zkos.MsgMintBurnTradingBtc";
  value: MsgMintBurnTradingBtcAmino;
}
export interface MsgMintBurnTradingBtcSDKType {
  mintOrBurn: boolean;
  btcValue: Long;
  qqAccount: string;
  encryptScalar: string;
  twilightAddress: string;
}
export interface MsgMintBurnTradingBtcResponse {}
export interface MsgMintBurnTradingBtcResponseProtoMsg {
  typeUrl: "/twilightproject.nyks.zkos.MsgMintBurnTradingBtcResponse";
  value: Uint8Array;
}
export interface MsgMintBurnTradingBtcResponseAmino {}
export interface MsgMintBurnTradingBtcResponseAminoMsg {
  type: "/twilightproject.nyks.zkos.MsgMintBurnTradingBtcResponse";
  value: MsgMintBurnTradingBtcResponseAmino;
}
export interface MsgMintBurnTradingBtcResponseSDKType {}
function createBaseMsgTransferTx(): MsgTransferTx {
  return {
    txId: "",
    txByteCode: "",
    zkOracleAddress: ""
  };
}
export const MsgTransferTx = {
  encode(message: MsgTransferTx, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.txId !== "") {
      writer.uint32(10).string(message.txId);
    }
    if (message.txByteCode !== "") {
      writer.uint32(18).string(message.txByteCode);
    }
    if (message.zkOracleAddress !== "") {
      writer.uint32(26).string(message.zkOracleAddress);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransferTx {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferTx();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txId = reader.string();
          break;
        case 2:
          message.txByteCode = reader.string();
          break;
        case 3:
          message.zkOracleAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgTransferTx>): MsgTransferTx {
    const message = createBaseMsgTransferTx();
    message.txId = object.txId ?? "";
    message.txByteCode = object.txByteCode ?? "";
    message.zkOracleAddress = object.zkOracleAddress ?? "";
    return message;
  },
  fromAmino(object: MsgTransferTxAmino): MsgTransferTx {
    return {
      txId: object.txId,
      txByteCode: object.txByteCode,
      zkOracleAddress: object.zkOracleAddress
    };
  },
  toAmino(message: MsgTransferTx): MsgTransferTxAmino {
    const obj: any = {};
    obj.txId = message.txId;
    obj.txByteCode = message.txByteCode;
    obj.zkOracleAddress = message.zkOracleAddress;
    return obj;
  },
  fromAminoMsg(object: MsgTransferTxAminoMsg): MsgTransferTx {
    return MsgTransferTx.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgTransferTxProtoMsg): MsgTransferTx {
    return MsgTransferTx.decode(message.value);
  },
  toProto(message: MsgTransferTx): Uint8Array {
    return MsgTransferTx.encode(message).finish();
  },
  toProtoMsg(message: MsgTransferTx): MsgTransferTxProtoMsg {
    return {
      typeUrl: "/twilightproject.nyks.zkos.MsgTransferTx",
      value: MsgTransferTx.encode(message).finish()
    };
  }
};
function createBaseMsgTransferTxResponse(): MsgTransferTxResponse {
  return {};
}
export const MsgTransferTxResponse = {
  encode(_: MsgTransferTxResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransferTxResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferTxResponse();
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
  fromPartial(_: DeepPartial<MsgTransferTxResponse>): MsgTransferTxResponse {
    const message = createBaseMsgTransferTxResponse();
    return message;
  },
  fromAmino(_: MsgTransferTxResponseAmino): MsgTransferTxResponse {
    return {};
  },
  toAmino(_: MsgTransferTxResponse): MsgTransferTxResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgTransferTxResponseAminoMsg): MsgTransferTxResponse {
    return MsgTransferTxResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgTransferTxResponseProtoMsg): MsgTransferTxResponse {
    return MsgTransferTxResponse.decode(message.value);
  },
  toProto(message: MsgTransferTxResponse): Uint8Array {
    return MsgTransferTxResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgTransferTxResponse): MsgTransferTxResponseProtoMsg {
    return {
      typeUrl: "/twilightproject.nyks.zkos.MsgTransferTxResponse",
      value: MsgTransferTxResponse.encode(message).finish()
    };
  }
};
function createBaseMsgMintBurnTradingBtc(): MsgMintBurnTradingBtc {
  return {
    mintOrBurn: false,
    btcValue: Long.UZERO,
    qqAccount: "",
    encryptScalar: "",
    twilightAddress: ""
  };
}
export const MsgMintBurnTradingBtc = {
  encode(message: MsgMintBurnTradingBtc, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mintOrBurn === true) {
      writer.uint32(8).bool(message.mintOrBurn);
    }
    if (!message.btcValue.isZero()) {
      writer.uint32(16).uint64(message.btcValue);
    }
    if (message.qqAccount !== "") {
      writer.uint32(26).string(message.qqAccount);
    }
    if (message.encryptScalar !== "") {
      writer.uint32(34).string(message.encryptScalar);
    }
    if (message.twilightAddress !== "") {
      writer.uint32(42).string(message.twilightAddress);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintBurnTradingBtc {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMintBurnTradingBtc();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mintOrBurn = reader.bool();
          break;
        case 2:
          message.btcValue = (reader.uint64() as Long);
          break;
        case 3:
          message.qqAccount = reader.string();
          break;
        case 4:
          message.encryptScalar = reader.string();
          break;
        case 5:
          message.twilightAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgMintBurnTradingBtc>): MsgMintBurnTradingBtc {
    const message = createBaseMsgMintBurnTradingBtc();
    message.mintOrBurn = object.mintOrBurn ?? false;
    message.btcValue = object.btcValue !== undefined && object.btcValue !== null ? Long.fromValue(object.btcValue) : Long.UZERO;
    message.qqAccount = object.qqAccount ?? "";
    message.encryptScalar = object.encryptScalar ?? "";
    message.twilightAddress = object.twilightAddress ?? "";
    return message;
  },
  fromAmino(object: MsgMintBurnTradingBtcAmino): MsgMintBurnTradingBtc {
    return {
      mintOrBurn: object.mintOrBurn,
      btcValue: Long.fromString(object.btcValue),
      qqAccount: object.qqAccount,
      encryptScalar: object.encryptScalar,
      twilightAddress: object.twilightAddress
    };
  },
  toAmino(message: MsgMintBurnTradingBtc): MsgMintBurnTradingBtcAmino {
    const obj: any = {};
    obj.mintOrBurn = message.mintOrBurn;
    obj.btcValue = message.btcValue ? message.btcValue.toString() : undefined;
    obj.qqAccount = message.qqAccount;
    obj.encryptScalar = message.encryptScalar;
    obj.twilightAddress = message.twilightAddress;
    return obj;
  },
  fromAminoMsg(object: MsgMintBurnTradingBtcAminoMsg): MsgMintBurnTradingBtc {
    return MsgMintBurnTradingBtc.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgMintBurnTradingBtcProtoMsg): MsgMintBurnTradingBtc {
    return MsgMintBurnTradingBtc.decode(message.value);
  },
  toProto(message: MsgMintBurnTradingBtc): Uint8Array {
    return MsgMintBurnTradingBtc.encode(message).finish();
  },
  toProtoMsg(message: MsgMintBurnTradingBtc): MsgMintBurnTradingBtcProtoMsg {
    return {
      typeUrl: "/twilightproject.nyks.zkos.MsgMintBurnTradingBtc",
      value: MsgMintBurnTradingBtc.encode(message).finish()
    };
  }
};
function createBaseMsgMintBurnTradingBtcResponse(): MsgMintBurnTradingBtcResponse {
  return {};
}
export const MsgMintBurnTradingBtcResponse = {
  encode(_: MsgMintBurnTradingBtcResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintBurnTradingBtcResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMintBurnTradingBtcResponse();
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
  fromPartial(_: DeepPartial<MsgMintBurnTradingBtcResponse>): MsgMintBurnTradingBtcResponse {
    const message = createBaseMsgMintBurnTradingBtcResponse();
    return message;
  },
  fromAmino(_: MsgMintBurnTradingBtcResponseAmino): MsgMintBurnTradingBtcResponse {
    return {};
  },
  toAmino(_: MsgMintBurnTradingBtcResponse): MsgMintBurnTradingBtcResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgMintBurnTradingBtcResponseAminoMsg): MsgMintBurnTradingBtcResponse {
    return MsgMintBurnTradingBtcResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgMintBurnTradingBtcResponseProtoMsg): MsgMintBurnTradingBtcResponse {
    return MsgMintBurnTradingBtcResponse.decode(message.value);
  },
  toProto(message: MsgMintBurnTradingBtcResponse): Uint8Array {
    return MsgMintBurnTradingBtcResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgMintBurnTradingBtcResponse): MsgMintBurnTradingBtcResponseProtoMsg {
    return {
      typeUrl: "/twilightproject.nyks.zkos.MsgMintBurnTradingBtcResponse",
      value: MsgMintBurnTradingBtcResponse.encode(message).finish()
    };
  }
};