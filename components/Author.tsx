export default async function Author({ userId }: { userId: number }) {
  await new Promise((resolve) => {
    setTimeout(() => resolve(null), 1000)
  })

  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
  const author = await response.json()

  return (
    <div>
      <h1>Written by: {author.name}</h1>
    </div>
  );
}