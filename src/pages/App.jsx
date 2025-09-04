import { useEffect, useState } from "react";
import BodyList from "../components/BodyList";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { CircleNotchIcon } from "@phosphor-icons/react";

export default function App() {
  const [dataAnunciosList, setDataAnunciosList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  function fetchDataAnuncios() {
    try {
      
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    console.log("QUALQUE COISA");
  }, []);

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
