import './style.css';

export default function Page() {
  return (
    <div className="grid [grid-template-areas:'html_html_html_css''js_js_next_next'] border-2 gap-1">
      <div className='[grid-area:html] bg-green-500'>
        <h1 className='text-2xl uppercase'>html</h1>
        <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores omnis sed odit quam dolores et deserunt consectetur delectus inventore nisi, numquam, corrupti repellat dolor a in laborum eos vero iure illo dicta autem, accusamus consequatur dolorem modi. Id excepturi aspernatur debitis quo. Quaerat et repellendus, sed voluptas nemo eveniet sunt.</p>
        <button className='bg-amber-500 rounded-md p-1'>Detail</button>
      </div>
      <div className='[grid-area:css] bg-green-600'>
        <h1 className='text-2xl uppercase'>css</h1>
        <p className='text-sm'>Lorem ipsumn.</p>
        <button className='bg-amber-500 rounded-md p-1'>Detail</button>
      </div>
      <div className='[grid-area:js] bg-green-700'>
        <h1 className='text-2xl uppercase'>js</h1>
        <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat nam facere commodi magni molestias sint expedita, iste pariatur eius quasi.</p>
        <button className='bg-amber-500 rounded-md p-1'>Detail</button>
      </div>
      <div className='[grid-area:next] bg-green-800'>
        <h1 className='text-2xl uppercase'>next</h1>
        <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat nam facere commodi magni molestias sint expedita, iste pariatur eius quasi.</p>
        <button className='bg-amber-500 rounded-md p-1'>Detail</button>
      </div>
    </div>
  );
}