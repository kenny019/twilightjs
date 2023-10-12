import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { MsgTransferTx, MsgTransferTxResponse, MsgMintBurnTradingBtc, MsgMintBurnTradingBtcResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  transferTx(request: MsgTransferTx): Promise<MsgTransferTxResponse>;
  mintBurnTradingBtc(request: MsgMintBurnTradingBtc): Promise<MsgMintBurnTradingBtcResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.transferTx = this.transferTx.bind(this);
    this.mintBurnTradingBtc = this.mintBurnTradingBtc.bind(this);
  }
  transferTx(request: MsgTransferTx): Promise<MsgTransferTxResponse> {
    const data = MsgTransferTx.encode(request).finish();
    const promise = this.rpc.request("twilightproject.nyks.zkos.Msg", "TransferTx", data);
    return promise.then(data => MsgTransferTxResponse.decode(new BinaryReader(data)));
  }
  mintBurnTradingBtc(request: MsgMintBurnTradingBtc): Promise<MsgMintBurnTradingBtcResponse> {
    const data = MsgMintBurnTradingBtc.encode(request).finish();
    const promise = this.rpc.request("twilightproject.nyks.zkos.Msg", "MintBurnTradingBtc", data);
    return promise.then(data => MsgMintBurnTradingBtcResponse.decode(new BinaryReader(data)));
  }
}