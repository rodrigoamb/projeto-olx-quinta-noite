import { useEffect, useState } from "react";
import BodyList from "../components/BodyList";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { CircleNotchIcon } from "@phosphor-icons/react";
import { toast } from "react-toastify";

export default function App() {
  const [dataAnunciosList, setDataAnunciosList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchDataAnuncios() {
    setIsLoading(true);

    try {
      const response = await fetch(
        "https://dc-classificados.up.railway.app/api/anuncios/getAllAnuncios",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();

      if (response.ok) {
        setDataAnunciosList(data);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchDataAnuncios();
  }, []);

  console.log(dataAnunciosList);

  return (
    <div>
      {isLoading ? (
        <div className=" h-screen flex justify-center items-center flex-col">
          <CircleNotchIcon size={60} className="text-[#A523FF] animate-spin" />
          <p className="text-[#A523FF]">Carregando...</p>
        </div>
      ) : (
        <>
          <Header titulo={"Todos os anúncios"} />
          <BodyList titulo={"Todos os anúncios"} />
          <Footer />
        </>
      )}
    </div>
  );
}
