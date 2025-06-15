export default function Layout(
  {
    children, user, notification, login
  }: 
  {
    children: React.ReactNode, 
    user: React.ReactNode, 
    notification: React.ReactNode
    login: React.ReactNode
  }
) {
  const isLoggedIn = true

  return (
    isLoggedIn ?
      <section className="grid grid-cols-2">
        <div>
          {children}
        </div>

        <div>
          {user}
        </div>
        
        <div>
          {notification}
        </div>
      </section>
    :
    {login}
  );
}