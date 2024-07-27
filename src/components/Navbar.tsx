import { NavButton } from "./NavButton";

const Navbar = (): JSX.Element => {
  return (
    <nav className="w-full p-5 flex justify-between border-b-2">
      <div>
        <h2 className="text-sm flex items-center gap-4"><b className="text-xl">Negocio</b> Dashboard</h2>
      </div>
      <ul className="flex gap-4">
        <li>
          <NavButton />
        </li>
        <li>
          <NavButton />
        </li>
        <li>
          <NavButton />
        </li>
      </ul>
    </nav>
  );
}

export { Navbar };