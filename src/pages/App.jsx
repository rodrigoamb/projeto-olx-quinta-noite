import { useEffect, useState } from "react";
import BodyList from "../components/BodyList";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";

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

  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <Header titulo={"Todos os anúnciosss"} />
          <BodyList
            dataAnunciosList={dataAnunciosList}
            titulo={"Todos os anúncios"}
          />
          <Footer />
        </>
      )}
    </div>
  );
}
