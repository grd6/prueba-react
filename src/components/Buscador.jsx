import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {useState } from "react";

const Buscador = ({onChange}) => {
  const [buscarpalabra, setbuscarpalabra] = useState("");

  const onSearch = () => {
   onChange(buscarpalabra);
  };

  return (
    <>
      <div className="d-flex justify-content-center mt-5 ">
        <img
          style={{ width: "4rem", height: "auto" }}
          src="https://simpsonsapi.000webhostapp.com/rosquilla.png"
          alt="roquilla"
        />
        <div>
          <h1>Api Los Simpsons</h1>
        </div>
      </div>
      <Form>
        <Form.Group className="mb-3 ">
          <Form.Label>
            <h5>BUSCAR</h5>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingresa el nombre de Simpsons favorito"
            onChange={(ev) => {
              setbuscarpalabra(ev.currentTarget.value);
              console.log("onchage", ev.currentTarget.value);
            }}
          />
        </Form.Group>
        <Button
          onClick={onSearch}
          style={{ background: "#d63384", borderColor: "#d63384" }}
        >
          Buscar
        </Button>
      </Form>
    </>
  );
};

export default Buscador;
