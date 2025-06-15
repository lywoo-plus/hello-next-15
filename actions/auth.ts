'use server';

import { createSession, deleteSession } from "@/lib/session";
import { redirect } from "next/navigation";
import z from "zod";

const authUser = {
  id: '1',
  name: 'lywoo',
  passwod: '123',
}

const loginSchema = z.object({
  name: z.string().min(1).trim(),
  password: z.string().min(1).trim(),
});

export async function login(prevState: any, formData: FormData) {
  const validationResult = loginSchema.safeParse({
    name: formData.get("name"),
    password: formData.get("password"),
  })

  if(!validationResult.success) {
    return {
      errors: validationResult.error.flatten().fieldErrors
    };
  }

  await new Promise((resolve) => {
    setTimeout(() => resolve(null), 1000)
  })

  await createSession(authUser.id);

  redirect('/')
}

export async function logout() {
  await deleteSession();
  redirect('/')
}