 export default async function Page({
   params,
 }: {
   params: Promise<{ item: string }>;
 }) {
   const { item } = await params;
 
   return (
     <div className={`${item} aspect-square inline-block rounded-md`}>
       {item}
     </div>
   );
 }