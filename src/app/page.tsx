import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tabs } from "@radix-ui/react-tabs";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-between">
      <nav className="absolute right-4 top-4">
      <ModeToggle/>
      </nav>

      <aside className="h-screen overflow-hidden hidden lg:block">
        <img src="/background-sphere.png" alt="imagem da tela principal"/>
      </aside>

      <section className="flex flex-col items-center w-full gap-8">
      <svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="37.5" cy="37.5" r="37.5" fill="#E11D48"/>
      </svg>

      <h1 className="text-4xl font-extrabold uppercase">Sphere</h1>

      <Tabs defaultValue="entrar">
        <TabsList>
          <TabsTrigger value="entrar">entrar</TabsTrigger>
          <TabsTrigger value="registrar">registrar</TabsTrigger>
        </TabsList>
      </Tabs>

      <Button>Entrar</Button>
      </section>

    </main>
  );
}
