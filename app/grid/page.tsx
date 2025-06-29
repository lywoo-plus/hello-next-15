import './style.css';

export default function Page() {
  return (
    <div className='space-y-1'>
      <div className="grid-container">
        <div className="grid-container__item item__1">1</div>
        <div className="grid-container__item item__2">2</div>
        <div className="grid-container__item item__3">3</div>
        <div className="grid-container__item">4</div>
      </div>

      <div className="grid-container-language">
        <div className='grid-container-language__item language-item__html'></div>
        <div className='grid-container-language__item language-item__css'></div>
        <div className='grid-container-language__item language-item__js'></div>
        <div className='grid-container-language__item language-item__react'></div>
      </div>

      <div className='grid grid-rows-[repeat(2,100px)] grid-cols-[repeat(2,100px)] border-4 h-96 border-red-300 place-content-between'>
        <div className='border-2 border-red-500'>1</div>
        <div className='border-2 border-red-500'>2</div>
        <div className='border-2 border-red-500'>3</div>
        <div className='border-2 border-red-500'>4</div>
      </div>
    </div>
  );
}