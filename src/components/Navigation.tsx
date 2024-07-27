import { BuildingStorefrontIcon, ClipboardDocumentCheckIcon, ShoppingCartIcon, UserIcon, WalletIcon } from "@heroicons/react/24/outline";

const Navigation = () => {
  return (
    <nav className="border w-full pt-4 pb-4">
      <ul className="flex justify-evenly items-center text-sm text-gray-500">
        <li className="flex flex-col items-center text-black">
          <BuildingStorefrontIcon className="size-8" />
          <p>Dashboard</p>
        </li>
        <li className="flex flex-col items-center">
          <ShoppingCartIcon className="size-8" />
          <p>Inventario</p>
        </li>
        <li className="flex flex-col items-center">
          <WalletIcon className="size-8" />
          <p>Facturas</p>
        </li>
        <li className="flex flex-col items-center">
          <ClipboardDocumentCheckIcon className="size-8" />
          <p>Actividad</p>
        </li>
        <li className="flex flex-col items-center">
          <UserIcon className="size-8" />
          <p>Mi perfil</p>
        </li>
      </ul>
    </nav>
  );
}

export { Navigation };