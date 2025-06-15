import NavButton from "@/components/NavButton";
import SearchProductsForm from "@/components/SearchProductsForm";
import { headers } from 'next/headers';
import Link from "next/link";

export default async function Home() {
  const headersList = await headers()
  const url = headersList.get('host')

  const res = await fetch(`${'http://' + url}/api/comment`)
  const comment = JSON.stringify(await res.json())

  return (
    <div>
      <h1>Home Page</h1>

      <p>{comment}</p>

      <SearchProductsForm/>

      <div className="space-x-4 m-6 flex flex-col">
        <Link  href="/articles">Articles Home Page</Link>

        <Link  href="/articles/news-1?lang=en">News 1 in EN</Link>
        <Link  href="/articles/news-1?lang=fr">News 1 in FR</Link>

        <NavButton />
      </div>
    </div>
  );
}
