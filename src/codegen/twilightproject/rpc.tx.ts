import { Rpc } from "../helpers";
export const createRPCMsgClient = async ({
  rpc
}: {
  rpc: Rpc;
}) => ({
  twilightproject: {
    nyks: {
      bridge: new (await import("../bridge/tx.rpc.msg")).MsgClientImpl(rpc),
      forks: new (await import("../forks/tx.rpc.msg")).MsgClientImpl(rpc)
    }
  }
});