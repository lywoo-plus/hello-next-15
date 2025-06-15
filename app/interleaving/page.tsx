import ClientComponent from "@/components/ClientComponent";
import ServerComponent from "@/components/ServerComponent";

export default function Page() {
  return (
    <div>
      <h1>interleaving page</h1>

      <ClientComponent serverComponent={<ServerComponent />}>
        
      </ClientComponent>
    </div>
  );
}