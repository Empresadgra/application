import { ProductSummary } from "./ProductSummary";

const Invoice = (): JSX.Element => {
  return (
    <div className="min-w-full bg-opacity-50 h-screen fixed bg-black flex flex-col lg:items-center lg:justify-center justify-end">
      <div className="lg:max-w-[50%] max-h-[85%] w-full h-full bg-white rounded-lg flex flex-col justify-between pl-10 pr-10 pb-10">
        <div className="overflow-auto">
          <div className="flex flex-col lg:flex-row justify-between pb-10 pt-10 border-b-2 gap-7">
            <div>
              <h4>Nueva factura</h4>
              <p>Ingresa los productos que el cliente va a comprar</p>
            </div>
            <div>
              <button
                className="pt-3 pb-3 p-10 bg-black rounded-lg text-white"
                type="button"
              >
                Anadir producto
              </button>
            </div>
          </div>
          <div className="pt-5 pb-5 w-full flex flex-col gap-10">
            <ProductSummary />
            <ProductSummary />
            <ProductSummary />
          </div>
        </div>
        <div className="border-t-2 pt-6 flex flex-col gap-5">
          <div className="flex justify-between">
            <p>
              <b>Total</b>
            </p>
            <p>
              <b>$11,029.20</b>
            </p>
          </div>
          <div className="self-end">
            <button
              className=" pt-3 pb-3 p-16 bg-black rounded-lg text-white"
              type="button"
            >
              Completar factura
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Invoice };