import React from "react";

function LoginForm({ onSubmit }) {
  return (
    <form
      onSubmit={(e) => onSubmit(e)}
      className="flex flex-col w-full items-center"
    >
      <input
        className="w-5/6 border-2 border-slate-300 px-5 py-2 my-1 rounded-md"
        type="text"
        name="email"
        placeholder="test@test.com"
      />
      <input
        className="w-5/6 border-2 border-slate-300 px-5 py-2 my-1 rounded-md"
        type="password"
        name="password"
        placeholder="123456"
      />
      <button
        className="bg-azul
        px-5 py-2 rounded-md my-1 text-white
        hover:bg-blue-700
        "
      >
        Iniciar Sesión
      </button>
    </form>
  );
}

export default LoginForm;
