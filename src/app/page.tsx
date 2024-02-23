import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="p-4">
      <div className="p-8">
        <h2 className=" font-medium text-xl">ようこそFBroぐへ🚀</h2>
        <p className="py-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt
          illum facilis nobis perferendis dignissimos odit magni ratione
          excepturi quia vero ut, reprehenderit voluptatem nostrum nemo
          temporibus eius eos fugiat ducimus enim molestias, ipsa, omnis maiores
          rerum! Rem perferendis quaerat corrupti ea, corporis ut excepturi
          itaque tempore earum labore, placeat quibusdam.
        </p>
      </div>
      <div className="flex gap-x-4 text-center pl-8">
        <Button>Click Here</Button>
        <Button>Click Here</Button>
        <Button>Click Here</Button>
      </div>
    </main>
  );
}
