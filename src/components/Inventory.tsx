import { ProductTarget } from "./ProductTarget";

const Inventory = (): JSX.Element => {
  return (
    <div>
      <section>
        <div>
          <h3>Inventario de negocio</h3>
          <p>Este es el inventario completo del negocio</p>
        </div>
        <div>
          <button type="button">Facturar</button>
          <button type="button"></button>
          <input type="text" placeholder="Buscar un producto..." />
          <button type="button">Todas las categorias</button>
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
      </section>
      <section>
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