import { useState } from "react";

export default function FormAddAnuncio() {
  const [dataAnuncio, setDataAnuncio] = useState({
    titulo: "",
    preco: "",
    descricaoCurta: "",
    descricaoCompleta: "",
    imagem: "",
  });

  function handleChangeAdicionaAnuncio(event) {
    const { name, value } = event.target;

    setDataAnuncio((prevDataAnuncio) => {
      return { ...prevDataAnuncio, [name]: value };
    });
  }

  async function handleSubmitAdicionaAnuncio(event) {
    event.preventDefault();

    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("token");

    try {
      const response = await fetch(
        `https://dc-classificados.up.railway.app/api/anuncios/addNewAnuncio?userId=${userId}` 
      );
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <form
      onSubmit={handleSubmitAdicionaAnuncio}
      className="flex flex-col gap-4"
    >
      <div>
        <label className="font-medium">Titulo anúncio</label>
        <input
          type="text"
          name="titulo"
          value={dataAnuncio.titulo}
          onChange={handleChangeAdicionaAnuncio}
          required
          className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
        />
      </div>
      <div>
        <label className="font-medium">Preço</label>
        <input
          type="number"
          name="preco"
          onChange={handleChangeAdicionaAnuncio}
          value={dataAnuncio.preco}
          required
          className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
        />
      </div>

      <div>
        <label className="font-medium">Descrição curta</label>
        <input
          type="text"
          name="descricaoCurta"
          onChange={handleChangeAdicionaAnuncio}
          required
          value={dataAnuncio.descricaoCurta}
          className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
        />
      </div>

      <div>
        <label className="font-medium">Descrição completa</label>
        <textarea
          required
          name="descricaoCompleta"
          value={dataAnuncio.descricaoCompleta}
          onChange={handleChangeAdicionaAnuncio}
          className="resize-none h-[200px] w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
        ></textarea>

        <div>
          <label className="font-medium">Link da imagem</label>
          <input
            type="text"
            name="imagem"
            value={dataAnuncio.imagem}
            onChange={handleChangeAdicionaAnuncio}
            required
            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
      >
        Adicionar Anúncio
      </button>
    </form>
  );
}
