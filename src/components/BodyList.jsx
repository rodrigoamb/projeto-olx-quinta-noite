import { useNavigate } from "react-router-dom";

export default function BodyList({
  titulo,
  dataAnunciosList,
  setOpenModal,
  setIdDelete,
}) {
  const navigate = useNavigate();

  function formatDate(data) {
    const dataSplit = data.split("T");
    const dataIdx = dataSplit[0];
    const dataFormated = dataIdx.split("-").reverse().join("/");

    return dataFormated;
  }

  function handleSetIdDelete(id) {
    setIdDelete(id);
    setOpenModal(true);
  }

  function handleNavigateEditAnuncio(id) {
    navigate(`/anuncio/${id}`);
  }

  return (
    <section className="mt-12 max-w-screen-lg mx-auto px-4 md:px-8">
      <div>
        <h1 className="text-gray-800 text-3xl font-semibold">{titulo}</h1>
      </div>

      <ul className="mt-12 space-y-6">
        {dataAnunciosList?.map((item, idx) => (
          <li key={idx} className="p-5 bg-white rounded-md shadow-sm">
            <a href={item.href} className="flex flex-row gap-5">
              <div className="w-[200px] h-[200px] overflow-hiddenborder-1 border-gray-400 rounded-md">
                <img
                  src={item.imagem}
                  loading="lazy"
                  alt={"Foto anuncio"}
                  className="w-[200px] h-full object-contain"
                />
              </div>

              <div className="w-full">
                <div className="justify-between sm:flex">
                  <div className="flex-1">
                    <h3 className="text-xl font-medium text-cyan-600">
                      {item.titulo}
                    </h3>
                    <p className="text-gray-500 mt-2 pr-2">
                      {item.descricaoCurta}
                    </p>
                  </div>
                  <div className="mt-5 space-y-4 text-sm sm:mt-0 sm:space-y-2">
                    <span className="flex items-center text-gray-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {formatDate(item.created_at)}
                    </span>
                    <span className="flex items-center text-gray-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                          clipRule="evenodd"
                        />
                      </svg>
                      R$ {item.preco}
                    </span>
                  </div>
                </div>
                <div className="mt-4 items-center space-y-4 text-sm sm:flex sm:space-x-4 sm:space-y-0">
                  {titulo === "Meus anúncios" && (
                    <>
                      <button
                        onClick={() => handleNavigateEditAnuncio(item.id)}
                        className="text-black bg-[#8CE563] px-6 py-2 rounded-md"
                      >
                        Editar
                      </button>
                      <button
                        onClick={() => handleSetIdDelete(item.id)}
                        className="text-black bg-[#F28000] px-6 py-2 rounded-md"
                      >
                        Deletar
                      </button>
                    </>
                  )}
                  <span className="flex items-center text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {item.usuario.cidade},{item.usuario.estado}
                  </span>
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
