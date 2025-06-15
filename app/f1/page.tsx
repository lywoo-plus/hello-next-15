import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1>f1 page</h1>

      <Link  href="/f1/f2">f2</Link>

      <Link  href="/f3">f3</Link>

      <Link  href="/f4">f4</Link>
    </div>
  );
}