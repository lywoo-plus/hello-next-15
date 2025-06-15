import BlogOne from "@/components/BlogOne";
import BlogTwo from "@/components/BlogTwo";
import { Suspense } from "react";

export const dynamicParams = true;
// True - Nextjs wil statically render pages on demand for any dynamic segments not included in generateStaticParams
// False - Nextjs will return 404 error for any dynamic segments not included in generateStaticParams

export async function generateStaticParams() {
  // When the pages is accessed with an ID that is not in generateStaticParams function, NextJs statically renders them at run time
  return [{id: '1'}, {id: '2'}]
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div>
      <h1>Blog {id} details rendered at {new Date().toLocaleTimeString()}</h1>

      <Suspense fallback={<h1>Loading blog 1...</h1>}>
        <BlogOne/>
      </Suspense>

      <Suspense fallback={<h1>Loading blog 2...</h1>}>
        <BlogTwo/>
      </Suspense>

      <Suspense fallback={<h1>Loading all blogs...</h1>}>
        <BlogOne/>
        <BlogTwo/>
      </Suspense>
    </div>
  );
}