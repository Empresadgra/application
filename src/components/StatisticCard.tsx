const StatisticCard = (): JSX.Element => {
  return (
    <div className="min-h-[150px] w-full max-w-[500px] min-w-[320px] bg-red-500 rounded-2xl flex flex-col justify-between text-white">
      <div className="flex gap-8 p-4">
        <div className="flex flex-col">
          <h3 className="text-2xl mb-2">Hola contenedor</h3>
          <p className="text-slate-200 font-light">El total de gastos incurridos en los ultimos 7 dias</p>
        </div>
        <div className="p-1 min-w-10 max-h-10 bg-gray-100  bg-opacity-40 rounded-lg"></div>
      </div>
      <div className="flex justify-end p-2 bg-gray-100 bg-opacity-20">
        <p className="font-semibold text-2xl pr-3">$5,670.21</p>
      </div>
    </div>
  );
}

export { StatisticCard };