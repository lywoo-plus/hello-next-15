'use client';

import { useRouter } from "next/navigation";

export default function NavButton() {
  const router = useRouter()

  function handleClick() {
    router.push('/articles/new-1?lang=en')  
  }

  return (
    <button onClick={handleClick} className="cursor-pointer">
      New Article in EN
    </button>
  );
}