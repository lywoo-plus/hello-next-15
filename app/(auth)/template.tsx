'use client';

import { useState } from "react";

export default function Layout({children}: {children: React.ReactNode}) {
  const [inputValue, setInputValue] =  useState('');

  return (
    <section>
      <input type="text" placeholder="Auth header" className="border" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />

      <p>{inputValue}</p>

      <h1 className="bg-green-500">Auth header</h1>
      {children}
    </section>
  );
}