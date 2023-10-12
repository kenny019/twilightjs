import { MsgConfirmBtcDeposit, MsgRegisterBtcDepositAddress, MsgRegisterReserveAddress, MsgRegisterJudge, MsgWithdrawBtcRequest, MsgSweepProposal, MsgWithdrawTxSigned, MsgWithdrawTxFinal, MsgSignRefund, MsgBroadcastTxSweep, MsgSignSweep, MsgProposeRefundHash, MsgConfirmBtcWithdraw, MsgUnsignedTxSweep, MsgUnsignedTxRefund, MsgBroadcastTxRefund, MsgProposeSweepAddress } from "./tx";
export const AminoConverter = {
  "/twilightproject.nyks.bridge.MsgConfirmBtcDeposit": {
    aminoType: "/twilightproject.nyks.bridge.MsgConfirmBtcDeposit",
    toAmino: MsgConfirmBtcDeposit.toAmino,
    fromAmino: MsgConfirmBtcDeposit.fromAmino
  },
  "/twilightproject.nyks.bridge.MsgRegisterBtcDepositAddress": {
    aminoType: "/twilightproject.nyks.bridge.MsgRegisterBtcDepositAddress",
    toAmino: MsgRegisterBtcDepositAddress.toAmino,
    fromAmino: MsgRegisterBtcDepositAddress.fromAmino
  },
  "/twilightproject.nyks.bridge.MsgRegisterReserveAddress": {
    aminoType: "/twilightproject.nyks.bridge.MsgRegisterReserveAddress",
    toAmino: MsgRegisterReserveAddress.toAmino,
    fromAmino: MsgRegisterReserveAddress.fromAmino
  },
  "/twilightproject.nyks.bridge.MsgRegisterJudge": {
    aminoType: "/twilightproject.nyks.bridge.MsgRegisterJudge",
    toAmino: MsgRegisterJudge.toAmino,
    fromAmino: MsgRegisterJudge.fromAmino
  },
  "/twilightproject.nyks.bridge.MsgWithdrawBtcRequest": {
    aminoType: "/twilightproject.nyks.bridge.MsgWithdrawBtcRequest",
    toAmino: MsgWithdrawBtcRequest.toAmino,
    fromAmino: MsgWithdrawBtcRequest.fromAmino
  },
  "/twilightproject.nyks.bridge.MsgSweepProposal": {
    aminoType: "/twilightproject.nyks.bridge.MsgSweepProposal",
    toAmino: MsgSweepProposal.toAmino,
    fromAmino: MsgSweepProposal.fromAmino
  },
  "/twilightproject.nyks.bridge.MsgWithdrawTxSigned": {
    aminoType: "/twilightproject.nyks.bridge.MsgWithdrawTxSigned",
    toAmino: MsgWithdrawTxSigned.toAmino,
    fromAmino: MsgWithdrawTxSigned.fromAmino
  },
  "/twilightproject.nyks.bridge.MsgWithdrawTxFinal": {
    aminoType: "/twilightproject.nyks.bridge.MsgWithdrawTxFinal",
    toAmino: MsgWithdrawTxFinal.toAmino,
    fromAmino: MsgWithdrawTxFinal.fromAmino
  },
  "/twilightproject.nyks.bridge.MsgSignRefund": {
    aminoType: "/twilightproject.nyks.bridge.MsgSignRefund",
    toAmino: MsgSignRefund.toAmino,
    fromAmino: MsgSignRefund.fromAmino
  },
  "/twilightproject.nyks.bridge.MsgBroadcastTxSweep": {
    aminoType: "/twilightproject.nyks.bridge.MsgBroadcastTxSweep",
    toAmino: MsgBroadcastTxSweep.toAmino,
    fromAmino: MsgBroadcastTxSweep.fromAmino
  },
  "/twilightproject.nyks.bridge.MsgSignSweep": {
    aminoType: "/twilightproject.nyks.bridge.MsgSignSweep",
    toAmino: MsgSignSweep.toAmino,
    fromAmino: MsgSignSweep.fromAmino
  },
  "/twilightproject.nyks.bridge.MsgProposeRefundHash": {
    aminoType: "/twilightproject.nyks.bridge.MsgProposeRefundHash",
    toAmino: MsgProposeRefundHash.toAmino,
    fromAmino: MsgProposeRefundHash.fromAmino
  },
  "/twilightproject.nyks.bridge.MsgConfirmBtcWithdraw": {
    aminoType: "/twilightproject.nyks.bridge.MsgConfirmBtcWithdraw",
    toAmino: MsgConfirmBtcWithdraw.toAmino,
    fromAmino: MsgConfirmBtcWithdraw.fromAmino
  },
  "/twilightproject.nyks.bridge.MsgUnsignedTxSweep": {
    aminoType: "/twilightproject.nyks.bridge.MsgUnsignedTxSweep",
    toAmino: MsgUnsignedTxSweep.toAmino,
    fromAmino: MsgUnsignedTxSweep.fromAmino
  },
  "/twilightproject.nyks.bridge.MsgUnsignedTxRefund": {
    aminoType: "/twilightproject.nyks.bridge.MsgUnsignedTxRefund",
    toAmino: MsgUnsignedTxRefund.toAmino,
    fromAmino: MsgUnsignedTxRefund.fromAmino
  },
  "/twilightproject.nyks.bridge.MsgBroadcastTxRefund": {
    aminoType: "/twilightproject.nyks.bridge.MsgBroadcastTxRefund",
    toAmino: MsgBroadcastTxRefund.toAmino,
    fromAmino: MsgBroadcastTxRefund.fromAmino
  },
  "/twilightproject.nyks.bridge.MsgProposeSweepAddress": {
    aminoType: "/twilightproject.nyks.bridge.MsgProposeSweepAddress",
    toAmino: MsgProposeSweepAddress.toAmino,
    fromAmino: MsgProposeSweepAddress.fromAmino
  }
};