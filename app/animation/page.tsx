import Counter from "@/components/Counter";

const list = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];

export default function Page() {
  return (
    <div>
      <h1 className="animate-(--slideInLeftAnimation)">Animation</h1>

      <h2 className="animate-rotate">Rotate</h2>

      <button className="primary-button">Hover Me</button>

      <h1 className="animate-bounce-me">Animation</h1>

      {
        list.map((item, index) => (
          <div key={index} className="animate-bounce">
            {item}
          </div>
        ))
      }

      <p>This is from lywoo plus in Test branch</p>


      <Counter />
    </div>
  );
}
