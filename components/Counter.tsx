'use client';

import ReactSlotProp from "./ReactSlotProp";
import ServerComponent from "./ServerComponent";

export default function Counter() {
  return (
    <div>
      <ReactSlotProp>
      {(count) => <ServerComponent count={count}/>}
      </ReactSlotProp>
    </div>
  );
}