import { useState } from "react";
import icon_error from "../assets/images/icon-error.svg" ;

export default function EmailInput() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value) {
      setError("El correo es obligatorio");
    } else if (!emailRegex.test(value)) {
      setError("Por favor ingresa un correo válido");
    } else {
      setError("");
    }
  };

  return (
<div className="flex flex-col gap-8">
    <div className={`${error==""?"bg-white":"bg-fm-Red-400"} rounded-sm  p-0.5 pb-0`}>
      <div className="bg-white p-1 rounded-sm flex items-center justify-center relative">
        <input
          className="bg-white rounded-tl-sm rounded-bl-sm p-1 w-full outline-none"
          type="text"
          placeholder="Ingresa tu correo"
          value={email}
          id="input-email"
            name="input-email"
        onChange={(e)=>{ setEmail(e.target.value)
            setError("");}}
        />

        {/* Icono de error con animación */}
        <img
          src={icon_error}
          alt="error"
          className={`mr-3 transition-all duration-300 ease-in-out transform ${
            error ? "opacity-100 scale-100" : "opacity-0 scale-0"
          }`}
        />
      </div>

      {/* Mensaje de error con animación */}
      <span
        className={`block pl-2 py-1 text-neutral-100 text-xs italic text-left transition-all duration-300 ease-in-out transform ${
          error ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1"
        }`}
      >
        {error}
      </span>
    </div>
    <button onClick={  ()=>{
         
            validateEmail(email);
    }  } className="w-full bg-fm-Red-400 py-4 px-6 font-midle text-white rounded-sm active:scale-95 ">Contact Us</button>
</div>
  );
}
