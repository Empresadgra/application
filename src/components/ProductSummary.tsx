const ProductSummary = (): JSX.Element => {
  return (
    <div className="flex w-full gap-5 justify-center">
      <div className="max-w-[50px] max-h-[50px] w-full rounded-lg bg-gray-500"></div>
      <div className="flex flex-col gap-4 w-full">
        <div>
          <h5>Titulo de este producto</h5>
          <p>Breve descripcion del producto</p>
        </div>
        <div className="flex justify-between">
          <p><b>Precio</b></p>
          <p><b>$10.70</b></p>
        </div>
      </div>
    </div>
  );
}

export { ProductSummary };