import React from "react";
import styled from "styled-components";
// Assets
import ContactImg1 from "../assets/img/CarteAOTUA.jpg";
import ContactImg2 from "../assets/img/contact-2.png";
import pyramide from "../assets/img/pyramide.png";
import { useNavigate } from "react-router";

export default function Cadre() {
  const navigate = useNavigate();
  return (
    <Wrapper id="contact">
      <div className="lightBg">
        <div className="container" style={{ marginTop: "100px" }}>
          <h1>Cadre juridique de l’AOTU-A</h1>
          <section
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src={pyramide} style={{ width: "50%" }} />
            <div
              style={{
                display: "flex",
                marginRight: "20%",
                marginLeft: "20%",
                marginTop: "5%",
              }}
            >
              <div href="../assets/pdf/Décret n°12-109.pdf" className="card">
                <h1>
                  Décret n°09-85 Fonds spécial pour le développement des
                  transports publics
                </h1>
                <div>lire plus...</div>
              </div>

              <div className="card">
                <h1>
                  Décret Exécutif n°12-109 Organisation, Fonctionnement et
                  Missions de l'AOTU
                </h1>
                <div>lire plus...</div>
              </div>
              <div className="card">
                <h1>
                  Décret Exécutif n°12-190 Création des AOTU de certaines
                  wilayas
                </h1>
                <div>lire plus...</div>
              </div>
              <div className="card">
                <h1>
                  Décret Exécutif n°12-190 Création des AOTU de certaines
                  wilayas
                </h1>
                <div>lire plus...</div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                marginRight: "20%",
                marginLeft: "20%",
                marginTop: "5%",
                marginBottom: "5%",
              }}
            >
              <div className="card">
                <h1>
                  Décret exécutif n°16-99 modifiant le décret exécutif n° 12-109
                  Organisation, Fonctionnement et Missions de l'AOTU
                </h1>
                <div>lire plus...</div>
              </div>
              <div className="card">
                <h1>
                  Loi n°01-13 Orientation et Organisation des Transports
                  Terrestres
                </h1>
                <div>lire plus...</div>
              </div>
              <div className="card">
                <h1>
                  Loi n°01-13 Orientation et Organisation des Transports
                  Terrestres
                </h1>
                <div>lire plus...</div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  padding: 70px 0 30px 0;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Form = styled.form`
  padding: 70px 0 30px 0;
  input,
  textarea {
    width: 100%;
    background-color: transparent;
    border: 0px;
    outline: none;
    box-shadow: none;
    border-bottom: 1px solid #707070;
    height: 30px;
    margin-bottom: 30px;
  }
  textarea {
    min-height: 100px;
  }
  @media (max-width: 860px) {
    padding: 30px 0;
  }
`;
const ButtonInput = styled.input`
  border: 1px solid #7620ff;
  background-color: #7620ff;
  width: 100%;
  padding: 15px;
  outline: none;
  color: #fff;
  :hover {
    background-color: #580cd2;
    border: 1px solid #7620ff;
    color: #fff;
  }
  @media (max-width: 991px) {
    margin: 0 auto;
  }
`;
const ContactImgBox = styled.div`
  max-width: 180px;
  align-self: flex-center;
  margin: 10px 10px 10px 0;
`;
const SumbitWrapper = styled.div`
  @media (max-width: 991px) {
    width: 100%;
    margin-bottom: 50px;
  }
`;
