//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgTransferTx, MsgMintBurnTradingBtc } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/twilightproject.nyks.zkos.MsgTransferTx", MsgTransferTx], ["/twilightproject.nyks.zkos.MsgMintBurnTradingBtc", MsgMintBurnTradingBtc]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    transferTx(value: MsgTransferTx) {
      return {
        typeUrl: "/twilightproject.nyks.zkos.MsgTransferTx",
        value: MsgTransferTx.encode(value).finish()
      };
    },
    mintBurnTradingBtc(value: MsgMintBurnTradingBtc) {
      return {
        typeUrl: "/twilightproject.nyks.zkos.MsgMintBurnTradingBtc",
        value: MsgMintBurnTradingBtc.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    transferTx(value: MsgTransferTx) {
      return {
        typeUrl: "/twilightproject.nyks.zkos.MsgTransferTx",
        value
      };
    },
    mintBurnTradingBtc(value: MsgMintBurnTradingBtc) {
      return {
        typeUrl: "/twilightproject.nyks.zkos.MsgMintBurnTradingBtc",
        value
      };
    }
  },
  fromPartial: {
    transferTx(value: MsgTransferTx) {
      return {
        typeUrl: "/twilightproject.nyks.zkos.MsgTransferTx",
        value: MsgTransferTx.fromPartial(value)
      };
    },
    mintBurnTradingBtc(value: MsgMintBurnTradingBtc) {
      return {
        typeUrl: "/twilightproject.nyks.zkos.MsgMintBurnTradingBtc",
        value: MsgMintBurnTradingBtc.fromPartial(value)
      };
    }
  }
};