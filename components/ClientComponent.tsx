'use client';

export default function ClientComponent({ children, serverComponent }: { children?: React.ReactNode, serverComponent: React.ReactNode }) {
  return (
    <div>
      <h1>Client Component</h1>
      {children}
      {serverComponent}
    </div>
  );
}