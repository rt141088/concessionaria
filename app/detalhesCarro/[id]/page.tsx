
import carrosData from "../../../data/carrosData";

type detalhesCarro={
  params: {
    id:string;
  }
}
function detalhesCarro(props: detalhesCarro) {}
export default function DetalhesCarro({ params }: { params: { id: string } }) {
  const carro = carrosData.find((c) => c.id.toString() === params.id);

  if (!carro) return <p style={{ textAlign: "center", color: "red" }}>Carro não encontrado!</p>;

  return (
    <div className="card">
      <img src={carro.foto} alt={carro.modelo} style={{ width: "100%", borderRadius: "8px" }} />
      <h2>{carro.modelo}</h2>
      <p>Ano: {carro.ano}</p>
      
      <p><strong>Preço: R$ {carro.preco.toLocaleString()}</strong></p>
    </div>
  );
}
