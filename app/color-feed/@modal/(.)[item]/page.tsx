'use client';

import { useRouter } from "next/navigation";
import { use } from "react";

export default function Page({
  params,
}: {
  params: Promise<{ item: string }>;
}) {
  const { item } = use(params);

  const router = useRouter();

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 p-4" onClick={() => router.back()}>
      <div className={`${item} aspect-square inline-block rounded-md`}>
        {item} intercepted
      </div>
    </div>
  );
}