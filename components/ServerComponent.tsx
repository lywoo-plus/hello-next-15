export default function ServerComponent(props: { count?: number }) {
  console.log('🪲🪲🪲🪲🪲');
  console.log('Server Component');
  console.log('🪲🪲🪲🪲🪲');

  return (
    <div>
      <h1>Server Component</h1>
      <p>Count: {props.count}</p>
    </div>
  );
}