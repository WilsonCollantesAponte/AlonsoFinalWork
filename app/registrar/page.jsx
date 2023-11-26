"use client";

import { useState } from "react";

export default function Registrar() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    address: "",
    cellNumber: "",
    password: "",
  });

  function handlePostUser(event) {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  }

  return (
    <div className=" border-t-2 border-gray-600 p-10">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />
      <form
        className="flex flex-col bg-red-500n gap-6 w-1/2 mx-auto p-11"
        // style=" border: 1px solid #ccc;"
      >
        <h2 className=" text-4xl font-semibold font-serif">
          Bienvenido a la UTP
        </h2>
        <p className=" text-base font-semibold font-serif">
          Comienza con nosotros aquì
        </p>

        <div className=" flex items-center shadow-md  shadow-indigo-500 pl-2 rounded-lg">
          <svg
            className=" fill-indigo-800"
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
          >
            <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z" />
          </svg>
          <input
            className=" w-full"
            type="text"
            name="name"
            value={user.name}
            onChange={handlePostUser}
            placeholder="Nombre"
          />
        </div>

        <div className=" flex items-center shadow-md shadow-indigo-500 pl-2 rounded-xl ">
          <svg
            className=" fill-indigo-800"
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
          >
            <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
          </svg>
          <input
            className=" w-full"
            type="email"
            name="email"
            value={user.email}
            onChange={handlePostUser}
            placeholder="Correo"
          />
        </div>

        <div className=" flex items-center shadow-md shadow-indigo-500 pl-2 rounded-xl ">
          <svg
            className=" fill-indigo-800"
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
          >
            <path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" />
          </svg>
          <input
            className=" w-full"
            type="text"
            name="address"
            value={user.address}
            onChange={handlePostUser}
            placeholder="Direccion"
          />
        </div>

        <div className=" flex items-center shadow-md shadow-indigo-500 pl-2 rounded-xl ">
          <svg
            className=" fill-indigo-800"
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
          >
            <path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" />
          </svg>
          <input
            className=" w-full"
            type="tel"
            name="cellNumber"
            value={user.cellNumber}
            onChange={handlePostUser}
            placeholder="Telefono"
          />
        </div>

        <div className=" flex items-center shadow-md shadow-indigo-500 pl-2 rounded-xl ">
          <svg
            className=" fill-indigo-800"
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
          >
            <path d="M240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240Zm0-80h480v-400H240v400Zm240-120q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280ZM360-640h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80ZM240-160v-400 400Z" />
          </svg>
          <input
            className=" w-full"
            type="password"
            name="password"
            value={user.password}
            onChange={handlePostUser}
            placeholder="Contraseña"
          />
        </div>

        <button
          className=" bg-gradient-to-r from-indigo-500 to-indigo-800 text-white font-semibold py-3 rounded"
          onClick={(e) => {
            e.preventDefault();
            if (
              !user.address ||
              !user.cellNumber ||
              !user.email ||
              !user.name ||
              !user.password
            )
              return alert("No se permiten campos vacios");
            fetch("/registrar/api", {
              method: "POST",
              body: JSON.stringify(user),
            })
              .then((r) => r.json())
              .then((r) => {
                if (!r) return alert("Este email ya existe");
                else {
                  setUser({
                    name: "",
                    email: "",
                    address: "",
                    cellNumber: "",
                    password: "",
                  });
                  alert("Usuario creado");
                }
              });
          }}
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
