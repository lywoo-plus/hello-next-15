import ProductList from "@/components/ProductList";
import { getProducts } from "@/prisma-db";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string | null;
}

export default async function Page({
  searchParams
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const { query } = await searchParams;
  const products: Product[] = await getProducts(query);

  return (
    <>
      <ProductList products={products}/>
    </>
  );
}