import { useState } from "react";
import BodyList from "../components/BodyList";
import Drawer from "../components/Drawer";
import Footer from "../components/Footer";
import Header from "../components/Header";
import FormAddAnuncio from "../components/FormAddAnuncio";

export default function Anuncios() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Header titulo={"Meus anúncios"} setOpen={setOpen} />
      <BodyList titulo={"Meus anúncios"} />
      <Footer />

      <Drawer open={open} setOpen={setOpen} tituloDrawer={"Adicionar Anúncio"}>
        <FormAddAnuncio />
      </Drawer>
    </div>
  );
}
