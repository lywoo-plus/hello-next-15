'use client';

import { FormState } from "@/actions/products";
import { useActionState } from "react";

export default function ProductForm({
  data,
  action,
}: {
  data?: any
  action:  ((prevState: FormState, formData: FormData) => Promise<FormState> | FormState)
}) {
  const initialState: FormState = {
    errors: {},
  }

  const [state, formAction, isPending] = useActionState(action, initialState);

  return (
    <form action={formAction} className="flex flex-col gap-4">
      <div>
        <label htmlFor="title">Title</label>
        <input id="title" defaultValue={data?.title} type="text" name="title" className="bg-white text-black" />
        {state.errors.title && <p className="text-red-500">{state.errors.title}</p>}
      </div>
      <div>
        <label htmlFor="price">Price</label>
        <input id="price" type="text" name="price" defaultValue={data?.price} className="bg-white text-black" />
        {state.errors.price && <p className="text-red-500">{state.errors.price}</p>}
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <textarea id="description" rows={4} name="description" defaultValue={data?.description} className="bg-white text-black" />
        {state.errors.description && <p className="text-red-500">{state.errors.description}</p>}
      </div>

      <button type="submit" disabled={isPending}>
        {isPending ? data ? "Updating..." : "Creating..." : data ? "Update" : "Create"}
      </button>
    </form>
  );
}