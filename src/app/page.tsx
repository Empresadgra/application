import { Dashboard } from "@/components/Dashboard";
import { Navbar } from "@/components/Navbar";
import { Sidebar } from "@/components/Sidebar";

export default function Home() {
  return (
    <>
      {/*<Invoice />*/}
      <main className="flex min-h-screen w-full">
        <section className="hidden lg:block "></section>
        <section className="flex flex-col items-center w-full">
          <Navbar />
          <Dashboard />
        </section>
      </main>
    </>
  );
}
