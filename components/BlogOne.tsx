export default async function BlogOne() {
  await new Promise((resolve) => {
    setTimeout(() => resolve(null), 1000)
  })

  return (
    <div>
      <h1>Blog One</h1>
    </div>
  );
}