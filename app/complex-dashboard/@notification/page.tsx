import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1>notification page</h1>

      <Link href={'/complex-dashboard/archived'}> Go to archived page</Link>
    </div>
  );
}