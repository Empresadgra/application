import { StatisticCard } from "./StatisticCard";

const Dashboard = (): JSX.Element => {
  return (
    <div className="p-10">
      <div className="mt-2 mb-5 bg-blue-300 text-white rounded-lg p-5">
        <h1 className="text-2xl font-bold">Hola, nombre</h1>
        <p>Bienvenido</p>
      </div>
      <div className="flex flex-col items-center gap-4 lg:grid lg:grid-cols-2 lg:grid-rows-2">
        <StatisticCard />
        <StatisticCard />
        <StatisticCard />
        <StatisticCard />
      </div>
    </div>
  );
}

export { Dashboard };