export default function EditPage() {
  return (
    <main className="flex overflow-hidden">
      <div className="w-[50%] flex justify-center items-center">
        <img
          src="https://m.media-amazon.com/images/I/41oDp+WGmDL._AC_SX679_.jpg"
          className="w-[400px]"
        />
      </div>
      <div className="py-12 flex-1 lg:flex lg:justify-center lg:h-screen lg:overflow-auto">
        <div className="max-w-lg flex-1 mx-auto px-4 text-gray-600">
          <div>
            <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              Edite o seu Anúncio
            </h3>
            <p className="mt-3">
              Por favor, preencha o formulário abaixo para editar seu anúncio.
            </p>
            <button className="flex items-center gap-1 bg-white border border-gray-300 px-3 py-2 rounded-lg duration-150 cursor-pointer mt-3">
              Voltar para Meus Anúncios
            </button>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="space-y-5 mt-3 lg:pb-12"
          >
            <div>
              <label className="font-medium">Titulo</label>
              <input
                type="text"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label className="font-medium">Preço</label>
              <input
                type="number"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label className="font-medium">Descrição curta</label>
              <input
                type="text"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
              />
            </div>

            <div>
              <label className="font-medium">Descrição completa</label>
              <textarea
                required
                className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
              ></textarea>
            </div>

            <div>
              <label className="font-medium">Link da imagem</label>
              <input
                type="text"
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
  );
}
