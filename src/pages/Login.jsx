import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Login() {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    senha: "",
  });

  function handleChangeInputsLogin(event) {
    const { name, value } = event.target;

    setLoginData((prevLoginData) => ({
      ...prevLoginData,
      [name]: value,
    }));
  }

  async function handleSubmitLogin(event) {
    event.preventDefault();

    try {
      const response = await fetch(
        "https://dc-classificados.up.railway.app/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(loginData),
        }
      );

      const responseData = await response.json();

      if (response.ok) {
        localStorage.setItem("token", responseData.token);
        localStorage.setItem("userId", responseData.userId);

        toast.success(responseData.message);

        navigate("/meus-anuncios");
      } else {
        toast.error(responseData.message);
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <main className="w-full h-screen flex flex-col items-center justify-center bg-gray-50 sm:px-4">
      <div className="w-full space-y-6 text-gray-600 sm:max-w-md">
        <div className="text-center">
          <img
            src="https://logodownload.org/wp-content/uploads/2016/10/olx-logo-13.png"
            width={150}
            className="mx-auto"
          />
          <div className="mt-5 space-y-2">
            <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
              Faça login na sua conta
            </h3>
            <p className="">
              Não possui uma conta?{" "}
              <Link
                to={"/cadastro"}
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Cadastre-se aqui
              </Link>
            </p>
          </div>
        </div>
        <div className="bg-white shadow p-4 py-6 space-y-8 sm:p-6 sm:rounded-lg">
          <div className="relative">
            <span className="block w-full h-px bg-gray-300"></span>
            <p className="inline-block w-fit text-sm bg-white px-2 absolute -top-2 inset-x-0 mx-auto">
              ou continue com
            </p>
          </div>
          <form onSubmit={handleSubmitLogin} className="space-y-5">
            <div>
              <label className="font-medium">Email</label>
              <input
                onChange={handleChangeInputsLogin}
                value={loginData.email}
                type="email"
                name="email"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-[#6F0AD6] shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label className="font-medium">Senha</label>
              <input
                onChange={handleChangeInputsLogin}
                value={loginData.senha}
                type="password"
                name="senha"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-[#6F0AD6] shadow-sm rounded-lg"
              />
            </div>
            <button className="w-full px-4 py-2 text-white font-medium bg-[#6F0AD6] hover:bg-[#812fd3] active:bg-[#6F0AD6]rounded-lg duration-150 cursor-pointer">
              Entrar
            </button>
          </form>
        </div>
        <div className="text-center">
          <a href="javascript:void(0)" className="hover:text-indigo-600">
            Esqueceu sua senha?
          </a>
        </div>
      </div>
    </main>
  );
}
