const Navbar = (): JSX.Element => {
  return (
    <nav className="w-full p-5 flex justify-between border-b-2">
      <div>
        <h2>Negocio</h2>
      </div>
      <ul className="flex gap-10">
        <li>Home</li>
        <li>Actions</li>
      </ul>
    </nav>
  );
}

export { Navbar };