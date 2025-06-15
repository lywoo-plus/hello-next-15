'use client';

import { useFormStatus } from "react-dom";

export default function LoadingSubmitButton() {
  const {pending} = useFormStatus()

  return (
    <button type="submit" disabled={pending} className="bg-green-500">
      {
        pending ? 'Loading...' : 'Submit'
      }
    </button>
  );
}