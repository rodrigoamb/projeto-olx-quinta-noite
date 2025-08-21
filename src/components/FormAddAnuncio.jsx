export default function FormAddAnuncio() {
  return (
    <form>
      <div>
        <label className="font-medium">Titulo anúncio</label>
        <input
          type="text"
          required
          className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
        />
      </div>
      <div>
        <label className="font-medium">Preço</label>
        <input
          type="number"
          required
          className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
        />
      </div>

      <div>
        <label className="font-medium">Descrição curta</label>
        <input
          type="text"
          required
          className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
        />
      </div>

      <div>
        <label className="font-medium">Descrição completa</label>
        <textarea
          required
          className="resize-none h-[200px] w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
        ></textarea>

        <div>
          <label className="font-medium">Link da imagem</label>
          <input
            type="text"
            required
            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
          />
        </div>
      </div>
    </form>
  );
}
