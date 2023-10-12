import { Long, DeepPartial } from "../helpers";
import * as _m0 from "protobufjs/minimal";
export interface MsgConfirmBtcDeposit {
  reserveAddress: string;
  depositAmount: Long;
  height: Long;
  hash: string;
  twilightDepositAddress: string;
  oracleAddress: string;
}
export interface MsgConfirmBtcDepositProtoMsg {
  typeUrl: "/twilightproject.nyks.bridge.MsgConfirmBtcDeposit";
  value: Uint8Array;
}
export interface MsgConfirmBtcDepositAmino {
  reserveAddress: string;
  depositAmount: string;
  height: string;
  hash: string;
  twilightDepositAddress: string;
  oracleAddress: string;
}
export interface MsgConfirmBtcDepositAminoMsg {
  type: "/twilightproject.nyks.bridge.MsgConfirmBtcDeposit";
  value: MsgConfirmBtcDepositAmino;
}
export interface MsgConfirmBtcDepositSDKType {
  reserveAddress: string;
  depositAmount: Long;
  height: Long;
  hash: string;
  twilightDepositAddress: string;
  oracleAddress: string;
}
export interface MsgConfirmBtcDepositResponse {
  twilightDepositAddress: string;
}
export interface MsgConfirmBtcDepositResponseProtoMsg {
  typeUrl: "/twilightproject.nyks.bridge.MsgConfirmBtcDepositResponse";
  value: Uint8Array;
}
export interface MsgConfirmBtcDepositResponseAmino {
  twilightDepositAddress: string;
}
export interface MsgConfirmBtcDepositResponseAminoMsg {
  type: "/twilightproject.nyks.bridge.MsgConfirmBtcDepositResponse";
  value: MsgConfirmBtcDepositResponseAmino;
}
export interface MsgConfirmBtcDepositResponseSDKType {
  twilightDepositAddress: string;
}
export interface MsgRegisterBtcDepositAddress {
  btcDepositAddress: string;
  btcSatoshiTestAmount: Long;
  twilightStakingAmount: Long;
  twilightAddress: string;
}
export interface MsgRegisterBtcDepositAddressProtoMsg {
  typeUrl: "/twilightproject.nyks.bridge.MsgRegisterBtcDepositAddress";
  value: Uint8Array;
}
export interface MsgRegisterBtcDepositAddressAmino {
  btcDepositAddress: string;
  btcSatoshiTestAmount: string;
  twilightStakingAmount: string;
  twilightAddress: string;
}
export interface MsgRegisterBtcDepositAddressAminoMsg {
  type: "/twilightproject.nyks.bridge.MsgRegisterBtcDepositAddress";
  value: MsgRegisterBtcDepositAddressAmino;
}
export interface MsgRegisterBtcDepositAddressSDKType {
  btcDepositAddress: string;
  btcSatoshiTestAmount: Long;
  twilightStakingAmount: Long;
  twilightAddress: string;
}
export interface MsgRegisterBtcDepositAddressResponse {}
export interface MsgRegisterBtcDepositAddressResponseProtoMsg {
  typeUrl: "/twilightproject.nyks.bridge.MsgRegisterBtcDepositAddressResponse";
  value: Uint8Array;
}
export interface MsgRegisterBtcDepositAddressResponseAmino {}
export interface MsgRegisterBtcDepositAddressResponseAminoMsg {
  type: "/twilightproject.nyks.bridge.MsgRegisterBtcDepositAddressResponse";
  value: MsgRegisterBtcDepositAddressResponseAmino;
}
export interface MsgRegisterBtcDepositAddressResponseSDKType {}
export interface MsgRegisterReserveAddress {
  reserveScript: string;
  reserveAddress: string;
  judgeAddress: string;
}
export interface MsgRegisterReserveAddressProtoMsg {
  typeUrl: "/twilightproject.nyks.bridge.MsgRegisterReserveAddress";
  value: Uint8Array;
}
export interface MsgRegisterReserveAddressAmino {
  reserveScript: string;
  reserveAddress: string;
  judgeAddress: string;
}
export interface MsgRegisterReserveAddressAminoMsg {
  type: "/twilightproject.nyks.bridge.MsgRegisterReserveAddress";
  value: MsgRegisterReserveAddressAmino;
}
export interface MsgRegisterReserveAddressSDKType {
  reserveScript: string;
  reserveAddress: string;
  judgeAddress: string;
}
export interface MsgRegisterReserveAddressResponse {
  reserveId: string;
  reserveAddress: string;
}
export interface MsgRegisterReserveAddressResponseProtoMsg {
  typeUrl: "/twilightproject.nyks.bridge.MsgRegisterReserveAddressResponse";
  value: Uint8Array;
}
export interface MsgRegisterReserveAddressResponseAmino {
  reserveId: string;
  reserveAddress: string;
}
export interface MsgRegisterReserveAddressResponseAminoMsg {
  type: "/twilightproject.nyks.bridge.MsgRegisterReserveAddressResponse";
  value: MsgRegisterReserveAddressResponseAmino;
}
export interface MsgRegisterReserveAddressResponseSDKType {
  reserveId: string;
  reserveAddress: string;
}
export interface MsgRegisterJudge {
  creator: string;
  judgeAddress: string;
  validatorAddress: string;
}
export interface MsgRegisterJudgeProtoMsg {
  typeUrl: "/twilightproject.nyks.bridge.MsgRegisterJudge";
  value: Uint8Array;
}
export interface MsgRegisterJudgeAmino {
  creator: string;
  judgeAddress: string;
  validatorAddress: string;
}
export interface MsgRegisterJudgeAminoMsg {
  type: "/twilightproject.nyks.bridge.MsgRegisterJudge";
  value: MsgRegisterJudgeAmino;
}
export interface MsgRegisterJudgeSDKType {
  creator: string;
  judgeAddress: string;
  validatorAddress: string;
}
export interface MsgRegisterJudgeResponse {}
export interface MsgRegisterJudgeResponseProtoMsg {
  typeUrl: "/twilightproject.nyks.bridge.MsgRegisterJudgeResponse";
  value: Uint8Array;
}
export interface MsgRegisterJudgeResponseAmino {}
export interface MsgRegisterJudgeResponseAminoMsg {
  type: "/twilightproject.nyks.bridge.MsgRegisterJudgeResponse";
  value: MsgRegisterJudgeResponseAmino;
}
export interface MsgRegisterJudgeResponseSDKType {}
/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgWithdrawBtcRequest {
  withdrawAddress: string;
  reserveAddress: string;
  withdrawAmount: Long;
  twilightAddress: string;
}
export interface MsgWithdrawBtcRequestProtoMsg {
  typeUrl: "/twilightproject.nyks.bridge.MsgWithdrawBtcRequest";
  value: Uint8Array;
}
/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgWithdrawBtcRequestAmino {
  withdrawAddress: string;
  reserveAddress: string;
  withdrawAmount: string;
  twilightAddress: string;
}
export interface MsgWithdrawBtcRequestAminoMsg {
  type: "/twilightproject.nyks.bridge.MsgWithdrawBtcRequest";
  value: MsgWithdrawBtcRequestAmino;
}
/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgWithdrawBtcRequestSDKType {
  withdrawAddress: string;
  reserveAddress: string;
  withdrawAmount: Long;
  twilightAddress: string;
}
export interface MsgWithdrawBtcRequestResponse {}
export interface MsgWithdrawBtcRequestResponseProtoMsg {
  typeUrl: "/twilightproject.nyks.bridge.MsgWithdrawBtcRequestResponse";
  value: Uint8Array;
}
export interface MsgWithdrawBtcRequestResponseAmino {}
export interface MsgWithdrawBtcRequestResponseAminoMsg {
  type: "/twilightproject.nyks.bridge.MsgWithdrawBtcRequestResponse";
  value: MsgWithdrawBtcRequestResponseAmino;
}
export interface MsgWithdrawBtcRequestResponseSDKType {}
export interface MsgWithdrawTxSigned {
  creator: string;
  validatorAddress: string;
  btcTxSigned: string;
}
export interface MsgWithdrawTxSignedProtoMsg {
  typeUrl: "/twilightproject.nyks.bridge.MsgWithdrawTxSigned";
  value: Uint8Array;
}
export interface MsgWithdrawTxSignedAmino {
  creator: string;
  validatorAddress: string;
  btcTxSigned: string;
}
export interface MsgWithdrawTxSignedAminoMsg {
  type: "/twilightproject.nyks.bridge.MsgWithdrawTxSigned";
  value: MsgWithdrawTxSignedAmino;
}
export interface MsgWithdrawTxSignedSDKType {
  creator: string;
  validatorAddress: string;
  btcTxSigned: string;
}
export interface MsgWithdrawTxSignedResponse {}
export interface MsgWithdrawTxSignedResponseProtoMsg {
  typeUrl: "/twilightproject.nyks.bridge.MsgWithdrawTxSignedResponse";
  value: Uint8Array;
}
export interface MsgWithdrawTxSignedResponseAmino {}
export interface MsgWithdrawTxSignedResponseAminoMsg {
  type: "/twilightproject.nyks.bridge.MsgWithdrawTxSignedResponse";
  value: MsgWithdrawTxSignedResponseAmino;
}
export interface MsgWithdrawTxSignedResponseSDKType {}
export interface MsgWithdrawTxFinal {
  creator: string;
  judgeAddress: string;
  btcTx: string;
}
export interface MsgWithdrawTxFinalProtoMsg {
  typeUrl: "/twilightproject.nyks.bridge.MsgWithdrawTxFinal";
  value: Uint8Array;
}
export interface MsgWithdrawTxFinalAmino {
  creator: string;
  judgeAddress: string;
  btcTx: string;
}
export interface MsgWithdrawTxFinalAminoMsg {
  type: "/twilightproject.nyks.bridge.MsgWithdrawTxFinal";
  value: MsgWithdrawTxFinalAmino;
}
export interface MsgWithdrawTxFinalSDKType {
  creator: string;
  judgeAddress: string;
  btcTx: string;
}
export interface MsgWithdrawTxFinalResponse {}
export interface MsgWithdrawTxFinalResponseProtoMsg {
  typeUrl: "/twilightproject.nyks.bridge.MsgWithdrawTxFinalResponse";
  value: Uint8Array;
}
export interface MsgWithdrawTxFinalResponseAmino {}
export interface MsgWithdrawTxFinalResponseAminoMsg {
  type: "/twilightproject.nyks.bridge.MsgWithdrawTxFinalResponse";
  value: MsgWithdrawTxFinalResponseAmino;
}
export interface MsgWithdrawTxFinalResponseSDKType {}
export interface MsgProposeRefundHash {
  refundHash: string;
  judgeAddress: string;
}
export interface MsgProposeRefundHashProtoMsg {
  typeUrl: "/twilightproject.nyks.bridge.MsgProposeRefundHash";
  value: Uint8Array;
}
export interface MsgProposeRefundHashAmino {
  refundHash: string;
  judgeAddress: string;
}
export interface MsgProposeRefundHashAminoMsg {
  type: "/twilightproject.nyks.bridge.MsgProposeRefundHash";
  value: MsgProposeRefundHashAmino;
}
export interface MsgProposeRefundHashSDKType {
  refundHash: string;
  judgeAddress: string;
}
export interface MsgProposeRefundHashResponse {}
export interface MsgProposeRefundHashResponseProtoMsg {
  typeUrl: "/twilightproject.nyks.bridge.MsgProposeRefundHashResponse";
  value: Uint8Array;
}
export interface MsgProposeRefundHashResponseAmino {}
export interface MsgProposeRefundHashResponseAminoMsg {
  type: "/twilightproject.nyks.bridge.MsgProposeRefundHashResponse";
  value: MsgProposeRefundHashResponseAmino;
}
export interface MsgProposeRefundHashResponseSDKType {}
export interface MsgConfirmBtcWithdraw {
  txHash: string;
  height: Long;
  hash: string;
  judgeAddress: string;
}
export interface MsgConfirmBtcWithdrawProtoMsg {
  typeUrl: "/twilightproject.nyks.bridge.MsgConfirmBtcWithdraw";
  value: Uint8Array;
}
export interface MsgConfirmBtcWithdrawAmino {
  txHash: string;
  height: string;
  hash: string;
  judgeAddress: string;
}
export interface MsgConfirmBtcWithdrawAminoMsg {
  type: "/twilightproject.nyks.bridge.MsgConfirmBtcWithdraw";
  value: MsgConfirmBtcWithdrawAmino;
}
export interface MsgConfirmBtcWithdrawSDKType {
  txHash: string;
  height: Long;
  hash: string;
  judgeAddress: string;
}
export interface MsgConfirmBtcWithdrawResponse {}
export interface MsgConfirmBtcWithdrawResponseProtoMsg {
  typeUrl: "/twilightproject.nyks.bridge.MsgConfirmBtcWithdrawResponse";
  value: Uint8Array;
}
export interface MsgConfirmBtcWithdrawResponseAmino {}
export interface MsgConfirmBtcWithdrawResponseAminoMsg {
  type: "/twilightproject.nyks.bridge.MsgConfirmBtcWithdrawResponse";
  value: MsgConfirmBtcWithdrawResponseAmino;
}
export interface MsgConfirmBtcWithdrawResponseSDKType {}
/**
 * Sweep messages in order
 * 1. MsgProposeSweepAddress
 */
