const DailySales = () => {
  return (
    <div className="max-h-[45%] w-full flex flex-col items-center rounded-2xl bg-gray-100 p-5">
      <div className="w-full flex justify-between items-center mb-3">
        <div>
          <h2>Activida diaria</h2>
          <p>Registro de la actividad diaria</p>
        </div>
        <button className="rounded-lg bg-gray-200 p-2" type="button">
          Ver actividad
        </button>
      </div>
      <div className="flex w-full gap-1 mb-5">
        <div className="">
          <ul className="flex flex-col justify-between">
            <li>
              <p>$50.00</p>
            </li>
            <li>
              <p>$37.50</p>
            </li>
            <li>
              <p>$25.00</p>
            </li>
            <li>
              <p>$12.50</p>
            </li>
            <li>
              <p>$00.00</p>
            </li>
            <li></li>
          </ul>
        </div>
        <div className="w-full">
          <div className="border-l-2 border-gray-400 h-full relative flex flex-col justify-between">
            <div className="border-t-2 border-gray-300"></div>
            <div className="border-t-2 border-gray-300"></div>
            <div className="border-t-2 border-gray-300"></div>
            <div className="border-t-2 border-gray-400"></div>
            <div className="absolute w-full h-full flex justify-evenly items-end">
              <div className="bg-red-500 w-4 h-[50%] rounded-lg"></div>
              <div className="bg-red-500 w-4 h-[75%] rounded-lg"></div>
              <div className="bg-red-500 w-4 h-[90%] rounded-lg"></div>
              <div className="bg-red-500 w-4 h-[50%] rounded-lg"></div>
              <div className="bg-red-500 w-4 h-[55%] rounded-lg"></div>
              <div className="bg-red-500 w-4 h-[30%] rounded-lg"></div>
            </div>
          </div>
          <ul className="flex justify-evenly">
            <li>
              <p>Dom</p>
            </li>
            <li>
              <p>Lun</p>
            </li>
            <li>
              <p>Mar</p>
            </li>
            <li>
              <p>Mier</p>
            </li>
            <li>
              <p>Jue</p>
            </li>
            <li>
              <p>Vie</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export { DailySales }; 