import { MsgTransferTx, MsgMintBurnTradingBtc } from "./tx";
export const AminoConverter = {
  "/twilightproject.nyks.zkos.MsgTransferTx": {
    aminoType: "/twilightproject.nyks.zkos.MsgTransferTx",
    toAmino: MsgTransferTx.toAmino,
    fromAmino: MsgTransferTx.fromAmino
  },
  "/twilightproject.nyks.zkos.MsgMintBurnTradingBtc": {
    aminoType: "/twilightproject.nyks.zkos.MsgMintBurnTradingBtc",
    toAmino: MsgMintBurnTradingBtc.toAmino,
    fromAmino: MsgMintBurnTradingBtc.fromAmino
  }
};