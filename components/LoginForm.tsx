'use client';

import { login } from "@/actions/auth";
import Form from "next/form";
import { useActionState } from "react";

export default function LoginForm() {
  const [loginState, loginAction, isLoadingLogin] = useActionState(login, undefined);

  return (
    <div className="border p-4">
      <h1>Login Form</h1>

      <Form action={loginAction} className="flex flex-col gap-4 mt-4">
        <input name="name" type="text" placeholder="Name" className="border p-2" />
        {loginState?.errors.name && <p className="text-red-500">{loginState.errors.name}</p>}

        <input name="password" type="password" placeholder="Password" className="border p-2" />
        {loginState?.errors.password && <p className="text-red-500">{loginState.errors.password}</p>}

        <button disabled={isLoadingLogin} type="submit" className="bg-blue-400 p-2">
          {isLoadingLogin ? 'Loging in...' : 'Login'}
        </button>
      </Form>
    </div>
  );
}