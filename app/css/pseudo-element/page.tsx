import Link from 'next/link';
import './style.css';

import Image from "next/image";

export default function Page() {
  return (
    <div className="w-full">
      <div className='image-wrapper'>
        <Image src={'/cat.png'} width={1000} height={1000} alt="" className="size-full"/>
      </div>

      <ul className='list pl-8'>
        <li className='list-item'>item 1</li>
        <li className='marker:text-blue-500'>item 2</li>
        <li className='marker:text-blue-500'>item 3</li>
      </ul>

      <input type="text" placeholder='placeholder' className='input' />

      <p className='first-line:text-green-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, non.</p>

      <Link href={''} className='focus:text-red-500'>airsent</Link>
      <Link href={''} className='focus-visible:bg-pink-500'>airsent</Link>

      <div>
        <input type="checkbox" className='checkbox' />
        <label>checkbox label</label>
      </div>
    </div>
  );
}