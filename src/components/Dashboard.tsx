import { CalendarIcon, MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { StatisticCard } from "./StatisticCard";
import { ActionButton } from "./ActionButton";

const Dashboard = (): JSX.Element => {
  return (
    <div className="p-4 w-full">
      <div className="relative">
        <input
          className="p-3 bg-gray-100 rounded-2xl w-full"
          type="text"
          placeholder="Buscar productos, secciones o relacionado"
        />
        <MagnifyingGlassIcon className="size-6 absolute right-3 top-3 text-gray-500" />
      </div>
      <div className="mt-6 mb-7 ml-2 rounded-lg flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-normal">Hola, Usuario usuario</h1>
          <p className="text-gray-500">Bienvenido a tu negocio digital</p>
        </div>
        <button
          className="flex gap-1 bg-gray-100 text-gray-500 rounded-2xl p-2"
          type="button"
        >
          <p>26/07/24</p>
          <CalendarIcon className="size-6 text-gray-500" />
        </button>
      </div>
      <div className="flex items-center gap-3 overflow-x-auto">
        <StatisticCard />
        <StatisticCard />
        <StatisticCard />
        <StatisticCard />
      </div>
      <div className="flex mt-6 mb-6 gap-2">
        <ActionButton action={"Nueva factura"}/>
        <ActionButton action={"Registrar producto"}/>
      </div>
    </div>
  );
}

export { Dashboard };