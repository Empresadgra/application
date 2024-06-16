const StatisticCard = (): JSX.Element => {
  return (
    <div className="min-h-[150px] w-full max-w-[500px] min-w-[288px] bg-gray-300 rounded-lg flex flex-col justify-between p-5 text-gray-950">
      <div className="flex gap-8">
        <div>
          <h3 className="text-xl font-bold">Hola contenedor</h3>
          <p>El total de gastos incurridos en los ultimos 7 dias</p>
        </div>
        <div className="p-1 min-w-10 bg-gray-800 rounded-lg"></div>
      </div>
      <p className="font-bold text-black self-end text-2xl">$5,670.21</p>
    </div>
  );
}

export { StatisticCard };