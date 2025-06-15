export default async function BlogTwo() {
  await new Promise((resolve) => {
    setTimeout(() => resolve(null), 2000)
  })

  return (
    <div>
      <h1>Blog Two</h1>
    </div>
  );
}