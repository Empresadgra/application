import { Dashboard } from "@/components/Dashboard";
import { Navbar } from "@/components/Navbar";
import { Navigation } from "@/components/Navigation";
import { Sidebar } from "@/components/Sidebar";

export default function Home() {
  return (
    <>
      {/*<Invoice />*/}
      <main className="flex min-h-screen w-full">
        <section className="hidden lg:block "></section>
        <section className="flex flex-col justify-between items-center w-full min-h-full">
          <div className="flex flex-col items-center w-full overflow-auto h-full">
            <Navbar />
            <Dashboard />
          </div>
          <Navigation />
        </section>
      </main>
    </>
  );
}
