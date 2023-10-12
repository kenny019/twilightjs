import * as _0 from "../bridge/tx";
import * as _1 from "../forks/tx";
import * as _2 from "../volt/reserve";
import * as _3 from "../volt/tx";
import * as _4 from "../bridge/tx.amino";
import * as _5 from "../forks/tx.amino";
import * as _6 from "../bridge/tx.registry";
import * as _7 from "../forks/tx.registry";
import * as _8 from "../bridge/tx.rpc.msg";
import * as _9 from "../forks/tx.rpc.msg";
import * as _10 from "./rpc.tx";
export namespace twilightproject {
  export namespace nyks {
    export const bridge = {
      ..._0,
      ..._4,
      ..._6,
      ..._8
    };
    export const forks = {
      ..._1,
      ..._5,
      ..._7,
      ..._9
    };
    export const volt = {
      ..._2,
      ..._3
    };
  }
  export const ClientFactory = {
    ..._10
  };
}