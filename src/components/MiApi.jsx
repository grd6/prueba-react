import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Buscador from "./Buscador";

const MiApi = () => {
  const [simpsons, setsimpsons] = useState("homero");
  const [dataSimpsons, setdatasimpsons] = useState([]);

  const serchSimpsons = () => {
    const urlApi = `https://apisimpsons.fly.dev/api/personajes/find/${simpsons}`;
    axios
      .get(urlApi)
      .then((response) => {
        setdatasimpsons(response.data.result);
        console.log(response.data.result);
      })
      .catch((err) => {
        console.log("Error api", err);
      });
  };
  //solo se ejecuta cuando cambie simpsons
  useEffect(() => {
    serchSimpsons();
  }, [simpsons]);

  return (
    <>
      <Container style={{ background: "#d5db31" }}>
        <Buscador
          onChange={(value) => {
            setsimpsons(value);
          }}
        />
        <div className="d-flex flex-wrap justify-content-center gap-5 mt-5">
          {dataSimpsons.length > 0 ? (
            dataSimpsons.map((item) => (
              <Card key={item.id} style={{ width: "18rem", height: "auto" }}>
                <div className="d-flex justify-content-center">
                  <Card.Img
                    className="mt-4"
                    variant="top"
                    src={item.Imagen}
                    style={{ width: "12rem", height: "16rem" }}
                  />
                </div>
                <Card.Body>
                  <Card.Title>{item.Nombre}</Card.Title>
                  <Card.Text style={{ width: "15rem", height: "auto" }}>
                    {item.Historia}
                    <br /> <strong>Genero: </strong> {item.Genero}
                    <br />
                    <strong>Estado: </strong>{item.Estado}
                  </Card.Text>
                </Card.Body>
              </Card>
            ))
          ) : (
            <h1>Not found</h1>
          )}
        </div>
      </Container>
    </>
  );
};
export default MiApi;
