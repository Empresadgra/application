const Sidebar = (): JSX.Element => {
  return (
    <div className="w-full h-full border-r p-10">
      <h3>Sidebar</h3>
      <ul className="flex flex-col gap-4">
        <li className="custom-li">
          <p>Dashboard</p>
        </li>
        <li className="custom-li">
          <p>Inventario</p>
        </li>
        <li className="custom-li">
          <p>Historial</p>
        </li>
      </ul>
    </div>
  );
}

export { Sidebar };