import BodyList from "../components/BodyList";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Anuncios() {
  return (
    <div>
      <Header titulo={"Meus anúncios"} />
      <BodyList titulo={"Meus anúncios"} />
      <Footer />
    </div>
  );
}