export interface MsgProposeSweepAddress {
  btcAddress: string;
  btcScript: string;
  reserveId: Long;
  roundId: Long;
  judgeAddress: string;
}
export interface MsgProposeSweepAddressProtoMsg {
  typeUrl: "/twilightproject.nyks.bridge.MsgProposeSweepAddress";
  value: Uint8Array;
}
/**
 * Sweep messages in order
 * 1. MsgProposeSweepAddress
 */
export interface MsgProposeSweepAddressAmino {
  btcAddress: string;
  btcScript: string;
  reserveId: string;
  roundId: string;
  judgeAddress: string;
}
export interface MsgProposeSweepAddressAminoMsg {
  type: "/twilightproject.nyks.bridge.MsgProposeSweepAddress";
  value: MsgProposeSweepAddressAmino;
}
/**
 * Sweep messages in order
 * 1. MsgProposeSweepAddress
 */
export interface MsgProposeSweepAddressSDKType {
  btcAddress: string;
  btcScript: string;
  reserveId: Long;
  roundId: Long;
  judgeAddress: string;
}
export interface MsgProposeSweepAddressResponse {}
export interface MsgProposeSweepAddressResponseProtoMsg {
  typeUrl: "/twilightproject.nyks.bridge.MsgProposeSweepAddressResponse";
  value: Uint8Array;
}
export interface MsgProposeSweepAddressResponseAmino {}
export interface MsgProposeSweepAddressResponseAminoMsg {
  type: "/twilightproject.nyks.bridge.MsgProposeSweepAddressResponse";
  value: MsgProposeSweepAddressResponseAmino;
}
export interface MsgProposeSweepAddressResponseSDKType {}
/** 2. MsgUnsignedTxSweep */
export interface MsgUnsignedTxSweep {
  txId: string;
  btcUnsignedSweepTx: string;
  reserveId: Long;
  roundId: Long;
  judgeAddress: string;
}
export interface MsgUnsignedTxSweepProtoMsg {
  typeUrl: "/twilightproject.nyks.bridge.MsgUnsignedTxSweep";
  value: Uint8Array;
}
/** 2. MsgUnsignedTxSweep */
export interface MsgUnsignedTxSweepAmino {
  txId: string;
  btcUnsignedSweepTx: string;
  reserveId: string;
  roundId: string;
  judgeAddress: string;
}
export interface MsgUnsignedTxSweepAminoMsg {
  type: "/twilightproject.nyks.bridge.MsgUnsignedTxSweep";
  value: MsgUnsignedTxSweepAmino;
}
/** 2. MsgUnsignedTxSweep */
export interface MsgUnsignedTxSweepSDKType {
  txId: string;
  btcUnsignedSweepTx: string;
  reserveId: Long;
  roundId: Long;
  judgeAddress: string;
}
export interface MsgUnsignedTxSweepResponse {}
export interface MsgUnsignedTxSweepResponseProtoMsg {
  typeUrl: "/twilightproject.nyks.bridge.MsgUnsignedTxSweepResponse";
  value: Uint8Array;
}
export interface MsgUnsignedTxSweepResponseAmino {}
export interface MsgUnsignedTxSweepResponseAminoMsg {
  type: "/twilightproject.nyks.bridge.MsgUnsignedTxSweepResponse";
  value: MsgUnsignedTxSweepResponseAmino;
}
export interface MsgUnsignedTxSweepResponseSDKType {}
/** 3. MsgUnsignedTxRefund */
export interface MsgUnsignedTxRefund {
  reserveId: Long;
  roundId: Long;
  btcUnsignedRefundTx: string;
  judgeAddress: string;
}
export interface MsgUnsignedTxRefundProtoMsg {
  typeUrl: "/twilightproject.nyks.bridge.MsgUnsignedTxRefund";
  value: Uint8Array;
}
/** 3. MsgUnsignedTxRefund */
export interface MsgUnsignedTxRefundAmino {
  reserveId: string;
  roundId: string;
  btcUnsignedRefundTx: string;
  judgeAddress: string;
}
export interface MsgUnsignedTxRefundAminoMsg {
  type: "/twilightproject.nyks.bridge.MsgUnsignedTxRefund";
  value: MsgUnsignedTxRefundAmino;
}
/** 3. MsgUnsignedTxRefund */
export interface MsgUnsignedTxRefundSDKType {
  reserveId: Long;
  roundId: Long;
  btcUnsignedRefundTx: string;
  judgeAddress: string;
}
export interface MsgUnsignedTxRefundResponse {}
export interface MsgUnsignedTxRefundResponseProtoMsg {
  typeUrl: "/twilightproject.nyks.bridge.MsgUnsignedTxRefundResponse";
  value: Uint8Array;
}
export interface MsgUnsignedTxRefundResponseAmino {}
export interface MsgUnsignedTxRefundResponseAminoMsg {
  type: "/twilightproject.nyks.bridge.MsgUnsignedTxRefundResponse";
  value: MsgUnsignedTxRefundResponseAmino;
}
export interface MsgUnsignedTxRefundResponseSDKType {}
/** 4. MsgSignRefund */
export interface MsgSignRefund {
  reserveId: Long;
  roundId: Long;
  signerPublicKey: string;
  refundSignature: string;
  btcOracleAddress: string;
}
export interface MsgSignRefundProtoMsg {
  typeUrl: "/twilightproject.nyks.bridge.MsgSignRefund";
  value: Uint8Array;
}
/** 4. MsgSignRefund */
export interface MsgSignRefundAmino {
  reserveId: string;
  roundId: string;
  signerPublicKey: string;
  refundSignature: string;
  btcOracleAddress: string;
}
export interface MsgSignRefundAminoMsg {
  type: "/twilightproject.nyks.bridge.MsgSignRefund";
  value: MsgSignRefundAmino;
}
/** 4. MsgSignRefund */
export interface MsgSignRefundSDKType {
  reserveId: Long;
  roundId: Long;
  signerPublicKey: string;
  refundSignature: string;
  btcOracleAddress: string;
}
export interface MsgSignRefundResponse {}
export interface MsgSignRefundResponseProtoMsg {
  typeUrl: "/twilightproject.nyks.bridge.MsgSignRefundResponse";
  value: Uint8Array;
}
export interface MsgSignRefundResponseAmino {}
export interface MsgSignRefundResponseAminoMsg {
  type: "/twilightproject.nyks.bridge.MsgSignRefundResponse";
  value: MsgSignRefundResponseAmino;
}
export interface MsgSignRefundResponseSDKType {}
/** 5. MsgSignSweep */
export interface MsgSignSweep {
  reserveId: Long;
  roundId: Long;
  signerPublicKey: string;
  sweepSignature: string[];
  btcOracleAddress: string;
}
export interface MsgSignSweepProtoMsg {
  typeUrl: "/twilightproject.nyks.bridge.MsgSignSweep";
  value: Uint8Array;
}
/** 5. MsgSignSweep */
export interface MsgSignSweepAmino {
  reserveId: string;
  roundId: string;
  signerPublicKey: string;
  sweepSignature: string[];
  btcOracleAddress: string;
}
export interface MsgSignSweepAminoMsg {
  type: "/twilightproject.nyks.bridge.MsgSignSweep";
  value: MsgSignSweepAmino;
}
/** 5. MsgSignSweep */
export interface MsgSignSweepSDKType {
  reserveId: Long;
  roundId: Long;
  signerPublicKey: string;
  sweepSignature: string[];
  btcOracleAddress: string;
}
export interface MsgSignSweepResponse {}
export interface MsgSignSweepResponseProtoMsg {
  typeUrl: "/twilightproject.nyks.bridge.MsgSignSweepResponse";
  value: Uint8Array;
}
export interface MsgSignSweepResponseAmino {}
export interface MsgSignSweepResponseAminoMsg {
  type: "/twilightproject.nyks.bridge.MsgSignSweepResponse";
  value: MsgSignSweepResponseAmino;
}
export interface MsgSignSweepResponseSDKType {}
/** 6. MsgBroadcastTxRefund */
export interface MsgBroadcastTxRefund {
  reserveId: Long;
  roundId: Long;
  signedRefundTx: string;
  judgeAddress: string;
}
export interface MsgBroadcastTxRefundProtoMsg {
  typeUrl: "/twilightproject.nyks.bridge.MsgBroadcastTxRefund";
  value: Uint8Array;
}
/** 6. MsgBroadcastTxRefund */
export interface MsgBroadcastTxRefundAmino {
  reserveId: string;
  roundId: string;
  signedRefundTx: string;
  judgeAddress: string;
}
export interface MsgBroadcastTxRefundAminoMsg {
  type: "/twilightproject.nyks.bridge.MsgBroadcastTxRefund";
  value: MsgBroadcastTxRefundAmino;
}
/** 6. MsgBroadcastTxRefund */
export interface MsgBroadcastTxRefundSDKType {
  reserveId: Long;
  roundId: Long;
  signedRefundTx: string;
  judgeAddress: string;
}
export interface MsgBroadcastTxRefundResponse {}
export interface MsgBroadcastTxRefundResponseProtoMsg {
  typeUrl: "/twilightproject.nyks.bridge.MsgBroadcastTxRefundResponse";
  value: Uint8Array;
}
export interface MsgBroadcastTxRefundResponseAmino {}
export interface MsgBroadcastTxRefundResponseAminoMsg {
  type: "/twilightproject.nyks.bridge.MsgBroadcastTxRefundResponse";
  value: MsgBroadcastTxRefundResponseAmino;
}
export interface MsgBroadcastTxRefundResponseSDKType {}
/** 7. MsgBroadcastTxSweep */
export interface MsgBroadcastTxSweep {
  reserveId: Long;
  roundId: Long;
  signedSweepTx: string;
  judgeAddress: string;
}
export interface MsgBroadcastTxSweepProtoMsg {
  typeUrl: "/twilightproject.nyks.bridge.MsgBroadcastTxSweep";
  value: Uint8Array;
}
/** 7. MsgBroadcastTxSweep */
export interface MsgBroadcastTxSweepAmino {
  reserveId: string;
  roundId: string;
  signedSweepTx: string;
  judgeAddress: string;
}
export interface MsgBroadcastTxSweepAminoMsg {
  type: "/twilightproject.nyks.bridge.MsgBroadcastTxSweep";
  value: MsgBroadcastTxSweepAmino;
}
/** 7. MsgBroadcastTxSweep */
export interface MsgBroadcastTxSweepSDKType {
  reserveId: Long;
  roundId: Long;
  signedSweepTx: string;
  judgeAddress: string;
}
export interface MsgBroadcastTxSweepResponse {}
export interface MsgBroadcastTxSweepResponseProtoMsg {
  typeUrl: "/twilightproject.nyks.bridge.MsgBroadcastTxSweepResponse";
  value: Uint8Array;
}
export interface MsgBroadcastTxSweepResponseAmino {}
export interface MsgBroadcastTxSweepResponseAminoMsg {
  type: "/twilightproject.nyks.bridge.MsgBroadcastTxSweepResponse";
  value: MsgBroadcastTxSweepResponseAmino;
}
export interface MsgBroadcastTxSweepResponseSDKType {}
/** 8. MsgSweepProposal */
export interface MsgSweepProposal {
  reserveId: Long;
  newReserveAddress: string;
  judgeAddress: string;
  BtcBlockNumber: Long;
  btcRelayCapacityValue: Long;
  btcTxHash: string;
  UnlockHeight: Long;
  roundId: Long;
  withdrawIdentifiers: string[];
}
export interface MsgSweepProposalProtoMsg {
  typeUrl: "/twilightproject.nyks.bridge.MsgSweepProposal";
  value: Uint8Array;
}
/** 8. MsgSweepProposal */
export interface MsgSweepProposalAmino {
  reserveId: string;
  newReserveAddress: string;
  judgeAddress: string;
  BtcBlockNumber: string;
  btcRelayCapacityValue: string;
  btcTxHash: string;
  UnlockHeight: string;
  roundId: string;
  withdrawIdentifiers: string[];
}
export interface MsgSweepProposalAminoMsg {
  type: "/twilightproject.nyks.bridge.MsgSweepProposal";
  value: MsgSweepProposalAmino;
}
/** 8. MsgSweepProposal */
export interface MsgSweepProposalSDKType {
  reserveId: Long;
  newReserveAddress: string;
  judgeAddress: string;
  BtcBlockNumber: Long;
  btcRelayCapacityValue: Long;
  btcTxHash: string;
  UnlockHeight: Long;
  roundId: Long;
  withdrawIdentifiers: string[];
}
export interface MsgSweepProposalResponse {}
export interface MsgSweepProposalResponseProtoMsg {
  typeUrl: "/twilightproject.nyks.bridge.MsgSweepProposalResponse";
  value: Uint8Array;
}
export interface MsgSweepProposalResponseAmino {}
export interface MsgSweepProposalResponseAminoMsg {
  type: "/twilightproject.nyks.bridge.MsgSweepProposalResponse";
  value: MsgSweepProposalResponseAmino;
}
export interface MsgSweepProposalResponseSDKType {}
function createBaseMsgConfirmBtcDeposit(): MsgConfirmBtcDeposit {
  return {
    reserveAddress: "",
    depositAmount: Long.UZERO,
    height: Long.UZERO,
    hash: "",
    twilightDepositAddress: "",
    oracleAddress: ""
  };
}
export const MsgConfirmBtcDeposit = {
  encode(message: MsgConfirmBtcDeposit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.reserveAddress !== "") {
      writer.uint32(10).string(message.reserveAddress);
    }
    if (!message.depositAmount.isZero()) {
      writer.uint32(16).uint64(message.depositAmount);
    }
    if (!message.height.isZero()) {
      writer.uint32(24).uint64(message.height);
    }
    if (message.hash !== "") {
      writer.uint32(34).string(message.hash);
    }
    if (message.twilightDepositAddress !== "") {
      writer.uint32(42).string(message.twilightDepositAddress);
    }
    if (message.oracleAddress !== "") {
      writer.uint32(58).string(message.oracleAddress);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgConfirmBtcDeposit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConfirmBtcDeposit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reserveAddress = reader.string();
          break;
        case 2:
          message.depositAmount = (reader.uint64() as Long);
          break;
        case 3:
          message.height = (reader.uint64() as Long);
          break;
        case 4:
          message.hash = reader.string();
          break;
        case 5:
          message.twilightDepositAddress = reader.string();
          break;
        case 7:
          message.oracleAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgConfirmBtcDeposit>): MsgConfirmBtcDeposit {
    const message = createBaseMsgConfirmBtcDeposit();
    message.reserveAddress = object.reserveAddress ?? "";
    message.depositAmount = object.depositAmount !== undefined && object.depositAmount !== null ? Long.fromValue(object.depositAmount) : Long.UZERO;
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.UZERO;
    message.hash = object.hash ?? "";
    message.twilightDepositAddress = object.twilightDepositAddress ?? "";
    message.oracleAddress = object.oracleAddress ?? "";
    return message;
  },
  fromAmino(object: MsgConfirmBtcDepositAmino): MsgConfirmBtcDeposit {
    return {
      reserveAddress: object.reserveAddress,
      depositAmount: Long.fromString(object.depositAmount),
      height: Long.fromString(object.height),
      hash: object.hash,
      twilightDepositAddress: object.twilightDepositAddress,
      oracleAddress: object.oracleAddress
    };
  },
  toAmino(message: MsgConfirmBtcDeposit): MsgConfirmBtcDepositAmino {
    const obj: any = {};
    obj.reserveAddress = message.reserveAddress;
    obj.depositAmount = message.depositAmount ? message.depositAmount.toString() : undefined;
    obj.height = message.height ? message.height.toString() : undefined;
    obj.hash = message.hash;
    obj.twilightDepositAddress = message.twilightDepositAddress;
    obj.oracleAddress = message.oracleAddress;
    return obj;
  },
  fromAminoMsg(object: MsgConfirmBtcDepositAminoMsg): MsgConfirmBtcDeposit {
    return MsgConfirmBtcDeposit.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgConfirmBtcDepositProtoMsg): MsgConfirmBtcDeposit {
    return MsgConfirmBtcDeposit.decode(message.value);
  },
  toProto(message: MsgConfirmBtcDeposit): Uint8Array {
    return MsgConfirmBtcDeposit.encode(message).finish();
  },
  toProtoMsg(message: MsgConfirmBtcDeposit): MsgConfirmBtcDepositProtoMsg {
    return {
      typeUrl: "/twilightproject.nyks.bridge.MsgConfirmBtcDeposit",
      value: MsgConfirmBtcDeposit.encode(message).finish()
    };
  }
};
function createBaseMsgConfirmBtcDepositResponse(): MsgConfirmBtcDepositResponse {
  return {
    twilightDepositAddress: ""
  };
}
export const MsgConfirmBtcDepositResponse = {
  encode(message: MsgConfirmBtcDepositResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.twilightDepositAddress !== "") {
      writer.uint32(10).string(message.twilightDepositAddress);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgConfirmBtcDepositResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConfirmBtcDepositResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.twilightDepositAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgConfirmBtcDepositResponse>): MsgConfirmBtcDepositResponse {
    const message = createBaseMsgConfirmBtcDepositResponse();
    message.twilightDepositAddress = object.twilightDepositAddress ?? "";
    return message;
  },
  fromAmino(object: MsgConfirmBtcDepositResponseAmino): MsgConfirmBtcDepositResponse {
    return {
      twilightDepositAddress: object.twilightDepositAddress
    };
  },
  toAmino(message: MsgConfirmBtcDepositResponse): MsgConfirmBtcDepositResponseAmino {
    const obj: any = {};
    obj.twilightDepositAddress = message.twilightDepositAddress;
    return obj;
  },
  fromAminoMsg(object: MsgConfirmBtcDepositResponseAminoMsg): MsgConfirmBtcDepositResponse {
    return MsgConfirmBtcDepositResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgConfirmBtcDepositResponseProtoMsg): MsgConfirmBtcDepositResponse {
    return MsgConfirmBtcDepositResponse.decode(message.value);
  },
  toProto(message: MsgConfirmBtcDepositResponse): Uint8Array {
    return MsgConfirmBtcDepositResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgConfirmBtcDepositResponse): MsgConfirmBtcDepositResponseProtoMsg {
    return {
      typeUrl: "/twilightproject.nyks.bridge.MsgConfirmBtcDepositResponse",
      value: MsgConfirmBtcDepositResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRegisterBtcDepositAddress(): MsgRegisterBtcDepositAddress {
  return {
    btcDepositAddress: "",
    btcSatoshiTestAmount: Long.UZERO,
    twilightStakingAmount: Long.UZERO,
    twilightAddress: ""
  };
}
export const MsgRegisterBtcDepositAddress = {
  encode(message: MsgRegisterBtcDepositAddress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.btcDepositAddress !== "") {
      writer.uint32(10).string(message.btcDepositAddress);
    }
    if (!message.btcSatoshiTestAmount.isZero()) {
      writer.uint32(16).uint64(message.btcSatoshiTestAmount);
    }
    if (!message.twilightStakingAmount.isZero()) {
      writer.uint32(24).uint64(message.twilightStakingAmount);
    }
    if (message.twilightAddress !== "") {
      writer.uint32(34).string(message.twilightAddress);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterBtcDepositAddress {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterBtcDepositAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.btcDepositAddress = reader.string();
          break;
        case 2:
          message.btcSatoshiTestAmount = (reader.uint64() as Long);
          break;
        case 3:
          message.twilightStakingAmount = (reader.uint64() as Long);
          break;
        case 4:
          message.twilightAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgRegisterBtcDepositAddress>): MsgRegisterBtcDepositAddress {
    const message = createBaseMsgRegisterBtcDepositAddress();
    message.btcDepositAddress = object.btcDepositAddress ?? "";
    message.btcSatoshiTestAmount = object.btcSatoshiTestAmount !== undefined && object.btcSatoshiTestAmount !== null ? Long.fromValue(object.btcSatoshiTestAmount) : Long.UZERO;
    message.twilightStakingAmount = object.twilightStakingAmount !== undefined && object.twilightStakingAmount !== null ? Long.fromValue(object.twilightStakingAmount) : Long.UZERO;
    message.twilightAddress = object.twilightAddress ?? "";
    return message;
  },
  fromAmino(object: MsgRegisterBtcDepositAddressAmino): MsgRegisterBtcDepositAddress {
    return {
      btcDepositAddress: object.btcDepositAddress,
      btcSatoshiTestAmount: Long.fromString(object.btcSatoshiTestAmount),
      twilightStakingAmount: Long.fromString(object.twilightStakingAmount),
      twilightAddress: object.twilightAddress
    };
  },
  toAmino(message: MsgRegisterBtcDepositAddress): MsgRegisterBtcDepositAddressAmino {
    const obj: any = {};
    obj.btcDepositAddress = message.btcDepositAddress;
    obj.btcSatoshiTestAmount = message.btcSatoshiTestAmount ? message.btcSatoshiTestAmount.toString() : undefined;
    obj.twilightStakingAmount = message.twilightStakingAmount ? message.twilightStakingAmount.toString() : undefined;
    obj.twilightAddress = message.twilightAddress;
    return obj;
  },
  fromAminoMsg(object: MsgRegisterBtcDepositAddressAminoMsg): MsgRegisterBtcDepositAddress {
    return MsgRegisterBtcDepositAddress.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRegisterBtcDepositAddressProtoMsg): MsgRegisterBtcDepositAddress {
    return MsgRegisterBtcDepositAddress.decode(message.value);
  },
  toProto(message: MsgRegisterBtcDepositAddress): Uint8Array {
    return MsgRegisterBtcDepositAddress.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterBtcDepositAddress): MsgRegisterBtcDepositAddressProtoMsg {
    return {
      typeUrl: "/twilightproject.nyks.bridge.MsgRegisterBtcDepositAddress",
      value: MsgRegisterBtcDepositAddress.encode(message).finish()
    };
  }
};
function createBaseMsgRegisterBtcDepositAddressResponse(): MsgRegisterBtcDepositAddressResponse {
  return {};
}
export const MsgRegisterBtcDepositAddressResponse = {
  encode(_: MsgRegisterBtcDepositAddressResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterBtcDepositAddressResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterBtcDepositAddressResponse();
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
  fromPartial(_: DeepPartial<MsgRegisterBtcDepositAddressResponse>): MsgRegisterBtcDepositAddressResponse {
    const message = createBaseMsgRegisterBtcDepositAddressResponse();
    return message;
  },
  fromAmino(_: MsgRegisterBtcDepositAddressResponseAmino): MsgRegisterBtcDepositAddressResponse {
    return {};
  },
  toAmino(_: MsgRegisterBtcDepositAddressResponse): MsgRegisterBtcDepositAddressResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRegisterBtcDepositAddressResponseAminoMsg): MsgRegisterBtcDepositAddressResponse {
    return MsgRegisterBtcDepositAddressResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRegisterBtcDepositAddressResponseProtoMsg): MsgRegisterBtcDepositAddressResponse {
    return MsgRegisterBtcDepositAddressResponse.decode(message.value);
  },
  toProto(message: MsgRegisterBtcDepositAddressResponse): Uint8Array {
    return MsgRegisterBtcDepositAddressResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterBtcDepositAddressResponse): MsgRegisterBtcDepositAddressResponseProtoMsg {
    return {
      typeUrl: "/twilightproject.nyks.bridge.MsgRegisterBtcDepositAddressResponse",
      value: MsgRegisterBtcDepositAddressResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRegisterReserveAddress(): MsgRegisterReserveAddress {
  return {
    reserveScript: "",
    reserveAddress: "",
    judgeAddress: ""
  };
}
export const MsgRegisterReserveAddress = {
  encode(message: MsgRegisterReserveAddress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.reserveScript !== "") {
      writer.uint32(10).string(message.reserveScript);
    }
    if (message.reserveAddress !== "") {
      writer.uint32(18).string(message.reserveAddress);
    }
    if (message.judgeAddress !== "") {
      writer.uint32(26).string(message.judgeAddress);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterReserveAddress {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterReserveAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reserveScript = reader.string();
          break;
        case 2:
          message.reserveAddress = reader.string();
          break;
        case 3:
          message.judgeAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgRegisterReserveAddress>): MsgRegisterReserveAddress {
    const message = createBaseMsgRegisterReserveAddress();
    message.reserveScript = object.reserveScript ?? "";
    message.reserveAddress = object.reserveAddress ?? "";
    message.judgeAddress = object.judgeAddress ?? "";
    return message;
  },
  fromAmino(object: MsgRegisterReserveAddressAmino): MsgRegisterReserveAddress {
    return {
      reserveScript: object.reserveScript,
      reserveAddress: object.reserveAddress,
      judgeAddress: object.judgeAddress
    };
  },
  toAmino(message: MsgRegisterReserveAddress): MsgRegisterReserveAddressAmino {
    const obj: any = {};
    obj.reserveScript = message.reserveScript;
    obj.reserveAddress = message.reserveAddress;
    obj.judgeAddress = message.judgeAddress;
    return obj;
  },
  fromAminoMsg(object: MsgRegisterReserveAddressAminoMsg): MsgRegisterReserveAddress {
    return MsgRegisterReserveAddress.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRegisterReserveAddressProtoMsg): MsgRegisterReserveAddress {
    return MsgRegisterReserveAddress.decode(message.value);
  },
  toProto(message: MsgRegisterReserveAddress): Uint8Array {
    return MsgRegisterReserveAddress.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterReserveAddress): MsgRegisterReserveAddressProtoMsg {
    return {
      typeUrl: "/twilightproject.nyks.bridge.MsgRegisterReserveAddress",
      value: MsgRegisterReserveAddress.encode(message).finish()
    };
  }
};
function createBaseMsgRegisterReserveAddressResponse(): MsgRegisterReserveAddressResponse {
  return {
    reserveId: "",
    reserveAddress: ""
  };
}
export const MsgRegisterReserveAddressResponse = {
  encode(message: MsgRegisterReserveAddressResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.reserveId !== "") {
      writer.uint32(10).string(message.reserveId);
    }
    if (message.reserveAddress !== "") {
      writer.uint32(18).string(message.reserveAddress);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterReserveAddressResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterReserveAddressResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reserveId = reader.string();
          break;
        case 2:
          message.reserveAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgRegisterReserveAddressResponse>): MsgRegisterReserveAddressResponse {
    const message = createBaseMsgRegisterReserveAddressResponse();
    message.reserveId = object.reserveId ?? "";
    message.reserveAddress = object.reserveAddress ?? "";
    return message;
  },
  fromAmino(object: MsgRegisterReserveAddressResponseAmino): MsgRegisterReserveAddressResponse {
    return {
      reserveId: object.reserveId,
      reserveAddress: object.reserveAddress
    };
  },
  toAmino(message: MsgRegisterReserveAddressResponse): MsgRegisterReserveAddressResponseAmino {
    const obj: any = {};
    obj.reserveId = message.reserveId;
    obj.reserveAddress = message.reserveAddress;
    return obj;
  },
  fromAminoMsg(object: MsgRegisterReserveAddressResponseAminoMsg): MsgRegisterReserveAddressResponse {
    return MsgRegisterReserveAddressResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRegisterReserveAddressResponseProtoMsg): MsgRegisterReserveAddressResponse {
    return MsgRegisterReserveAddressResponse.decode(message.value);
  },
  toProto(message: MsgRegisterReserveAddressResponse): Uint8Array {
    return MsgRegisterReserveAddressResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterReserveAddressResponse): MsgRegisterReserveAddressResponseProtoMsg {
    return {
      typeUrl: "/twilightproject.nyks.bridge.MsgRegisterReserveAddressResponse",
      value: MsgRegisterReserveAddressResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRegisterJudge(): MsgRegisterJudge {
  return {
    creator: "",
    judgeAddress: "",
    validatorAddress: ""
  };
}
export const MsgRegisterJudge = {
  encode(message: MsgRegisterJudge, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.judgeAddress !== "") {
      writer.uint32(18).string(message.judgeAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(26).string(message.validatorAddress);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterJudge {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterJudge();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.judgeAddress = reader.string();
          break;
        case 3:
          message.validatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgRegisterJudge>): MsgRegisterJudge {
    const message = createBaseMsgRegisterJudge();
    message.creator = object.creator ?? "";
    message.judgeAddress = object.judgeAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    return message;
  },
  fromAmino(object: MsgRegisterJudgeAmino): MsgRegisterJudge {
    return {
      creator: object.creator,
      judgeAddress: object.judgeAddress,
      validatorAddress: object.validatorAddress
    };
  },
  toAmino(message: MsgRegisterJudge): MsgRegisterJudgeAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.judgeAddress = message.judgeAddress;
    obj.validatorAddress = message.validatorAddress;
    return obj;
  },
  fromAminoMsg(object: MsgRegisterJudgeAminoMsg): MsgRegisterJudge {
    return MsgRegisterJudge.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRegisterJudgeProtoMsg): MsgRegisterJudge {
    return MsgRegisterJudge.decode(message.value);
  },
  toProto(message: MsgRegisterJudge): Uint8Array {
    return MsgRegisterJudge.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterJudge): MsgRegisterJudgeProtoMsg {
    return {
      typeUrl: "/twilightproject.nyks.bridge.MsgRegisterJudge",
      value: MsgRegisterJudge.encode(message).finish()
    };
  }
};
function createBaseMsgRegisterJudgeResponse(): MsgRegisterJudgeResponse {
  return {};
}
export const MsgRegisterJudgeResponse = {
  encode(_: MsgRegisterJudgeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterJudgeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterJudgeResponse();
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
  fromPartial(_: DeepPartial<MsgRegisterJudgeResponse>): MsgRegisterJudgeResponse {
    const message = createBaseMsgRegisterJudgeResponse();
    return message;
  },
  fromAmino(_: MsgRegisterJudgeResponseAmino): MsgRegisterJudgeResponse {
    return {};
  },
  toAmino(_: MsgRegisterJudgeResponse): MsgRegisterJudgeResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRegisterJudgeResponseAminoMsg): MsgRegisterJudgeResponse {
    return MsgRegisterJudgeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRegisterJudgeResponseProtoMsg): MsgRegisterJudgeResponse {
    return MsgRegisterJudgeResponse.decode(message.value);
  },
  toProto(message: MsgRegisterJudgeResponse): Uint8Array {
    return MsgRegisterJudgeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterJudgeResponse): MsgRegisterJudgeResponseProtoMsg {
    return {
      typeUrl: "/twilightproject.nyks.bridge.MsgRegisterJudgeResponse",
      value: MsgRegisterJudgeResponse.encode(message).finish()
    };
  }
};
function createBaseMsgWithdrawBtcRequest(): MsgWithdrawBtcRequest {
  return {
    withdrawAddress: "",
    reserveAddress: "",
    withdrawAmount: Long.UZERO,
    twilightAddress: ""
  };
}
export const MsgWithdrawBtcRequest = {
  encode(message: MsgWithdrawBtcRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.withdrawAddress !== "") {
      writer.uint32(10).string(message.withdrawAddress);
    }
    if (message.reserveAddress !== "") {
      writer.uint32(18).string(message.reserveAddress);
    }
    if (!message.withdrawAmount.isZero()) {
      writer.uint32(24).uint64(message.withdrawAmount);
    }
    if (message.twilightAddress !== "") {
      writer.uint32(34).string(message.twilightAddress);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawBtcRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawBtcRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.withdrawAddress = reader.string();
          break;
        case 2:
          message.reserveAddress = reader.string();
          break;
        case 3:
          message.withdrawAmount = (reader.uint64() as Long);
          break;
        case 4:
          message.twilightAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgWithdrawBtcRequest>): MsgWithdrawBtcRequest {
    const message = createBaseMsgWithdrawBtcRequest();
    message.withdrawAddress = object.withdrawAddress ?? "";
    message.reserveAddress = object.reserveAddress ?? "";
    message.withdrawAmount = object.withdrawAmount !== undefined && object.withdrawAmount !== null ? Long.fromValue(object.withdrawAmount) : Long.UZERO;
    message.twilightAddress = object.twilightAddress ?? "";
    return message;
  },
  fromAmino(object: MsgWithdrawBtcRequestAmino): MsgWithdrawBtcRequest {
    return {
      withdrawAddress: object.withdrawAddress,
      reserveAddress: object.reserveAddress,
      withdrawAmount: Long.fromString(object.withdrawAmount),
      twilightAddress: object.twilightAddress
    };
  },
  toAmino(message: MsgWithdrawBtcRequest): MsgWithdrawBtcRequestAmino {
    const obj: any = {};
    obj.withdrawAddress = message.withdrawAddress;
    obj.reserveAddress = message.reserveAddress;
    obj.withdrawAmount = message.withdrawAmount ? message.withdrawAmount.toString() : undefined;
    obj.twilightAddress = message.twilightAddress;
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawBtcRequestAminoMsg): MsgWithdrawBtcRequest {
    return MsgWithdrawBtcRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgWithdrawBtcRequestProtoMsg): MsgWithdrawBtcRequest {
    return MsgWithdrawBtcRequest.decode(message.value);
  },
  toProto(message: MsgWithdrawBtcRequest): Uint8Array {
    return MsgWithdrawBtcRequest.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdrawBtcRequest): MsgWithdrawBtcRequestProtoMsg {
    return {
      typeUrl: "/twilightproject.nyks.bridge.MsgWithdrawBtcRequest",
      value: MsgWithdrawBtcRequest.encode(message).finish()
    };
  }
};
function createBaseMsgWithdrawBtcRequestResponse(): MsgWithdrawBtcRequestResponse {
  return {};
}
export const MsgWithdrawBtcRequestResponse = {
  encode(_: MsgWithdrawBtcRequestResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawBtcRequestResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawBtcRequestResponse();
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
  fromPartial(_: DeepPartial<MsgWithdrawBtcRequestResponse>): MsgWithdrawBtcRequestResponse {
    const message = createBaseMsgWithdrawBtcRequestResponse();
    return message;
  },
  fromAmino(_: MsgWithdrawBtcRequestResponseAmino): MsgWithdrawBtcRequestResponse {
    return {};
  },
  toAmino(_: MsgWithdrawBtcRequestResponse): MsgWithdrawBtcRequestResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawBtcRequestResponseAminoMsg): MsgWithdrawBtcRequestResponse {
    return MsgWithdrawBtcRequestResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgWithdrawBtcRequestResponseProtoMsg): MsgWithdrawBtcRequestResponse {
    return MsgWithdrawBtcRequestResponse.decode(message.value);
  },
  toProto(message: MsgWithdrawBtcRequestResponse): Uint8Array {
    return MsgWithdrawBtcRequestResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdrawBtcRequestResponse): MsgWithdrawBtcRequestResponseProtoMsg {
    return {
      typeUrl: "/twilightproject.nyks.bridge.MsgWithdrawBtcRequestResponse",
      value: MsgWithdrawBtcRequestResponse.encode(message).finish()
    };
  }
};
function createBaseMsgWithdrawTxSigned(): MsgWithdrawTxSigned {
  return {
    creator: "",
    validatorAddress: "",
    btcTxSigned: ""
  };
}
export const MsgWithdrawTxSigned = {
  encode(message: MsgWithdrawTxSigned, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    if (message.btcTxSigned !== "") {
      writer.uint32(26).string(message.btcTxSigned);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawTxSigned {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawTxSigned();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.validatorAddress = reader.string();
          break;
        case 3:
          message.btcTxSigned = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgWithdrawTxSigned>): MsgWithdrawTxSigned {
    const message = createBaseMsgWithdrawTxSigned();
    message.creator = object.creator ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    message.btcTxSigned = object.btcTxSigned ?? "";
    return message;
  },
  fromAmino(object: MsgWithdrawTxSignedAmino): MsgWithdrawTxSigned {
    return {
      creator: object.creator,
      validatorAddress: object.validatorAddress,
      btcTxSigned: object.btcTxSigned
    };
  },
  toAmino(message: MsgWithdrawTxSigned): MsgWithdrawTxSignedAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.validatorAddress = message.validatorAddress;
    obj.btcTxSigned = message.btcTxSigned;
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawTxSignedAminoMsg): MsgWithdrawTxSigned {
    return MsgWithdrawTxSigned.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgWithdrawTxSignedProtoMsg): MsgWithdrawTxSigned {
    return MsgWithdrawTxSigned.decode(message.value);
  },
  toProto(message: MsgWithdrawTxSigned): Uint8Array {
    return MsgWithdrawTxSigned.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdrawTxSigned): MsgWithdrawTxSignedProtoMsg {
    return {
      typeUrl: "/twilightproject.nyks.bridge.MsgWithdrawTxSigned",
      value: MsgWithdrawTxSigned.encode(message).finish()
    };
  }
};
function createBaseMsgWithdrawTxSignedResponse(): MsgWithdrawTxSignedResponse {
  return {};
}
export const MsgWithdrawTxSignedResponse = {
  encode(_: MsgWithdrawTxSignedResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawTxSignedResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawTxSignedResponse();
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
  fromPartial(_: DeepPartial<MsgWithdrawTxSignedResponse>): MsgWithdrawTxSignedResponse {
    const message = createBaseMsgWithdrawTxSignedResponse();
    return message;
  },
  fromAmino(_: MsgWithdrawTxSignedResponseAmino): MsgWithdrawTxSignedResponse {
    return {};
  },
  toAmino(_: MsgWithdrawTxSignedResponse): MsgWithdrawTxSignedResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawTxSignedResponseAminoMsg): MsgWithdrawTxSignedResponse {
    return MsgWithdrawTxSignedResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgWithdrawTxSignedResponseProtoMsg): MsgWithdrawTxSignedResponse {
    return MsgWithdrawTxSignedResponse.decode(message.value);
  },
  toProto(message: MsgWithdrawTxSignedResponse): Uint8Array {
    return MsgWithdrawTxSignedResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdrawTxSignedResponse): MsgWithdrawTxSignedResponseProtoMsg {
    return {
      typeUrl: "/twilightproject.nyks.bridge.MsgWithdrawTxSignedResponse",
      value: MsgWithdrawTxSignedResponse.encode(message).finish()
    };
  }
};
function createBaseMsgWithdrawTxFinal(): MsgWithdrawTxFinal {
  return {
    creator: "",
    judgeAddress: "",
    btcTx: ""
  };
}
export const MsgWithdrawTxFinal = {
  encode(message: MsgWithdrawTxFinal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.judgeAddress !== "") {
      writer.uint32(18).string(message.judgeAddress);
    }
    if (message.btcTx !== "") {
      writer.uint32(26).string(message.btcTx);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawTxFinal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawTxFinal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.judgeAddress = reader.string();
          break;
        case 3:
          message.btcTx = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgWithdrawTxFinal>): MsgWithdrawTxFinal {
    const message = createBaseMsgWithdrawTxFinal();
    message.creator = object.creator ?? "";
    message.judgeAddress = object.judgeAddress ?? "";
    message.btcTx = object.btcTx ?? "";
    return message;
  },
  fromAmino(object: MsgWithdrawTxFinalAmino): MsgWithdrawTxFinal {
    return {
      creator: object.creator,
      judgeAddress: object.judgeAddress,
      btcTx: object.btcTx
    };
  },
  toAmino(message: MsgWithdrawTxFinal): MsgWithdrawTxFinalAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.judgeAddress = message.judgeAddress;
    obj.btcTx = message.btcTx;
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawTxFinalAminoMsg): MsgWithdrawTxFinal {
    return MsgWithdrawTxFinal.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgWithdrawTxFinalProtoMsg): MsgWithdrawTxFinal {
    return MsgWithdrawTxFinal.decode(message.value);
  },
  toProto(message: MsgWithdrawTxFinal): Uint8Array {
    return MsgWithdrawTxFinal.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdrawTxFinal): MsgWithdrawTxFinalProtoMsg {
    return {
      typeUrl: "/twilightproject.nyks.bridge.MsgWithdrawTxFinal",
      value: MsgWithdrawTxFinal.encode(message).finish()
    };
  }
};
function createBaseMsgWithdrawTxFinalResponse(): MsgWithdrawTxFinalResponse {
  return {};
}
export const MsgWithdrawTxFinalResponse = {
  encode(_: MsgWithdrawTxFinalResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawTxFinalResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawTxFinalResponse();
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
  fromPartial(_: DeepPartial<MsgWithdrawTxFinalResponse>): MsgWithdrawTxFinalResponse {
    const message = createBaseMsgWithdrawTxFinalResponse();
    return message;
  },
  fromAmino(_: MsgWithdrawTxFinalResponseAmino): MsgWithdrawTxFinalResponse {
    return {};
  },
  toAmino(_: MsgWithdrawTxFinalResponse): MsgWithdrawTxFinalResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawTxFinalResponseAminoMsg): MsgWithdrawTxFinalResponse {
    return MsgWithdrawTxFinalResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgWithdrawTxFinalResponseProtoMsg): MsgWithdrawTxFinalResponse {
    return MsgWithdrawTxFinalResponse.decode(message.value);
  },
  toProto(message: MsgWithdrawTxFinalResponse): Uint8Array {
    return MsgWithdrawTxFinalResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdrawTxFinalResponse): MsgWithdrawTxFinalResponseProtoMsg {
    return {
      typeUrl: "/twilightproject.nyks.bridge.MsgWithdrawTxFinalResponse",
      value: MsgWithdrawTxFinalResponse.encode(message).finish()
    };
  }
};
function createBaseMsgProposeRefundHash(): MsgProposeRefundHash {
  return {
    refundHash: "",
    judgeAddress: ""
  };
}
export const MsgProposeRefundHash = {
  encode(message: MsgProposeRefundHash, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.refundHash !== "") {
      writer.uint32(10).string(message.refundHash);
    }
    if (message.judgeAddress !== "") {
      writer.uint32(18).string(message.judgeAddress);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgProposeRefundHash {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgProposeRefundHash();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.refundHash = reader.string();
          break;
        case 2:
          message.judgeAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgProposeRefundHash>): MsgProposeRefundHash {
    const message = createBaseMsgProposeRefundHash();
    message.refundHash = object.refundHash ?? "";
    message.judgeAddress = object.judgeAddress ?? "";
    return message;
  },
  fromAmino(object: MsgProposeRefundHashAmino): MsgProposeRefundHash {
    return {
      refundHash: object.refundHash,
      judgeAddress: object.judgeAddress
    };
  },
  toAmino(message: MsgProposeRefundHash): MsgProposeRefundHashAmino {
    const obj: any = {};
    obj.refundHash = message.refundHash;
    obj.judgeAddress = message.judgeAddress;
    return obj;
  },
  fromAminoMsg(object: MsgProposeRefundHashAminoMsg): MsgProposeRefundHash {
    return MsgProposeRefundHash.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgProposeRefundHashProtoMsg): MsgProposeRefundHash {
    return MsgProposeRefundHash.decode(message.value);
  },
  toProto(message: MsgProposeRefundHash): Uint8Array {
    return MsgProposeRefundHash.encode(message).finish();
  },
  toProtoMsg(message: MsgProposeRefundHash): MsgProposeRefundHashProtoMsg {
    return {
      typeUrl: "/twilightproject.nyks.bridge.MsgProposeRefundHash",
      value: MsgProposeRefundHash.encode(message).finish()
    };
  }
};
function createBaseMsgProposeRefundHashResponse(): MsgProposeRefundHashResponse {
  return {};
}
export const MsgProposeRefundHashResponse = {
  encode(_: MsgProposeRefundHashResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgProposeRefundHashResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgProposeRefundHashResponse();
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
  fromPartial(_: DeepPartial<MsgProposeRefundHashResponse>): MsgProposeRefundHashResponse {
    const message = createBaseMsgProposeRefundHashResponse();
    return message;
  },
  fromAmino(_: MsgProposeRefundHashResponseAmino): MsgProposeRefundHashResponse {
    return {};
  },
  toAmino(_: MsgProposeRefundHashResponse): MsgProposeRefundHashResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgProposeRefundHashResponseAminoMsg): MsgProposeRefundHashResponse {
    return MsgProposeRefundHashResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgProposeRefundHashResponseProtoMsg): MsgProposeRefundHashResponse {
    return MsgProposeRefundHashResponse.decode(message.value);
  },
  toProto(message: MsgProposeRefundHashResponse): Uint8Array {
    return MsgProposeRefundHashResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgProposeRefundHashResponse): MsgProposeRefundHashResponseProtoMsg {
    return {
      typeUrl: "/twilightproject.nyks.bridge.MsgProposeRefundHashResponse",
      value: MsgProposeRefundHashResponse.encode(message).finish()
    };
  }
};
function createBaseMsgConfirmBtcWithdraw(): MsgConfirmBtcWithdraw {
  return {
    txHash: "",
    height: Long.UZERO,
    hash: "",
    judgeAddress: ""
  };
}
export const MsgConfirmBtcWithdraw = {
  encode(message: MsgConfirmBtcWithdraw, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.txHash !== "") {
      writer.uint32(10).string(message.txHash);
    }
    if (!message.height.isZero()) {
      writer.uint32(16).uint64(message.height);
    }
    if (message.hash !== "") {
      writer.uint32(26).string(message.hash);
    }
    if (message.judgeAddress !== "") {
      writer.uint32(34).string(message.judgeAddress);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgConfirmBtcWithdraw {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConfirmBtcWithdraw();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txHash = reader.string();
          break;
        case 2:
          message.height = (reader.uint64() as Long);
          break;
        case 3:
          message.hash = reader.string();
          break;
        case 4:
          message.judgeAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgConfirmBtcWithdraw>): MsgConfirmBtcWithdraw {
    const message = createBaseMsgConfirmBtcWithdraw();
    message.txHash = object.txHash ?? "";
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.UZERO;
    message.hash = object.hash ?? "";
    message.judgeAddress = object.judgeAddress ?? "";
    return message;
  },
  fromAmino(object: MsgConfirmBtcWithdrawAmino): MsgConfirmBtcWithdraw {
    return {
      txHash: object.txHash,
      height: Long.fromString(object.height),
      hash: object.hash,
      judgeAddress: object.judgeAddress
    };
  },
  toAmino(message: MsgConfirmBtcWithdraw): MsgConfirmBtcWithdrawAmino {
    const obj: any = {};
    obj.txHash = message.txHash;
    obj.height = message.height ? message.height.toString() : undefined;
    obj.hash = message.hash;
    obj.judgeAddress = message.judgeAddress;
    return obj;
  },
  fromAminoMsg(object: MsgConfirmBtcWithdrawAminoMsg): MsgConfirmBtcWithdraw {
    return MsgConfirmBtcWithdraw.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgConfirmBtcWithdrawProtoMsg): MsgConfirmBtcWithdraw {
    return MsgConfirmBtcWithdraw.decode(message.value);
  },
  toProto(message: MsgConfirmBtcWithdraw): Uint8Array {
    return MsgConfirmBtcWithdraw.encode(message).finish();
  },
  toProtoMsg(message: MsgConfirmBtcWithdraw): MsgConfirmBtcWithdrawProtoMsg {
    return {
      typeUrl: "/twilightproject.nyks.bridge.MsgConfirmBtcWithdraw",
      value: MsgConfirmBtcWithdraw.encode(message).finish()
    };
  }
};
function createBaseMsgConfirmBtcWithdrawResponse(): MsgConfirmBtcWithdrawResponse {
  return {};
}
export const MsgConfirmBtcWithdrawResponse = {
  encode(_: MsgConfirmBtcWithdrawResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgConfirmBtcWithdrawResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConfirmBtcWithdrawResponse();
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
  fromPartial(_: DeepPartial<MsgConfirmBtcWithdrawResponse>): MsgConfirmBtcWithdrawResponse {
    const message = createBaseMsgConfirmBtcWithdrawResponse();
    return message;
  },
  fromAmino(_: MsgConfirmBtcWithdrawResponseAmino): MsgConfirmBtcWithdrawResponse {
    return {};
  },
  toAmino(_: MsgConfirmBtcWithdrawResponse): MsgConfirmBtcWithdrawResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgConfirmBtcWithdrawResponseAminoMsg): MsgConfirmBtcWithdrawResponse {
    return MsgConfirmBtcWithdrawResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgConfirmBtcWithdrawResponseProtoMsg): MsgConfirmBtcWithdrawResponse {
    return MsgConfirmBtcWithdrawResponse.decode(message.value);
  },
  toProto(message: MsgConfirmBtcWithdrawResponse): Uint8Array {
    return MsgConfirmBtcWithdrawResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgConfirmBtcWithdrawResponse): MsgConfirmBtcWithdrawResponseProtoMsg {
    return {
      typeUrl: "/twilightproject.nyks.bridge.MsgConfirmBtcWithdrawResponse",
      value: MsgConfirmBtcWithdrawResponse.encode(message).finish()
    };
  }
};
function createBaseMsgProposeSweepAddress(): MsgProposeSweepAddress {
  return {
    btcAddress: "",
    btcScript: "",
    reserveId: Long.UZERO,
    roundId: Long.UZERO,
    judgeAddress: ""
  };
}
export const MsgProposeSweepAddress = {
  encode(message: MsgProposeSweepAddress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.btcAddress !== "") {
      writer.uint32(10).string(message.btcAddress);
    }
    if (message.btcScript !== "") {
      writer.uint32(18).string(message.btcScript);
    }
    if (!message.reserveId.isZero()) {
      writer.uint32(24).uint64(message.reserveId);
    }
    if (!message.roundId.isZero()) {
      writer.uint32(32).uint64(message.roundId);
    }
    if (message.judgeAddress !== "") {
      writer.uint32(42).string(message.judgeAddress);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgProposeSweepAddress {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgProposeSweepAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.btcAddress = reader.string();
          break;
        case 2:
          message.btcScript = reader.string();
          break;
        case 3:
          message.reserveId = (reader.uint64() as Long);
          break;
        case 4:
          message.roundId = (reader.uint64() as Long);
          break;
        case 5:
          message.judgeAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgProposeSweepAddress>): MsgProposeSweepAddress {
    const message = createBaseMsgProposeSweepAddress();
    message.btcAddress = object.btcAddress ?? "";
    message.btcScript = object.btcScript ?? "";
    message.reserveId = object.reserveId !== undefined && object.reserveId !== null ? Long.fromValue(object.reserveId) : Long.UZERO;
    message.roundId = object.roundId !== undefined && object.roundId !== null ? Long.fromValue(object.roundId) : Long.UZERO;
    message.judgeAddress = object.judgeAddress ?? "";
    return message;
  },
  fromAmino(object: MsgProposeSweepAddressAmino): MsgProposeSweepAddress {
    return {
      btcAddress: object.btcAddress,
      btcScript: object.btcScript,
      reserveId: Long.fromString(object.reserveId),
      roundId: Long.fromString(object.roundId),
      judgeAddress: object.judgeAddress
    };
  },
  toAmino(message: MsgProposeSweepAddress): MsgProposeSweepAddressAmino {
    const obj: any = {};
    obj.btcAddress = message.btcAddress;
    obj.btcScript = message.btcScript;
    obj.reserveId = message.reserveId ? message.reserveId.toString() : undefined;
    obj.roundId = message.roundId ? message.roundId.toString() : undefined;
    obj.judgeAddress = message.judgeAddress;
    return obj;
  },
  fromAminoMsg(object: MsgProposeSweepAddressAminoMsg): MsgProposeSweepAddress {
    return MsgProposeSweepAddress.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgProposeSweepAddressProtoMsg): MsgProposeSweepAddress {
    return MsgProposeSweepAddress.decode(message.value);
  },
  toProto(message: MsgProposeSweepAddress): Uint8Array {
    return MsgProposeSweepAddress.encode(message).finish();
  },
  toProtoMsg(message: MsgProposeSweepAddress): MsgProposeSweepAddressProtoMsg {
    return {
      typeUrl: "/twilightproject.nyks.bridge.MsgProposeSweepAddress",
      value: MsgProposeSweepAddress.encode(message).finish()
    };
  }
};
function createBaseMsgProposeSweepAddressResponse(): MsgProposeSweepAddressResponse {
  return {};
}
export const MsgProposeSweepAddressResponse = {
  encode(_: MsgProposeSweepAddressResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgProposeSweepAddressResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgProposeSweepAddressResponse();
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
  fromPartial(_: DeepPartial<MsgProposeSweepAddressResponse>): MsgProposeSweepAddressResponse {
    const message = createBaseMsgProposeSweepAddressResponse();
    return message;
  },
  fromAmino(_: MsgProposeSweepAddressResponseAmino): MsgProposeSweepAddressResponse {
    return {};
  },
  toAmino(_: MsgProposeSweepAddressResponse): MsgProposeSweepAddressResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgProposeSweepAddressResponseAminoMsg): MsgProposeSweepAddressResponse {
    return MsgProposeSweepAddressResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgProposeSweepAddressResponseProtoMsg): MsgProposeSweepAddressResponse {
    return MsgProposeSweepAddressResponse.decode(message.value);
  },
  toProto(message: MsgProposeSweepAddressResponse): Uint8Array {
    return MsgProposeSweepAddressResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgProposeSweepAddressResponse): MsgProposeSweepAddressResponseProtoMsg {
    return {
      typeUrl: "/twilightproject.nyks.bridge.MsgProposeSweepAddressResponse",
      value: MsgProposeSweepAddressResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUnsignedTxSweep(): MsgUnsignedTxSweep {
  return {
    txId: "",
    btcUnsignedSweepTx: "",
    reserveId: Long.UZERO,
    roundId: Long.UZERO,
    judgeAddress: ""
  };
}
export const MsgUnsignedTxSweep = {
  encode(message: MsgUnsignedTxSweep, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.txId !== "") {
      writer.uint32(10).string(message.txId);
    }
    if (message.btcUnsignedSweepTx !== "") {
      writer.uint32(18).string(message.btcUnsignedSweepTx);
    }
    if (!message.reserveId.isZero()) {
      writer.uint32(24).uint64(message.reserveId);
    }
    if (!message.roundId.isZero()) {
      writer.uint32(32).uint64(message.roundId);
    }
    if (message.judgeAddress !== "") {
      writer.uint32(42).string(message.judgeAddress);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnsignedTxSweep {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnsignedTxSweep();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txId = reader.string();
          break;
        case 2:
          message.btcUnsignedSweepTx = reader.string();
          break;
        case 3:
          message.reserveId = (reader.uint64() as Long);
          break;
        case 4:
          message.roundId = (reader.uint64() as Long);
          break;
        case 5:
          message.judgeAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgUnsignedTxSweep>): MsgUnsignedTxSweep {
    const message = createBaseMsgUnsignedTxSweep();
    message.txId = object.txId ?? "";
    message.btcUnsignedSweepTx = object.btcUnsignedSweepTx ?? "";
    message.reserveId = object.reserveId !== undefined && object.reserveId !== null ? Long.fromValue(object.reserveId) : Long.UZERO;
    message.roundId = object.roundId !== undefined && object.roundId !== null ? Long.fromValue(object.roundId) : Long.UZERO;
    message.judgeAddress = object.judgeAddress ?? "";
    return message;
  },
  fromAmino(object: MsgUnsignedTxSweepAmino): MsgUnsignedTxSweep {
    return {
      txId: object.txId,
      btcUnsignedSweepTx: object.btcUnsignedSweepTx,
      reserveId: Long.fromString(object.reserveId),
      roundId: Long.fromString(object.roundId),
      judgeAddress: object.judgeAddress
    };
  },
  toAmino(message: MsgUnsignedTxSweep): MsgUnsignedTxSweepAmino {
    const obj: any = {};
    obj.txId = message.txId;
    obj.btcUnsignedSweepTx = message.btcUnsignedSweepTx;
    obj.reserveId = message.reserveId ? message.reserveId.toString() : undefined;
    obj.roundId = message.roundId ? message.roundId.toString() : undefined;
    obj.judgeAddress = message.judgeAddress;
    return obj;
  },
  fromAminoMsg(object: MsgUnsignedTxSweepAminoMsg): MsgUnsignedTxSweep {
    return MsgUnsignedTxSweep.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUnsignedTxSweepProtoMsg): MsgUnsignedTxSweep {
    return MsgUnsignedTxSweep.decode(message.value);
  },
  toProto(message: MsgUnsignedTxSweep): Uint8Array {
    return MsgUnsignedTxSweep.encode(message).finish();
  },
  toProtoMsg(message: MsgUnsignedTxSweep): MsgUnsignedTxSweepProtoMsg {
    return {
      typeUrl: "/twilightproject.nyks.bridge.MsgUnsignedTxSweep",
      value: MsgUnsignedTxSweep.encode(message).finish()
    };
  }
};
function createBaseMsgUnsignedTxSweepResponse(): MsgUnsignedTxSweepResponse {
  return {};
}
export const MsgUnsignedTxSweepResponse = {
  encode(_: MsgUnsignedTxSweepResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnsignedTxSweepResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnsignedTxSweepResponse();
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
  fromPartial(_: DeepPartial<MsgUnsignedTxSweepResponse>): MsgUnsignedTxSweepResponse {
    const message = createBaseMsgUnsignedTxSweepResponse();
    return message;
  },
  fromAmino(_: MsgUnsignedTxSweepResponseAmino): MsgUnsignedTxSweepResponse {
    return {};
  },
  toAmino(_: MsgUnsignedTxSweepResponse): MsgUnsignedTxSweepResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUnsignedTxSweepResponseAminoMsg): MsgUnsignedTxSweepResponse {
    return MsgUnsignedTxSweepResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUnsignedTxSweepResponseProtoMsg): MsgUnsignedTxSweepResponse {
    return MsgUnsignedTxSweepResponse.decode(message.value);
  },
  toProto(message: MsgUnsignedTxSweepResponse): Uint8Array {
    return MsgUnsignedTxSweepResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUnsignedTxSweepResponse): MsgUnsignedTxSweepResponseProtoMsg {
    return {
      typeUrl: "/twilightproject.nyks.bridge.MsgUnsignedTxSweepResponse",
      value: MsgUnsignedTxSweepResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUnsignedTxRefund(): MsgUnsignedTxRefund {
  return {
    reserveId: Long.UZERO,
    roundId: Long.UZERO,
    btcUnsignedRefundTx: "",
    judgeAddress: ""
  };
}
export const MsgUnsignedTxRefund = {
  encode(message: MsgUnsignedTxRefund, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.reserveId.isZero()) {
      writer.uint32(8).uint64(message.reserveId);
    }
    if (!message.roundId.isZero()) {
      writer.uint32(16).uint64(message.roundId);
    }
    if (message.btcUnsignedRefundTx !== "") {
      writer.uint32(26).string(message.btcUnsignedRefundTx);
    }
    if (message.judgeAddress !== "") {
      writer.uint32(34).string(message.judgeAddress);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnsignedTxRefund {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnsignedTxRefund();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reserveId = (reader.uint64() as Long);
          break;
        case 2:
          message.roundId = (reader.uint64() as Long);
          break;
        case 3:
          message.btcUnsignedRefundTx = reader.string();
          break;
        case 4:
          message.judgeAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgUnsignedTxRefund>): MsgUnsignedTxRefund {
    const message = createBaseMsgUnsignedTxRefund();
    message.reserveId = object.reserveId !== undefined && object.reserveId !== null ? Long.fromValue(object.reserveId) : Long.UZERO;
    message.roundId = object.roundId !== undefined && object.roundId !== null ? Long.fromValue(object.roundId) : Long.UZERO;
    message.btcUnsignedRefundTx = object.btcUnsignedRefundTx ?? "";
    message.judgeAddress = object.judgeAddress ?? "";
    return message;
  },
  fromAmino(object: MsgUnsignedTxRefundAmino): MsgUnsignedTxRefund {
    return {
      reserveId: Long.fromString(object.reserveId),
      roundId: Long.fromString(object.roundId),
      btcUnsignedRefundTx: object.btcUnsignedRefundTx,
      judgeAddress: object.judgeAddress
    };
  },
  toAmino(message: MsgUnsignedTxRefund): MsgUnsignedTxRefundAmino {
    const obj: any = {};
    obj.reserveId = message.reserveId ? message.reserveId.toString() : undefined;
    obj.roundId = message.roundId ? message.roundId.toString() : undefined;
    obj.btcUnsignedRefundTx = message.btcUnsignedRefundTx;
    obj.judgeAddress = message.judgeAddress;
    return obj;
  },
  fromAminoMsg(object: MsgUnsignedTxRefundAminoMsg): MsgUnsignedTxRefund {
    return MsgUnsignedTxRefund.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUnsignedTxRefundProtoMsg): MsgUnsignedTxRefund {
    return MsgUnsignedTxRefund.decode(message.value);
  },
  toProto(message: MsgUnsignedTxRefund): Uint8Array {
    return MsgUnsignedTxRefund.encode(message).finish();
  },
  toProtoMsg(message: MsgUnsignedTxRefund): MsgUnsignedTxRefundProtoMsg {
    return {
      typeUrl: "/twilightproject.nyks.bridge.MsgUnsignedTxRefund",
      value: MsgUnsignedTxRefund.encode(message).finish()
    };
  }
};
function createBaseMsgUnsignedTxRefundResponse(): MsgUnsignedTxRefundResponse {
  return {};
}
export const MsgUnsignedTxRefundResponse = {
  encode(_: MsgUnsignedTxRefundResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnsignedTxRefundResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnsignedTxRefundResponse();
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
  fromPartial(_: DeepPartial<MsgUnsignedTxRefundResponse>): MsgUnsignedTxRefundResponse {
    const message = createBaseMsgUnsignedTxRefundResponse();
    return message;
  },
  fromAmino(_: MsgUnsignedTxRefundResponseAmino): MsgUnsignedTxRefundResponse {
    return {};
  },
  toAmino(_: MsgUnsignedTxRefundResponse): MsgUnsignedTxRefundResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUnsignedTxRefundResponseAminoMsg): MsgUnsignedTxRefundResponse {
    return MsgUnsignedTxRefundResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUnsignedTxRefundResponseProtoMsg): MsgUnsignedTxRefundResponse {
    return MsgUnsignedTxRefundResponse.decode(message.value);
  },
  toProto(message: MsgUnsignedTxRefundResponse): Uint8Array {
    return MsgUnsignedTxRefundResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUnsignedTxRefundResponse): MsgUnsignedTxRefundResponseProtoMsg {
    return {
      typeUrl: "/twilightproject.nyks.bridge.MsgUnsignedTxRefundResponse",
      value: MsgUnsignedTxRefundResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSignRefund(): MsgSignRefund {
  return {
    reserveId: Long.UZERO,
    roundId: Long.UZERO,
    signerPublicKey: "",
    refundSignature: "",
    btcOracleAddress: ""
  };
}
export const MsgSignRefund = {
  encode(message: MsgSignRefund, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.reserveId.isZero()) {
      writer.uint32(8).uint64(message.reserveId);
    }
    if (!message.roundId.isZero()) {
      writer.uint32(16).uint64(message.roundId);
    }
    if (message.signerPublicKey !== "") {
      writer.uint32(26).string(message.signerPublicKey);
    }
    if (message.refundSignature !== "") {
      writer.uint32(34).string(message.refundSignature);
    }
    if (message.btcOracleAddress !== "") {
      writer.uint32(42).string(message.btcOracleAddress);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSignRefund {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSignRefund();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reserveId = (reader.uint64() as Long);
          break;
        case 2:
          message.roundId = (reader.uint64() as Long);
          break;
        case 3:
          message.signerPublicKey = reader.string();
          break;
        case 4:
          message.refundSignature = reader.string();
          break;
        case 5:
          message.btcOracleAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgSignRefund>): MsgSignRefund {
    const message = createBaseMsgSignRefund();
    message.reserveId = object.reserveId !== undefined && object.reserveId !== null ? Long.fromValue(object.reserveId) : Long.UZERO;
    message.roundId = object.roundId !== undefined && object.roundId !== null ? Long.fromValue(object.roundId) : Long.UZERO;
    message.signerPublicKey = object.signerPublicKey ?? "";
    message.refundSignature = object.refundSignature ?? "";
    message.btcOracleAddress = object.btcOracleAddress ?? "";
    return message;
  },
  fromAmino(object: MsgSignRefundAmino): MsgSignRefund {
    return {
      reserveId: Long.fromString(object.reserveId),
      roundId: Long.fromString(object.roundId),
      signerPublicKey: object.signerPublicKey,
      refundSignature: object.refundSignature,
      btcOracleAddress: object.btcOracleAddress
    };
  },
  toAmino(message: MsgSignRefund): MsgSignRefundAmino {
    const obj: any = {};
    obj.reserveId = message.reserveId ? message.reserveId.toString() : undefined;
    obj.roundId = message.roundId ? message.roundId.toString() : undefined;
    obj.signerPublicKey = message.signerPublicKey;
    obj.refundSignature = message.refundSignature;
    obj.btcOracleAddress = message.btcOracleAddress;
    return obj;
  },
  fromAminoMsg(object: MsgSignRefundAminoMsg): MsgSignRefund {
    return MsgSignRefund.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSignRefundProtoMsg): MsgSignRefund {
    return MsgSignRefund.decode(message.value);
  },
  toProto(message: MsgSignRefund): Uint8Array {
    return MsgSignRefund.encode(message).finish();
  },
  toProtoMsg(message: MsgSignRefund): MsgSignRefundProtoMsg {
    return {
      typeUrl: "/twilightproject.nyks.bridge.MsgSignRefund",
      value: MsgSignRefund.encode(message).finish()
    };
  }
};
function createBaseMsgSignRefundResponse(): MsgSignRefundResponse {
  return {};
}
export const MsgSignRefundResponse = {
  encode(_: MsgSignRefundResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSignRefundResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSignRefundResponse();
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
  fromPartial(_: DeepPartial<MsgSignRefundResponse>): MsgSignRefundResponse {
    const message = createBaseMsgSignRefundResponse();
    return message;
  },
  fromAmino(_: MsgSignRefundResponseAmino): MsgSignRefundResponse {
    return {};
  },
  toAmino(_: MsgSignRefundResponse): MsgSignRefundResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSignRefundResponseAminoMsg): MsgSignRefundResponse {
    return MsgSignRefundResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSignRefundResponseProtoMsg): MsgSignRefundResponse {
    return MsgSignRefundResponse.decode(message.value);
  },
  toProto(message: MsgSignRefundResponse): Uint8Array {
    return MsgSignRefundResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSignRefundResponse): MsgSignRefundResponseProtoMsg {
    return {
      typeUrl: "/twilightproject.nyks.bridge.MsgSignRefundResponse",
      value: MsgSignRefundResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSignSweep(): MsgSignSweep {
  return {
    reserveId: Long.UZERO,
    roundId: Long.UZERO,
    signerPublicKey: "",
    sweepSignature: [],
    btcOracleAddress: ""
  };
}
export const MsgSignSweep = {
  encode(message: MsgSignSweep, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.reserveId.isZero()) {
      writer.uint32(8).uint64(message.reserveId);
    }
    if (!message.roundId.isZero()) {
      writer.uint32(16).uint64(message.roundId);
    }
    if (message.signerPublicKey !== "") {
      writer.uint32(26).string(message.signerPublicKey);
    }
    for (const v of message.sweepSignature) {
      writer.uint32(34).string(v!);
    }
    if (message.btcOracleAddress !== "") {
      writer.uint32(42).string(message.btcOracleAddress);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSignSweep {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSignSweep();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reserveId = (reader.uint64() as Long);
          break;
        case 2:
          message.roundId = (reader.uint64() as Long);
          break;
        case 3:
          message.signerPublicKey = reader.string();
          break;
        case 4:
          message.sweepSignature.push(reader.string());
          break;
        case 5:
          message.btcOracleAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgSignSweep>): MsgSignSweep {
    const message = createBaseMsgSignSweep();
    message.reserveId = object.reserveId !== undefined && object.reserveId !== null ? Long.fromValue(object.reserveId) : Long.UZERO;
    message.roundId = object.roundId !== undefined && object.roundId !== null ? Long.fromValue(object.roundId) : Long.UZERO;
    message.signerPublicKey = object.signerPublicKey ?? "";
    message.sweepSignature = object.sweepSignature?.map(e => e) || [];
    message.btcOracleAddress = object.btcOracleAddress ?? "";
    return message;
  },
  fromAmino(object: MsgSignSweepAmino): MsgSignSweep {
    return {
      reserveId: Long.fromString(object.reserveId),
      roundId: Long.fromString(object.roundId),
      signerPublicKey: object.signerPublicKey,
      sweepSignature: Array.isArray(object?.sweepSignature) ? object.sweepSignature.map((e: any) => e) : [],
      btcOracleAddress: object.btcOracleAddress
    };
  },
  toAmino(message: MsgSignSweep): MsgSignSweepAmino {
    const obj: any = {};
    obj.reserveId = message.reserveId ? message.reserveId.toString() : undefined;
    obj.roundId = message.roundId ? message.roundId.toString() : undefined;
    obj.signerPublicKey = message.signerPublicKey;
    if (message.sweepSignature) {
      obj.sweepSignature = message.sweepSignature.map(e => e);
    } else {
      obj.sweepSignature = [];
    }
    obj.btcOracleAddress = message.btcOracleAddress;
    return obj;
  },
  fromAminoMsg(object: MsgSignSweepAminoMsg): MsgSignSweep {
    return MsgSignSweep.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSignSweepProtoMsg): MsgSignSweep {
    return MsgSignSweep.decode(message.value);
  },
  toProto(message: MsgSignSweep): Uint8Array {
    return MsgSignSweep.encode(message).finish();
  },
  toProtoMsg(message: MsgSignSweep): MsgSignSweepProtoMsg {
    return {
      typeUrl: "/twilightproject.nyks.bridge.MsgSignSweep",
      value: MsgSignSweep.encode(message).finish()
    };
  }
};
function createBaseMsgSignSweepResponse(): MsgSignSweepResponse {
  return {};
}
export const MsgSignSweepResponse = {
  encode(_: MsgSignSweepResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSignSweepResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSignSweepResponse();
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
  fromPartial(_: DeepPartial<MsgSignSweepResponse>): MsgSignSweepResponse {
    const message = createBaseMsgSignSweepResponse();
    return message;
  },
  fromAmino(_: MsgSignSweepResponseAmino): MsgSignSweepResponse {
    return {};
  },
  toAmino(_: MsgSignSweepResponse): MsgSignSweepResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSignSweepResponseAminoMsg): MsgSignSweepResponse {
    return MsgSignSweepResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSignSweepResponseProtoMsg): MsgSignSweepResponse {
    return MsgSignSweepResponse.decode(message.value);
  },
  toProto(message: MsgSignSweepResponse): Uint8Array {
    return MsgSignSweepResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSignSweepResponse): MsgSignSweepResponseProtoMsg {
    return {
      typeUrl: "/twilightproject.nyks.bridge.MsgSignSweepResponse",
      value: MsgSignSweepResponse.encode(message).finish()
    };
  }
};
function createBaseMsgBroadcastTxRefund(): MsgBroadcastTxRefund {
  return {
    reserveId: Long.UZERO,
    roundId: Long.UZERO,
    signedRefundTx: "",
    judgeAddress: ""
  };
}
export const MsgBroadcastTxRefund = {
  encode(message: MsgBroadcastTxRefund, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.reserveId.isZero()) {
      writer.uint32(8).uint64(message.reserveId);
    }
    if (!message.roundId.isZero()) {
      writer.uint32(16).uint64(message.roundId);
    }
    if (message.signedRefundTx !== "") {
      writer.uint32(26).string(message.signedRefundTx);
    }
    if (message.judgeAddress !== "") {
      writer.uint32(34).string(message.judgeAddress);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBroadcastTxRefund {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBroadcastTxRefund();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reserveId = (reader.uint64() as Long);
          break;
        case 2:
          message.roundId = (reader.uint64() as Long);
          break;
        case 3:
          message.signedRefundTx = reader.string();
          break;
        case 4:
          message.judgeAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgBroadcastTxRefund>): MsgBroadcastTxRefund {
    const message = createBaseMsgBroadcastTxRefund();
    message.reserveId = object.reserveId !== undefined && object.reserveId !== null ? Long.fromValue(object.reserveId) : Long.UZERO;
    message.roundId = object.roundId !== undefined && object.roundId !== null ? Long.fromValue(object.roundId) : Long.UZERO;
    message.signedRefundTx = object.signedRefundTx ?? "";
    message.judgeAddress = object.judgeAddress ?? "";
    return message;
  },
  fromAmino(object: MsgBroadcastTxRefundAmino): MsgBroadcastTxRefund {
    return {
      reserveId: Long.fromString(object.reserveId),
      roundId: Long.fromString(object.roundId),
      signedRefundTx: object.signedRefundTx,
      judgeAddress: object.judgeAddress
    };
  },
  toAmino(message: MsgBroadcastTxRefund): MsgBroadcastTxRefundAmino {
    const obj: any = {};
    obj.reserveId = message.reserveId ? message.reserveId.toString() : undefined;
    obj.roundId = message.roundId ? message.roundId.toString() : undefined;
    obj.signedRefundTx = message.signedRefundTx;
    obj.judgeAddress = message.judgeAddress;
    return obj;
  },
  fromAminoMsg(object: MsgBroadcastTxRefundAminoMsg): MsgBroadcastTxRefund {
    return MsgBroadcastTxRefund.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgBroadcastTxRefundProtoMsg): MsgBroadcastTxRefund {
    return MsgBroadcastTxRefund.decode(message.value);
  },
  toProto(message: MsgBroadcastTxRefund): Uint8Array {
    return MsgBroadcastTxRefund.encode(message).finish();
  },
  toProtoMsg(message: MsgBroadcastTxRefund): MsgBroadcastTxRefundProtoMsg {
    return {
      typeUrl: "/twilightproject.nyks.bridge.MsgBroadcastTxRefund",
      value: MsgBroadcastTxRefund.encode(message).finish()
    };
  }
};
function createBaseMsgBroadcastTxRefundResponse(): MsgBroadcastTxRefundResponse {
  return {};
}
export const MsgBroadcastTxRefundResponse = {
  encode(_: MsgBroadcastTxRefundResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBroadcastTxRefundResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBroadcastTxRefundResponse();
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
  fromPartial(_: DeepPartial<MsgBroadcastTxRefundResponse>): MsgBroadcastTxRefundResponse {
    const message = createBaseMsgBroadcastTxRefundResponse();
    return message;
  },
  fromAmino(_: MsgBroadcastTxRefundResponseAmino): MsgBroadcastTxRefundResponse {
    return {};
  },
  toAmino(_: MsgBroadcastTxRefundResponse): MsgBroadcastTxRefundResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgBroadcastTxRefundResponseAminoMsg): MsgBroadcastTxRefundResponse {
    return MsgBroadcastTxRefundResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgBroadcastTxRefundResponseProtoMsg): MsgBroadcastTxRefundResponse {
    return MsgBroadcastTxRefundResponse.decode(message.value);
  },
  toProto(message: MsgBroadcastTxRefundResponse): Uint8Array {
    return MsgBroadcastTxRefundResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgBroadcastTxRefundResponse): MsgBroadcastTxRefundResponseProtoMsg {
    return {
      typeUrl: "/twilightproject.nyks.bridge.MsgBroadcastTxRefundResponse",
      value: MsgBroadcastTxRefundResponse.encode(message).finish()
    };
  }
};
function createBaseMsgBroadcastTxSweep(): MsgBroadcastTxSweep {
  return {
    reserveId: Long.UZERO,
    roundId: Long.UZERO,
    signedSweepTx: "",
    judgeAddress: ""
  };
}
export const MsgBroadcastTxSweep = {
  encode(message: MsgBroadcastTxSweep, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.reserveId.isZero()) {
      writer.uint32(8).uint64(message.reserveId);
    }
    if (!message.roundId.isZero()) {
      writer.uint32(16).uint64(message.roundId);
    }
    if (message.signedSweepTx !== "") {
      writer.uint32(26).string(message.signedSweepTx);
    }
    if (message.judgeAddress !== "") {
      writer.uint32(34).string(message.judgeAddress);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBroadcastTxSweep {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBroadcastTxSweep();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reserveId = (reader.uint64() as Long);
          break;
        case 2:
          message.roundId = (reader.uint64() as Long);
          break;
        case 3:
          message.signedSweepTx = reader.string();
          break;
        case 4:
          message.judgeAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgBroadcastTxSweep>): MsgBroadcastTxSweep {
    const message = createBaseMsgBroadcastTxSweep();
    message.reserveId = object.reserveId !== undefined && object.reserveId !== null ? Long.fromValue(object.reserveId) : Long.UZERO;
    message.roundId = object.roundId !== undefined && object.roundId !== null ? Long.fromValue(object.roundId) : Long.UZERO;
    message.signedSweepTx = object.signedSweepTx ?? "";
    message.judgeAddress = object.judgeAddress ?? "";
    return message;
  },
  fromAmino(object: MsgBroadcastTxSweepAmino): MsgBroadcastTxSweep {
    return {
      reserveId: Long.fromString(object.reserveId),
      roundId: Long.fromString(object.roundId),
      signedSweepTx: object.signedSweepTx,
      judgeAddress: object.judgeAddress
    };
  },
  toAmino(message: MsgBroadcastTxSweep): MsgBroadcastTxSweepAmino {
    const obj: any = {};
    obj.reserveId = message.reserveId ? message.reserveId.toString() : undefined;
    obj.roundId = message.roundId ? message.roundId.toString() : undefined;
    obj.signedSweepTx = message.signedSweepTx;
    obj.judgeAddress = message.judgeAddress;
    return obj;
  },
  fromAminoMsg(object: MsgBroadcastTxSweepAminoMsg): MsgBroadcastTxSweep {
    return MsgBroadcastTxSweep.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgBroadcastTxSweepProtoMsg): MsgBroadcastTxSweep {
    return MsgBroadcastTxSweep.decode(message.value);
  },
  toProto(message: MsgBroadcastTxSweep): Uint8Array {
    return MsgBroadcastTxSweep.encode(message).finish();
  },
  toProtoMsg(message: MsgBroadcastTxSweep): MsgBroadcastTxSweepProtoMsg {
    return {
      typeUrl: "/twilightproject.nyks.bridge.MsgBroadcastTxSweep",
      value: MsgBroadcastTxSweep.encode(message).finish()
    };
  }
};
function createBaseMsgBroadcastTxSweepResponse(): MsgBroadcastTxSweepResponse {
  return {};
}
export const MsgBroadcastTxSweepResponse = {
  encode(_: MsgBroadcastTxSweepResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBroadcastTxSweepResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBroadcastTxSweepResponse();
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
  fromPartial(_: DeepPartial<MsgBroadcastTxSweepResponse>): MsgBroadcastTxSweepResponse {
    const message = createBaseMsgBroadcastTxSweepResponse();
    return message;
  },
  fromAmino(_: MsgBroadcastTxSweepResponseAmino): MsgBroadcastTxSweepResponse {
    return {};
  },
  toAmino(_: MsgBroadcastTxSweepResponse): MsgBroadcastTxSweepResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgBroadcastTxSweepResponseAminoMsg): MsgBroadcastTxSweepResponse {
    return MsgBroadcastTxSweepResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgBroadcastTxSweepResponseProtoMsg): MsgBroadcastTxSweepResponse {
    return MsgBroadcastTxSweepResponse.decode(message.value);
  },
  toProto(message: MsgBroadcastTxSweepResponse): Uint8Array {
    return MsgBroadcastTxSweepResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgBroadcastTxSweepResponse): MsgBroadcastTxSweepResponseProtoMsg {
    return {
      typeUrl: "/twilightproject.nyks.bridge.MsgBroadcastTxSweepResponse",
      value: MsgBroadcastTxSweepResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSweepProposal(): MsgSweepProposal {
  return {
    reserveId: Long.UZERO,
    newReserveAddress: "",
    judgeAddress: "",
    BtcBlockNumber: Long.UZERO,
    btcRelayCapacityValue: Long.UZERO,
    btcTxHash: "",
    UnlockHeight: Long.UZERO,
    roundId: Long.UZERO,
    withdrawIdentifiers: []
  };
}
export const MsgSweepProposal = {
  encode(message: MsgSweepProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.reserveId.isZero()) {
      writer.uint32(8).uint64(message.reserveId);
    }
    if (message.newReserveAddress !== "") {
      writer.uint32(18).string(message.newReserveAddress);
    }
    if (message.judgeAddress !== "") {
      writer.uint32(26).string(message.judgeAddress);
    }
    if (!message.BtcBlockNumber.isZero()) {
      writer.uint32(32).uint64(message.BtcBlockNumber);
    }
    if (!message.btcRelayCapacityValue.isZero()) {
      writer.uint32(40).uint64(message.btcRelayCapacityValue);
    }
    if (message.btcTxHash !== "") {
      writer.uint32(50).string(message.btcTxHash);
    }
    if (!message.UnlockHeight.isZero()) {
      writer.uint32(56).uint64(message.UnlockHeight);
    }
    if (!message.roundId.isZero()) {
      writer.uint32(64).uint64(message.roundId);
    }
    for (const v of message.withdrawIdentifiers) {
      writer.uint32(74).string(v!);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSweepProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSweepProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reserveId = (reader.uint64() as Long);
          break;
        case 2:
          message.newReserveAddress = reader.string();
          break;
        case 3:
          message.judgeAddress = reader.string();
          break;
        case 4:
          message.BtcBlockNumber = (reader.uint64() as Long);
          break;
        case 5:
          message.btcRelayCapacityValue = (reader.uint64() as Long);
          break;
        case 6:
          message.btcTxHash = reader.string();
          break;
        case 7:
          message.UnlockHeight = (reader.uint64() as Long);
          break;
        case 8:
          message.roundId = (reader.uint64() as Long);
          break;
        case 9:
          message.withdrawIdentifiers.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgSweepProposal>): MsgSweepProposal {
    const message = createBaseMsgSweepProposal();
    message.reserveId = object.reserveId !== undefined && object.reserveId !== null ? Long.fromValue(object.reserveId) : Long.UZERO;
    message.newReserveAddress = object.newReserveAddress ?? "";
    message.judgeAddress = object.judgeAddress ?? "";
    message.BtcBlockNumber = object.BtcBlockNumber !== undefined && object.BtcBlockNumber !== null ? Long.fromValue(object.BtcBlockNumber) : Long.UZERO;
    message.btcRelayCapacityValue = object.btcRelayCapacityValue !== undefined && object.btcRelayCapacityValue !== null ? Long.fromValue(object.btcRelayCapacityValue) : Long.UZERO;
    message.btcTxHash = object.btcTxHash ?? "";
    message.UnlockHeight = object.UnlockHeight !== undefined && object.UnlockHeight !== null ? Long.fromValue(object.UnlockHeight) : Long.UZERO;
    message.roundId = object.roundId !== undefined && object.roundId !== null ? Long.fromValue(object.roundId) : Long.UZERO;
    message.withdrawIdentifiers = object.withdrawIdentifiers?.map(e => e) || [];
    return message;
  },
  fromAmino(object: MsgSweepProposalAmino): MsgSweepProposal {
    return {
      reserveId: Long.fromString(object.reserveId),
      newReserveAddress: object.newReserveAddress,
      judgeAddress: object.judgeAddress,
      BtcBlockNumber: Long.fromString(object.BtcBlockNumber),
      btcRelayCapacityValue: Long.fromString(object.btcRelayCapacityValue),
      btcTxHash: object.btcTxHash,
      UnlockHeight: Long.fromString(object.UnlockHeight),
      roundId: Long.fromString(object.roundId),
      withdrawIdentifiers: Array.isArray(object?.withdrawIdentifiers) ? object.withdrawIdentifiers.map((e: any) => e) : []
    };
  },
  toAmino(message: MsgSweepProposal): MsgSweepProposalAmino {
    const obj: any = {};
    obj.reserveId = message.reserveId ? message.reserveId.toString() : undefined;
    obj.newReserveAddress = message.newReserveAddress;
    obj.judgeAddress = message.judgeAddress;
    obj.BtcBlockNumber = message.BtcBlockNumber ? message.BtcBlockNumber.toString() : undefined;
    obj.btcRelayCapacityValue = message.btcRelayCapacityValue ? message.btcRelayCapacityValue.toString() : undefined;
    obj.btcTxHash = message.btcTxHash;
    obj.UnlockHeight = message.UnlockHeight ? message.UnlockHeight.toString() : undefined;
    obj.roundId = message.roundId ? message.roundId.toString() : undefined;
    if (message.withdrawIdentifiers) {
      obj.withdrawIdentifiers = message.withdrawIdentifiers.map(e => e);
    } else {
      obj.withdrawIdentifiers = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgSweepProposalAminoMsg): MsgSweepProposal {
    return MsgSweepProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSweepProposalProtoMsg): MsgSweepProposal {
    return MsgSweepProposal.decode(message.value);
  },
  toProto(message: MsgSweepProposal): Uint8Array {
    return MsgSweepProposal.encode(message).finish();
  },
  toProtoMsg(message: MsgSweepProposal): MsgSweepProposalProtoMsg {
    return {
      typeUrl: "/twilightproject.nyks.bridge.MsgSweepProposal",
      value: MsgSweepProposal.encode(message).finish()
    };
  }
};
function createBaseMsgSweepProposalResponse(): MsgSweepProposalResponse {
  return {};
}
export const MsgSweepProposalResponse = {
  encode(_: MsgSweepProposalResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSweepProposalResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSweepProposalResponse();
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
  fromPartial(_: DeepPartial<MsgSweepProposalResponse>): MsgSweepProposalResponse {
    const message = createBaseMsgSweepProposalResponse();
    return message;
  },
  fromAmino(_: MsgSweepProposalResponseAmino): MsgSweepProposalResponse {
    return {};
  },
  toAmino(_: MsgSweepProposalResponse): MsgSweepProposalResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSweepProposalResponseAminoMsg): MsgSweepProposalResponse {
    return MsgSweepProposalResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSweepProposalResponseProtoMsg): MsgSweepProposalResponse {
    return MsgSweepProposalResponse.decode(message.value);
  },
  toProto(message: MsgSweepProposalResponse): Uint8Array {
    return MsgSweepProposalResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSweepProposalResponse): MsgSweepProposalResponseProtoMsg {
    return {
      typeUrl: "/twilightproject.nyks.bridge.MsgSweepProposalResponse",
      value: MsgSweepProposalResponse.encode(message).finish()
    };
  }
};