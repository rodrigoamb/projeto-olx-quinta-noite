import { useEffect, useState } from "react";
import BodyList from "../components/BodyList";
import Drawer from "../components/Drawer";
import Footer from "../components/Footer";
import Header from "../components/Header";
import FormAddAnuncio from "../components/FormAddAnuncio";
import Modal from "../components/Modal";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";
import { fetchDataMyAnuncios } from "../services/fetchDataMyAnuncios";

export default function Anuncios() {
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [dataAnunciosList, setDataAnunciosList] = useState([]);
  const [idDelete, setIdDelete] = useState("");

  useEffect(() => {
    setIsLoading(true);

    fetchDataMyAnuncios()
      .then((data) => {
        setDataAnunciosList(data);
        setIsLoading(false);
      })
      .catch((error) => {
        toast.error("Erro ao carregar os seus anúncios", error);
        setIsLoading(false);
      });
  }, []);

  console.log(dataAnunciosList);

  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <Header titulo={"Meus anúncios"} setOpen={setOpen} />
          <BodyList
            setOpenModal={setOpenModal}
            setIdDelete={setIdDelete}
            titulo={"Meus anúncios"}
            dataAnunciosList={dataAnunciosList}
          />
          <Footer />

          <Drawer
            open={open}
            setOpen={setOpen}
            tituloDrawer={"Adicionar Anúncio"}
          >
            <FormAddAnuncio
              setOpen={setOpen}
              fetchDataMyAnuncios={fetchDataMyAnuncios}
            />
          </Drawer>

          <Modal
            open={openModal}
            setOpen={setOpenModal}
            idDelete={idDelete}
            fetchDataMyAnuncios={fetchDataMyAnuncios}
          />
        </>
      )}
    </div>
  );
}
