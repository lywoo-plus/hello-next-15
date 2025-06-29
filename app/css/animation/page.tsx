import Counter from "@/components/Counter";

export default function Page() {
  return (
    <div>
      <h1 className="animate-(--slideInLeftAnimation)">Animation</h1>

      <h2 className="animate-rotate">Rotate</h2>

      <button className="primary-button">Hover Me</button>

      <h1 className="animate-bounce-me">Animation</h1>

      

      <p>This is from lywoo plus</p>


      <Counter />
    </div>
  );
}
