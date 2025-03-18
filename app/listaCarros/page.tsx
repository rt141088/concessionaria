import Link from "next/link";
import carrosData from "../../data/carrosData";


export default function ListaCarros() {
  return (
    <>
      <h2 className="text-2xl font-semibold text-center mb-4">Lista de Carros</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {carrosData.map((carro) => (
          <div key={carro.id} className="card">
            <img src={carro.foto} alt={carro.modelo} className="w-full h-48 object-cover rounded-md" />

            <Link href={`/detalhesCarro/${carro.id}`} className="btn mt-3 block text-center">
              Ver Detalhes
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
