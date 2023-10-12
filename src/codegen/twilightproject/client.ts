import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as bridgeTxRegistry from "../bridge/tx.registry";
import * as forksTxRegistry from "../forks/tx.registry";
import * as bridgeTxAmino from "../bridge/tx.amino";
import * as forksTxAmino from "../forks/tx.amino";
export const twilightprojectAminoConverters = {
  ...bridgeTxAmino.AminoConverter,
  ...forksTxAmino.AminoConverter
};
export const twilightprojectProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...bridgeTxRegistry.registry, ...forksTxRegistry.registry];
export const getSigningTwilightprojectClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...twilightprojectProtoRegistry]);
  const aminoTypes = new AminoTypes({
    ...twilightprojectAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningTwilightprojectClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = defaultRegistryTypes
}: {
  rpcEndpoint: string | HttpEndpoint;
  signer: OfflineSigner;
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
  const {
    registry,
    aminoTypes
  } = getSigningTwilightprojectClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry: (registry as any),
    aminoTypes
  });
  return client;
};