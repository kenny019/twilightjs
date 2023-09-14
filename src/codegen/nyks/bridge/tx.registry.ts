//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgConfirmBtcDeposit, MsgRegisterBtcDepositAddress, MsgRegisterReserveAddress, MsgRegisterJudge, MsgWithdrawBtcRequest, MsgSweepProposal, MsgWithdrawTxSigned, MsgWithdrawTxFinal, MsgSignRefund, MsgBroadcastTxSweep, MsgSignSweep, MsgProposeRefundHash, MsgConfirmBtcWithdraw } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/twilightproject.nyks.bridge.MsgConfirmBtcDeposit", MsgConfirmBtcDeposit], ["/twilightproject.nyks.bridge.MsgRegisterBtcDepositAddress", MsgRegisterBtcDepositAddress], ["/twilightproject.nyks.bridge.MsgRegisterReserveAddress", MsgRegisterReserveAddress], ["/twilightproject.nyks.bridge.MsgRegisterJudge", MsgRegisterJudge], ["/twilightproject.nyks.bridge.MsgWithdrawBtcRequest", MsgWithdrawBtcRequest], ["/twilightproject.nyks.bridge.MsgSweepProposal", MsgSweepProposal], ["/twilightproject.nyks.bridge.MsgWithdrawTxSigned", MsgWithdrawTxSigned], ["/twilightproject.nyks.bridge.MsgWithdrawTxFinal", MsgWithdrawTxFinal], ["/twilightproject.nyks.bridge.MsgSignRefund", MsgSignRefund], ["/twilightproject.nyks.bridge.MsgBroadcastTxSweep", MsgBroadcastTxSweep], ["/twilightproject.nyks.bridge.MsgSignSweep", MsgSignSweep], ["/twilightproject.nyks.bridge.MsgProposeRefundHash", MsgProposeRefundHash], ["/twilightproject.nyks.bridge.MsgConfirmBtcWithdraw", MsgConfirmBtcWithdraw]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    confirmBtcDeposit(value: MsgConfirmBtcDeposit) {
      return {
        typeUrl: "/twilightproject.nyks.bridge.MsgConfirmBtcDeposit",
        value: MsgConfirmBtcDeposit.encode(value).finish()
      };
    },
    registerBtcDepositAddress(value: MsgRegisterBtcDepositAddress) {
      return {
        typeUrl: "/twilightproject.nyks.bridge.MsgRegisterBtcDepositAddress",
        value: MsgRegisterBtcDepositAddress.encode(value).finish()
      };
    },
    registerReserveAddress(value: MsgRegisterReserveAddress) {
      return {
        typeUrl: "/twilightproject.nyks.bridge.MsgRegisterReserveAddress",
        value: MsgRegisterReserveAddress.encode(value).finish()
      };
    },
    registerJudge(value: MsgRegisterJudge) {
      return {
        typeUrl: "/twilightproject.nyks.bridge.MsgRegisterJudge",
        value: MsgRegisterJudge.encode(value).finish()
      };
    },
    withdrawBtcRequest(value: MsgWithdrawBtcRequest) {
      return {
        typeUrl: "/twilightproject.nyks.bridge.MsgWithdrawBtcRequest",
        value: MsgWithdrawBtcRequest.encode(value).finish()
      };
    },
    sweepProposal(value: MsgSweepProposal) {
      return {
        typeUrl: "/twilightproject.nyks.bridge.MsgSweepProposal",
        value: MsgSweepProposal.encode(value).finish()
      };
    },
    withdrawTxSigned(value: MsgWithdrawTxSigned) {
      return {
        typeUrl: "/twilightproject.nyks.bridge.MsgWithdrawTxSigned",
        value: MsgWithdrawTxSigned.encode(value).finish()
      };
    },
    withdrawTxFinal(value: MsgWithdrawTxFinal) {
      return {
        typeUrl: "/twilightproject.nyks.bridge.MsgWithdrawTxFinal",
        value: MsgWithdrawTxFinal.encode(value).finish()
      };
    },
    signRefund(value: MsgSignRefund) {
      return {
        typeUrl: "/twilightproject.nyks.bridge.MsgSignRefund",
        value: MsgSignRefund.encode(value).finish()
      };
    },
    broadcastTxSweep(value: MsgBroadcastTxSweep) {
      return {
        typeUrl: "/twilightproject.nyks.bridge.MsgBroadcastTxSweep",
        value: MsgBroadcastTxSweep.encode(value).finish()
      };
    },
    signSweep(value: MsgSignSweep) {
      return {
        typeUrl: "/twilightproject.nyks.bridge.MsgSignSweep",
        value: MsgSignSweep.encode(value).finish()
      };
    },
    proposeRefundHash(value: MsgProposeRefundHash) {
      return {
        typeUrl: "/twilightproject.nyks.bridge.MsgProposeRefundHash",
        value: MsgProposeRefundHash.encode(value).finish()
      };
    },
    confirmBtcWithdraw(value: MsgConfirmBtcWithdraw) {
      return {
        typeUrl: "/twilightproject.nyks.bridge.MsgConfirmBtcWithdraw",
        value: MsgConfirmBtcWithdraw.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    confirmBtcDeposit(value: MsgConfirmBtcDeposit) {
      return {
        typeUrl: "/twilightproject.nyks.bridge.MsgConfirmBtcDeposit",
        value
      };
    },
    registerBtcDepositAddress(value: MsgRegisterBtcDepositAddress) {
      return {
        typeUrl: "/twilightproject.nyks.bridge.MsgRegisterBtcDepositAddress",
        value
      };
    },
    registerReserveAddress(value: MsgRegisterReserveAddress) {
      return {
        typeUrl: "/twilightproject.nyks.bridge.MsgRegisterReserveAddress",
        value
      };
    },
    registerJudge(value: MsgRegisterJudge) {
      return {
        typeUrl: "/twilightproject.nyks.bridge.MsgRegisterJudge",
        value
      };
    },
    withdrawBtcRequest(value: MsgWithdrawBtcRequest) {
      return {
        typeUrl: "/twilightproject.nyks.bridge.MsgWithdrawBtcRequest",
        value
      };
    },
    sweepProposal(value: MsgSweepProposal) {
      return {
        typeUrl: "/twilightproject.nyks.bridge.MsgSweepProposal",
        value
      };
    },
    withdrawTxSigned(value: MsgWithdrawTxSigned) {
      return {
        typeUrl: "/twilightproject.nyks.bridge.MsgWithdrawTxSigned",
        value
      };
    },
    withdrawTxFinal(value: MsgWithdrawTxFinal) {
      return {
        typeUrl: "/twilightproject.nyks.bridge.MsgWithdrawTxFinal",
        value
      };
    },
    signRefund(value: MsgSignRefund) {
      return {
        typeUrl: "/twilightproject.nyks.bridge.MsgSignRefund",
        value
      };
    },
    broadcastTxSweep(value: MsgBroadcastTxSweep) {
      return {
        typeUrl: "/twilightproject.nyks.bridge.MsgBroadcastTxSweep",
        value
      };
    },
    signSweep(value: MsgSignSweep) {
      return {
        typeUrl: "/twilightproject.nyks.bridge.MsgSignSweep",
        value
      };
    },
    proposeRefundHash(value: MsgProposeRefundHash) {
      return {
        typeUrl: "/twilightproject.nyks.bridge.MsgProposeRefundHash",
        value
      };
    },
    confirmBtcWithdraw(value: MsgConfirmBtcWithdraw) {
      return {
        typeUrl: "/twilightproject.nyks.bridge.MsgConfirmBtcWithdraw",
        value
      };
    }
  },
  fromPartial: {
    confirmBtcDeposit(value: MsgConfirmBtcDeposit) {
      return {
        typeUrl: "/twilightproject.nyks.bridge.MsgConfirmBtcDeposit",
        value: MsgConfirmBtcDeposit.fromPartial(value)
      };
    },
    registerBtcDepositAddress(value: MsgRegisterBtcDepositAddress) {
      return {
        typeUrl: "/twilightproject.nyks.bridge.MsgRegisterBtcDepositAddress",
        value: MsgRegisterBtcDepositAddress.fromPartial(value)
      };
    },
    registerReserveAddress(value: MsgRegisterReserveAddress) {
      return {
        typeUrl: "/twilightproject.nyks.bridge.MsgRegisterReserveAddress",
        value: MsgRegisterReserveAddress.fromPartial(value)
      };
    },
    registerJudge(value: MsgRegisterJudge) {
      return {
        typeUrl: "/twilightproject.nyks.bridge.MsgRegisterJudge",
        value: MsgRegisterJudge.fromPartial(value)
      };
    },
    withdrawBtcRequest(value: MsgWithdrawBtcRequest) {
      return {
        typeUrl: "/twilightproject.nyks.bridge.MsgWithdrawBtcRequest",
        value: MsgWithdrawBtcRequest.fromPartial(value)
      };
    },
    sweepProposal(value: MsgSweepProposal) {
      return {
        typeUrl: "/twilightproject.nyks.bridge.MsgSweepProposal",
        value: MsgSweepProposal.fromPartial(value)
      };
    },
    withdrawTxSigned(value: MsgWithdrawTxSigned) {
      return {
        typeUrl: "/twilightproject.nyks.bridge.MsgWithdrawTxSigned",
        value: MsgWithdrawTxSigned.fromPartial(value)
      };
    },
    withdrawTxFinal(value: MsgWithdrawTxFinal) {
      return {
        typeUrl: "/twilightproject.nyks.bridge.MsgWithdrawTxFinal",
        value: MsgWithdrawTxFinal.fromPartial(value)
      };
    },
    signRefund(value: MsgSignRefund) {
      return {
        typeUrl: "/twilightproject.nyks.bridge.MsgSignRefund",
        value: MsgSignRefund.fromPartial(value)
      };
    },
    broadcastTxSweep(value: MsgBroadcastTxSweep) {
      return {
        typeUrl: "/twilightproject.nyks.bridge.MsgBroadcastTxSweep",
        value: MsgBroadcastTxSweep.fromPartial(value)
      };
    },
    signSweep(value: MsgSignSweep) {
      return {
        typeUrl: "/twilightproject.nyks.bridge.MsgSignSweep",
        value: MsgSignSweep.fromPartial(value)
      };
    },
    proposeRefundHash(value: MsgProposeRefundHash) {
      return {
        typeUrl: "/twilightproject.nyks.bridge.MsgProposeRefundHash",
        value: MsgProposeRefundHash.fromPartial(value)
      };
    },
    confirmBtcWithdraw(value: MsgConfirmBtcWithdraw) {
      return {
        typeUrl: "/twilightproject.nyks.bridge.MsgConfirmBtcWithdraw",
        value: MsgConfirmBtcWithdraw.fromPartial(value)
      };
    }
  }
};