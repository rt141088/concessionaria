export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold">A CONCESSIONARIA DO SEU SONHO</h1>
      <p className="text-lg mt-2">O melhor lugar para você comprar seu carro 0km</p>

      <a href="/listaCarros" className="text-blue-600 hover:underline mt-4 block">
        Ver Lista de Carros
      </a>
      <div className="mt-8 flex justify-center"></div>
      <img
        src="/Img/banner.png"
        className="mx-auto max-w-full rounded-lg"
        style={{ maxWidth: "800px" }}
        alt="Carro de luxo"
      />
    </div>
  );
}
