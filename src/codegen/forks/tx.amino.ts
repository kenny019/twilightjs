//@ts-nocheck
import { MsgSetDelegateAddresses, MsgSeenBtcChainTip } from "./tx";
export const AminoConverter = {
  "/twilightproject.nyks.forks.MsgSetDelegateAddresses": {
    aminoType: "/twilightproject.nyks.forks.MsgSetDelegateAddresses",
    toAmino: MsgSetDelegateAddresses.toAmino,
    fromAmino: MsgSetDelegateAddresses.fromAmino
  },
  "/twilightproject.nyks.forks.MsgSeenBtcChainTip": {
    aminoType: "/twilightproject.nyks.forks.MsgSeenBtcChainTip",
    toAmino: MsgSeenBtcChainTip.toAmino,
    fromAmino: MsgSeenBtcChainTip.fromAmino
  }
};