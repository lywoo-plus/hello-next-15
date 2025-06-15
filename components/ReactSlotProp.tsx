'use client';

import { useState } from "react";

export default function ReactSlotProp(props: {
  children?: (count: number ) => React.ReactNode
}) {
  const [count, setCount] = useState(0);

  return (
    <div className="p-4 border">
      {props.children && props.children( count )}
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}