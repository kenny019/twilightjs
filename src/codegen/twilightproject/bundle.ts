import * as _0 from "../nyks/bridge/tx";
import * as _1 from "../nyks/forks/tx";
import * as _2 from "../nyks/volt/reserve";
import * as _3 from "../nyks/volt/tx";
import * as _4 from "../nyks/zkos/tx";
import * as _5 from "../nyks/bridge/tx.amino";
import * as _6 from "../nyks/forks/tx.amino";
import * as _7 from "../nyks/zkos/tx.amino";
import * as _8 from "../nyks/bridge/tx.registry";
import * as _9 from "../nyks/forks/tx.registry";
import * as _10 from "../nyks/zkos/tx.registry";
import * as _11 from "../nyks/bridge/tx.rpc.msg";
import * as _12 from "../nyks/forks/tx.rpc.msg";
import * as _13 from "../nyks/zkos/tx.rpc.msg";
import * as _14 from "./rpc.tx";
export namespace twilightproject {
  export namespace nyks {
    export const bridge = {
      ..._0,
      ..._5,
      ..._8,
      ..._11
    };
    export const forks = {
      ..._1,
      ..._6,
      ..._9,
      ..._12
    };
    export const volt = {
      ..._2,
      ..._3
    };
    export const zkos = {
      ..._4,
      ..._7,
      ..._10,
      ..._13
    };
  }
  export const ClientFactory = {
    ..._14
  };
}