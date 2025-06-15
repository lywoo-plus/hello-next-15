import { Metadata } from "next";
import { redirect } from "next/navigation";

type Props = {
  params: Promise<{productId: string}>
}

function randomInt(count:number) {
  return Math.floor(Math.random() * count) ;
}

export const generateMetadata = async ({params}: Props): Promise<Metadata> => {
  const {productId} = (await params);

  const title = await new Promise((resolve) => {
    setTimeout(() => resolve('Iphone'))
  })

  return {
    title: `Product Details for ${title}`,
    description: `Details for product ${productId}`,
  };
}

export default async function ProductDetails({ params }: Props) {
  const {productId} = (await params);

  const random = randomInt(2) ;
  if(random === 1){
    console.log('🪲🪲🪲🪲🪲');
    console.log(random);
    console.log('🪲🪲🪲🪲🪲');
    throw Error('Product not found')
  }

  if(parseInt(productId) > 5){
    // notFound()
    redirect('/')
  }

  return (
    <h1>
      Product Details for {productId}
    </h1>
  );
}