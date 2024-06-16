const Navbar = (): JSX.Element => {
  return (
    <nav className="w-full p-10 flex justify-between">
      <div>
        <h2>NEGOCIO</h2>
      </div>
      <ul className="flex gap-10">
        <li>Home</li>
        <li>Actions</li>
      </ul>
    </nav>
  );
}

export { Navbar };