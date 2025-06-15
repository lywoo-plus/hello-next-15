import { editProduct } from "@/actions/products";
import ProductForm from "@/components/ProductForm";
import { getProduct } from "@/prisma-db";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product = await getProduct(Number(id));

  if(!product) {
    notFound();
  }

  const editProductForThisId = editProduct.bind(null, Number(id))

  return (
    <div>
      <h1 className="text-amber-500 text-2xl capitalize">{product?.title}</h1>

      <ProductForm data={product} action={editProductForThisId} />
    </div>
  );
}