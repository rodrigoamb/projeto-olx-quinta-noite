import BodyList from "../components/BodyList";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function App() {
  return (
    <div>
      <Header titulo={"Todos os anúncios"} />
      <BodyList titulo={"Todos os anúncios"} />
      <Footer />
    </div>
  );
}
