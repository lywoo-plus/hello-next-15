async function getUserPosts(userId: string) {
  await new Promise((resolve) => {
  setTimeout(() => resolve(null), 1000)
  })

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
  return res.json();
}

async function getUserAlbums(userId: string) {
  await new Promise((resolve) => {
  setTimeout(() => resolve(null), 1000)
  })

  const res = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`);
  return res.json();
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const [posts, albums] = await Promise.all([
    getUserPosts(id),
    getUserAlbums(id),
  ]);

  return (
    <div>
      <h1>user parallel page</h1>

      <div className="grid grid-cols-2">
        <div>
          <h2 className="text-amber-200">Post</h2>
          <div>
            {posts.map((post: any) => (
              <div key={post.id}>
                <h6 className="text-ellipsis truncate">{post.title}</h6>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-amber-200">Album</h2>
          <div>
            {albums.map((album: any) => (
              <div key={album.id}>
                <h6 className="text-ellipsis truncate">{album.title}</h6>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}