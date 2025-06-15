import Form from 'next/Form';

export default function SearchProductsForm() {
  return (
    <div className='border p-4'>
      <h1>Search Products</h1>

      <Form action="/products-db">
        <input type="text" name="query" placeholder="Search products by name"  className='border'/>
        <button type="submit" className='bg-blue-400 p-2'>search</button>
      </Form>
    </div>
  );
}