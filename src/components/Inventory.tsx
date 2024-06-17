import { ProductTarget } from "./ProductTarget";

const Inventory = (): JSX.Element => {
  return (
    <div className="flex w-full h-full">
      <section className="min-w-[80%] flex justify-center">
        <div className="max-w-[1200px] w-full p-10">
          <div className="text-center pb-6">
            <h3 className="font-semibold text-xl pb-[10px]">
              Inventario de negocio
            </h3>
            <p>Este es el inventario completo del negocio</p>
          </div>
          <div className="flex justify-end gap-2">
            <button type="button" className="bg-black rounded-lg p-2 text-white">Facturar</button>
            <button type="button" className="p-2 rounded-lg border">P</button>
            <input type="text" placeholder="Buscar un producto..." className="border rounded-lg p-2 max-w-[288px] w-full" />
            <button type="button" className="p-2 rounded-lg border">Todas las categorias</button>
            <button type="button">F</button>
          </div>
          <div></div>
          <div>
            <div>
              <ul>
                <li>
                  <p>Producto</p>
                </li>
                <li>
                  <p>Nombre</p>
                </li>
              </ul>
            </div>
            <div>
              <ProductTarget />
              <ProductTarget />
              <ProductTarget />
            </div>
          </div>
        </div>
      </section>
      <section className="min-w-[20%] border-l-2">
        <div>
          <h3>Productos seleccionados</h3>
          <p>Selecciona todos los productos que deseas facturar</p>
        </div>
        <div></div>
        <div>
          <button type="button">Proceder a factura</button>
        </div>
      </section>
    </div>
  );
}

export { Inventory };