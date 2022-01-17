import ClientNameInput from "./components/ClientNameInput";
import ProductCard from "./components/ProductCard";

const products = [
  { name: 'celular', valorInicial: 20 },
  { name: 'tv', valorInicial: 80 },
  { name: 'notebook', valorInicial: 53.25 }
];

function App() {
  return (
    <main>
      <h1>Leilão de centavos</h1>
      <ClientNameInput />
      <section>
        {
          products.map(({name, valorInicial}) => (
            <ProductCard key={ name } name={ name } initialValue={ valorInicial } />
          ))
        }
      </section>
    </main>
  );
}

export default App;
