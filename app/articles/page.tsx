import NavButton from "@/components/NavButton";
import Link from "next/link";

export default async function Page() {
  await new Promise((resolve) => {
  setTimeout(() => resolve(null), 1000)
  })
  return (
    <div>
      article home page

      <div className="space-x-4 m-6 flex flex-col">
        <Link  href="/articles">Articles Home Page</Link>

        <Link  href="/articles/news-1?lang=en">News 1 in EN</Link>
        <Link  href="/articles/news-1?lang=fr">News 1 in FR</Link>

        <NavButton />
      </div>
    </div>
  );
}