import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { MsgConfirmBtcDeposit, MsgConfirmBtcDepositResponse, MsgRegisterBtcDepositAddress, MsgRegisterBtcDepositAddressResponse, MsgRegisterReserveAddress, MsgRegisterReserveAddressResponse, MsgRegisterJudge, MsgRegisterJudgeResponse, MsgWithdrawBtcRequest, MsgWithdrawBtcRequestResponse, MsgSweepProposal, MsgSweepProposalResponse, MsgWithdrawTxSigned, MsgWithdrawTxSignedResponse, MsgWithdrawTxFinal, MsgWithdrawTxFinalResponse, MsgSignRefund, MsgSignRefundResponse, MsgBroadcastTxSweep, MsgBroadcastTxSweepResponse, MsgSignSweep, MsgSignSweepResponse, MsgProposeRefundHash, MsgProposeRefundHashResponse, MsgConfirmBtcWithdraw, MsgConfirmBtcWithdrawResponse, MsgUnsignedTxSweep, MsgUnsignedTxSweepResponse, MsgUnsignedTxRefund, MsgUnsignedTxRefundResponse, MsgBroadcastTxRefund, MsgBroadcastTxRefundResponse, MsgProposeSweepAddress, MsgProposeSweepAddressResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  confirmBtcDeposit(request: MsgConfirmBtcDeposit): Promise<MsgConfirmBtcDepositResponse>;
  registerBtcDepositAddress(request: MsgRegisterBtcDepositAddress): Promise<MsgRegisterBtcDepositAddressResponse>;
  registerReserveAddress(request: MsgRegisterReserveAddress): Promise<MsgRegisterReserveAddressResponse>;
  registerJudge(request: MsgRegisterJudge): Promise<MsgRegisterJudgeResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  withdrawBtcRequest(request: MsgWithdrawBtcRequest): Promise<MsgWithdrawBtcRequestResponse>;
  sweepProposal(request: MsgSweepProposal): Promise<MsgSweepProposalResponse>;
  withdrawTxSigned(request: MsgWithdrawTxSigned): Promise<MsgWithdrawTxSignedResponse>;
  withdrawTxFinal(request: MsgWithdrawTxFinal): Promise<MsgWithdrawTxFinalResponse>;
  signRefund(request: MsgSignRefund): Promise<MsgSignRefundResponse>;
  broadcastTxSweep(request: MsgBroadcastTxSweep): Promise<MsgBroadcastTxSweepResponse>;
  signSweep(request: MsgSignSweep): Promise<MsgSignSweepResponse>;
  proposeRefundHash(request: MsgProposeRefundHash): Promise<MsgProposeRefundHashResponse>;
  confirmBtcWithdraw(request: MsgConfirmBtcWithdraw): Promise<MsgConfirmBtcWithdrawResponse>;
  unsignedTxSweep(request: MsgUnsignedTxSweep): Promise<MsgUnsignedTxSweepResponse>;
  unsignedTxRefund(request: MsgUnsignedTxRefund): Promise<MsgUnsignedTxRefundResponse>;
  broadcastTxRefund(request: MsgBroadcastTxRefund): Promise<MsgBroadcastTxRefundResponse>;
  proposeSweepAddress(request: MsgProposeSweepAddress): Promise<MsgProposeSweepAddressResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.confirmBtcDeposit = this.confirmBtcDeposit.bind(this);
    this.registerBtcDepositAddress = this.registerBtcDepositAddress.bind(this);
    this.registerReserveAddress = this.registerReserveAddress.bind(this);
    this.registerJudge = this.registerJudge.bind(this);
    this.withdrawBtcRequest = this.withdrawBtcRequest.bind(this);
    this.sweepProposal = this.sweepProposal.bind(this);
    this.withdrawTxSigned = this.withdrawTxSigned.bind(this);
    this.withdrawTxFinal = this.withdrawTxFinal.bind(this);
    this.signRefund = this.signRefund.bind(this);
    this.broadcastTxSweep = this.broadcastTxSweep.bind(this);
    this.signSweep = this.signSweep.bind(this);
    this.proposeRefundHash = this.proposeRefundHash.bind(this);
    this.confirmBtcWithdraw = this.confirmBtcWithdraw.bind(this);
    this.unsignedTxSweep = this.unsignedTxSweep.bind(this);
    this.unsignedTxRefund = this.unsignedTxRefund.bind(this);
    this.broadcastTxRefund = this.broadcastTxRefund.bind(this);
    this.proposeSweepAddress = this.proposeSweepAddress.bind(this);
  }
  confirmBtcDeposit(request: MsgConfirmBtcDeposit): Promise<MsgConfirmBtcDepositResponse> {
    const data = MsgConfirmBtcDeposit.encode(request).finish();
    const promise = this.rpc.request("twilightproject.nyks.bridge.Msg", "ConfirmBtcDeposit", data);
    return promise.then(data => MsgConfirmBtcDepositResponse.decode(new BinaryReader(data)));
  }
  registerBtcDepositAddress(request: MsgRegisterBtcDepositAddress): Promise<MsgRegisterBtcDepositAddressResponse> {
    const data = MsgRegisterBtcDepositAddress.encode(request).finish();
    const promise = this.rpc.request("twilightproject.nyks.bridge.Msg", "RegisterBtcDepositAddress", data);
    return promise.then(data => MsgRegisterBtcDepositAddressResponse.decode(new BinaryReader(data)));
  }
  registerReserveAddress(request: MsgRegisterReserveAddress): Promise<MsgRegisterReserveAddressResponse> {
    const data = MsgRegisterReserveAddress.encode(request).finish();
    const promise = this.rpc.request("twilightproject.nyks.bridge.Msg", "RegisterReserveAddress", data);
    return promise.then(data => MsgRegisterReserveAddressResponse.decode(new BinaryReader(data)));
  }
  registerJudge(request: MsgRegisterJudge): Promise<MsgRegisterJudgeResponse> {
    const data = MsgRegisterJudge.encode(request).finish();
    const promise = this.rpc.request("twilightproject.nyks.bridge.Msg", "RegisterJudge", data);
    return promise.then(data => MsgRegisterJudgeResponse.decode(new BinaryReader(data)));
  }
  withdrawBtcRequest(request: MsgWithdrawBtcRequest): Promise<MsgWithdrawBtcRequestResponse> {
    const data = MsgWithdrawBtcRequest.encode(request).finish();
    const promise = this.rpc.request("twilightproject.nyks.bridge.Msg", "WithdrawBtcRequest", data);
    return promise.then(data => MsgWithdrawBtcRequestResponse.decode(new BinaryReader(data)));
  }
  sweepProposal(request: MsgSweepProposal): Promise<MsgSweepProposalResponse> {
    const data = MsgSweepProposal.encode(request).finish();
    const promise = this.rpc.request("twilightproject.nyks.bridge.Msg", "SweepProposal", data);
    return promise.then(data => MsgSweepProposalResponse.decode(new BinaryReader(data)));
  }
  withdrawTxSigned(request: MsgWithdrawTxSigned): Promise<MsgWithdrawTxSignedResponse> {
    const data = MsgWithdrawTxSigned.encode(request).finish();
    const promise = this.rpc.request("twilightproject.nyks.bridge.Msg", "WithdrawTxSigned", data);
    return promise.then(data => MsgWithdrawTxSignedResponse.decode(new BinaryReader(data)));
  }
  withdrawTxFinal(request: MsgWithdrawTxFinal): Promise<MsgWithdrawTxFinalResponse> {
    const data = MsgWithdrawTxFinal.encode(request).finish();
    const promise = this.rpc.request("twilightproject.nyks.bridge.Msg", "WithdrawTxFinal", data);
    return promise.then(data => MsgWithdrawTxFinalResponse.decode(new BinaryReader(data)));
  }
  signRefund(request: MsgSignRefund): Promise<MsgSignRefundResponse> {
    const data = MsgSignRefund.encode(request).finish();
    const promise = this.rpc.request("twilightproject.nyks.bridge.Msg", "SignRefund", data);
    return promise.then(data => MsgSignRefundResponse.decode(new BinaryReader(data)));
  }
  broadcastTxSweep(request: MsgBroadcastTxSweep): Promise<MsgBroadcastTxSweepResponse> {
    const data = MsgBroadcastTxSweep.encode(request).finish();
    const promise = this.rpc.request("twilightproject.nyks.bridge.Msg", "BroadcastTxSweep", data);
    return promise.then(data => MsgBroadcastTxSweepResponse.decode(new BinaryReader(data)));
  }
  signSweep(request: MsgSignSweep): Promise<MsgSignSweepResponse> {
    const data = MsgSignSweep.encode(request).finish();
    const promise = this.rpc.request("twilightproject.nyks.bridge.Msg", "SignSweep", data);
    return promise.then(data => MsgSignSweepResponse.decode(new BinaryReader(data)));
  }
  proposeRefundHash(request: MsgProposeRefundHash): Promise<MsgProposeRefundHashResponse> {
    const data = MsgProposeRefundHash.encode(request).finish();
    const promise = this.rpc.request("twilightproject.nyks.bridge.Msg", "ProposeRefundHash", data);
    return promise.then(data => MsgProposeRefundHashResponse.decode(new BinaryReader(data)));
  }
  confirmBtcWithdraw(request: MsgConfirmBtcWithdraw): Promise<MsgConfirmBtcWithdrawResponse> {
    const data = MsgConfirmBtcWithdraw.encode(request).finish();
    const promise = this.rpc.request("twilightproject.nyks.bridge.Msg", "ConfirmBtcWithdraw", data);
    return promise.then(data => MsgConfirmBtcWithdrawResponse.decode(new BinaryReader(data)));
  }
  unsignedTxSweep(request: MsgUnsignedTxSweep): Promise<MsgUnsignedTxSweepResponse> {
    const data = MsgUnsignedTxSweep.encode(request).finish();
    const promise = this.rpc.request("twilightproject.nyks.bridge.Msg", "UnsignedTxSweep", data);
    return promise.then(data => MsgUnsignedTxSweepResponse.decode(new BinaryReader(data)));
  }
  unsignedTxRefund(request: MsgUnsignedTxRefund): Promise<MsgUnsignedTxRefundResponse> {
    const data = MsgUnsignedTxRefund.encode(request).finish();
    const promise = this.rpc.request("twilightproject.nyks.bridge.Msg", "UnsignedTxRefund", data);
    return promise.then(data => MsgUnsignedTxRefundResponse.decode(new BinaryReader(data)));
  }
  broadcastTxRefund(request: MsgBroadcastTxRefund): Promise<MsgBroadcastTxRefundResponse> {
    const data = MsgBroadcastTxRefund.encode(request).finish();
    const promise = this.rpc.request("twilightproject.nyks.bridge.Msg", "BroadcastTxRefund", data);
    return promise.then(data => MsgBroadcastTxRefundResponse.decode(new BinaryReader(data)));
  }
  proposeSweepAddress(request: MsgProposeSweepAddress): Promise<MsgProposeSweepAddressResponse> {
    const data = MsgProposeSweepAddress.encode(request).finish();
    const promise = this.rpc.request("twilightproject.nyks.bridge.Msg", "ProposeSweepAddress", data);
    return promise.then(data => MsgProposeSweepAddressResponse.decode(new BinaryReader(data)));
  }
}