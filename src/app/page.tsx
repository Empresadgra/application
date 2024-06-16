import { Dashboard } from "@/components/Dashboard";
import { Navbar } from "@/components/Navbar";
import { Sidebar } from "@/components/Sidebar";

export default function Home() {
  return (
    <>
      {/*<Invoice />*/}
      <main className="flex min-h-screen">
        <section className="hidden lg:block min-w-[15%]">
          <Sidebar />
        </section>
        <section className="flex flex-col items-center w-full lg:max-w-[85%] min-h-full">
          <Navbar />
          <Dashboard />
        </section>
      </main>
    </>
  );
}
