import Link from "next/link";

export default async function ArticlePage({
  params,
  searchParams
}: {
  params: Promise<{ articleId: string }>;
  searchParams: Promise<{ lang?: 'en'| 'fr' }>;
}) {
  const { articleId } = await params;
  const { lang = 'en' } = await searchParams;

  await new Promise((resolve) => {
    setTimeout(() => resolve(null), 1000)
  })

  return (
    <div>
      <Link  href="/articles">Articles Home Page</Link>
      
      <h1>ArticleId: {articleId} in {lang}</h1>
    </div>
  );
}