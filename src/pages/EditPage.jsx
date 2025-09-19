import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";

export default function EditPage() {
  const [loading, setLoading] = useState(false);
  const [dataAnuncio, setDataAnuncio] = useState({});

  const { id } = useParams();
  const navigate = useNavigate();

  function handleChangeInput(event) {
    const { name, value } = event.target;

    setDataAnuncio((prevState) => {
      return { ...prevState, [name]: value };
    });
  }

  function handleVoltarMeusAnuncios() {
    navigate("/meus-anuncios");
  }

  async function fetchDataAnuncioPeloId() {
    setLoading(true);

    try {
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("userId");

      const response = await fetch(
        `https://dc-classificados.up.railway.app/api/anuncios/getMyAnuncio/${id}?userId=${userId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (response.ok) {
        setDataAnuncio(data);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Erro ao carregar o anúncio");
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  async function handleSubmitFormulario(event) {
    event.preventDefault();

    try {
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("userId");

      const response = await fetch(
        `https://dc-classificados.up.railway.app/api/anuncios/updateMyAnuncio/${id}?userId=${userId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            titulo: dataAnuncio.titulo,
            preco: Number(dataAnuncio.preco),
            descricaoCurta: dataAnuncio.descricaoCurta,
            descricaoCompleta: dataAnuncio.descricaoCompleta,
            imagem: dataAnuncio.imagem,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        toast.success("Anuncio Editado com sucesso");
        navigate("/meus-anuncios");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Erro ao atualizar o anuncio");
      console.error(error);
    }
  }

  useEffect(() => {
    fetchDataAnuncioPeloId();
  }, []);

  return (
    <div>
      {loading ? (
        <>
          <Spinner />
        </>
      ) : (
        <main className="flex overflow-hidden">
          <div className="w-[50%] flex justify-center items-center">
            <img src={dataAnuncio.imagem} className="w-[400px]" />
          </div>
          <div className="py-12 flex-1 lg:flex lg:justify-center lg:h-screen lg:overflow-auto">
            <div className="max-w-lg flex-1 mx-auto px-4 text-gray-600">
              <div>
                <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                  Edite o seu Anúncio
                </h3>
                <p className="mt-3">
                  Por favor, preencha o formulário abaixo para editar seu
                  anúncio.
                </p>
                <button
                  onClick={handleVoltarMeusAnuncios}
                  className="flex items-center gap-1 bg-white border border-gray-300 px-3 py-2 rounded-lg duration-150 cursor-pointer mt-3"
                >
                  Voltar para Meus Anúncios
                </button>
              </div>
              <form
                onSubmit={handleSubmitFormulario}
                className="space-y-5 mt-3 lg:pb-12"
              >
                <div>
                  <label className="font-medium">Titulo</label>
                  <input
                    type="text"
                    value={dataAnuncio.titulo}
                    onChange={handleChangeInput}
                    name="titulo"
                    required
                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                  />
                </div>
                <div>
                  <label className="font-medium">Preço</label>
                  <input
                    type="number"
                    value={dataAnuncio.preco}
                    name="preco"
                    onChange={handleChangeInput}
                    required
                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                  />
                </div>
                <div>
                  <label className="font-medium">Descrição curta</label>
                  <input
                    type="text"
                    value={dataAnuncio.descricaoCurta}
                    name="descricaoCurta"
                    onChange={handleChangeInput}
                    required
                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                  />
                </div>

                <div>
                  <label className="font-medium">Descrição completa</label>
                  <textarea
                    value={dataAnuncio.descricaoCompleta}
                    onChange={handleChangeInput}
                    name="descricaoCompleta"
                    required
                    className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                  ></textarea>
                </div>

                <div>
                  <label className="font-medium">Link da imagem</label>
                  <input
                    type="text"
                    name="imagem"
                    value={dataAnuncio.imagem}
                    onChange={handleChangeInput}
                    required
                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-4 py-2 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-lg duration-150"
                >
                  Editar Anúncio
                </button>
              </form>
            </div>
          </div>
        </main>
      )}
    </div>
  );
}
