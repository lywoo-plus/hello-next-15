import Link from "next/link";

const COLOR_FEEDS = [
  'bg-green-50',
  'bg-green-100',
  'bg-green-200',
  'bg-green-300',
  'bg-green-400',
  'bg-green-500',
  'bg-green-600',
  'bg-green-700',
  'bg-green-800',
  'bg-green-900',
];

export default function Page() {
  return (
    <div className="grid grid-cols-4 gap-4">
      {
        COLOR_FEEDS.map((color) => {
          return (
            <Link key={color} href={`/color-feed/${color}`} className={`${color} aspect-square inline-block rounded-md`}>{color}</Link>
          )
        })
      }
    </div>
  );
}