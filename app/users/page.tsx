export default async function Page() {
  await new Promise((resolve) => {
    setTimeout(() => resolve(null), 1000)
  })

  const reponse = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await reponse.json()

  return (
    <div>
      <h1 className="capitalize">users page</h1>
      {
        users.map((user: any) => (
          <div key={user.id}>
            <p>{user.name}</p>
          </div>
        ))
      }
    </div>
  );
}