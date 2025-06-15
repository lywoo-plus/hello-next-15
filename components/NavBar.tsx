import { logout } from "@/actions/auth";
import { cachedGetAuthUser } from "@/lib/session";
import Link from "next/link";
import NavBarLink from "./NavBarLink";

export default async function NavBar() {
  const authUser = await cachedGetAuthUser();

  return (
    <nav className="flex justify-between">
      <NavBarLink/>

      {
        authUser ? 
        <form action={logout}>
          <button type="submit" className="bg-amber-900 p-4">Logout</button>
        </form> :
        <Link href="/login" className="bg-amber-900 p-4">Login</Link>
      }
    </nav>
  );
}