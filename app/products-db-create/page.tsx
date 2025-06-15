import { createProduct } from "@/actions/products";
import ProductForm from "@/components/ProductForm";

export default function Page() {
  return (
    <ProductForm action={createProduct}/>
  );
}