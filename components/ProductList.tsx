'use client';

import { removeProduct } from "@/actions/products";
import Form from "next/form";
import Link from "next/link";
import { useOptimistic } from "react";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string | null;
}

export default function ProductList({
  products
}:{
  products: Product[]
}) {
  const [optimisticProducts, setOptimisticProduct] = useOptimistic(products, (currentProducts, productId) => {
    return currentProducts.filter((product) => product.id !== productId)
  })

  async function removeProductId(productId: number) {
    setOptimisticProduct(productId)
    await removeProduct(productId)
  }

  return (
    <div>
      <h1>Products DB</h1>
      <Link href="/products-db-create">New</Link>

      {
        optimisticProducts.map((product) => (
          <div key={product.id} className="p-4 block border">
            <Link href={`/products-db/${product.id}`}>
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <p>{product.price}</p>
            </Link>

            <Form action={removeProductId.bind(null, product.id)}>
              <button type="submit" className="bg-red-500">
                Delete
              </button>
            </Form>
          </div>
        ))
      }
    </div>
  );
}