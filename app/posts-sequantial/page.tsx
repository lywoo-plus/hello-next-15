import Author from "@/components/Author";
import { Suspense } from "react";

export default async function Page() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await response.json()

  return (
    <div>
      <h1>posts sequantial page</h1>

      <div className="grid grid-cols-2 gap-4">
        {
          posts.map((post: any) => (
            <div key={post.id}>
              <h6 className="text-ellipsis truncate">{post.title}</h6>
              <Suspense fallback={<h1>Loading author...</h1>}>
                <Author userId={post.userId} />
              </Suspense>
            </div>
          ))
        }
      </div>
    </div>
  );
}