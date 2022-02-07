import React, { useState } from "react";

import { Link, useHistory } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import "./styles.css";

import api from "../../services/api";

import featherImg from "../../assets/feather1.svg";
import khauaImg from "../../assets/khaua.svg";

export default function Logon() {
  const [id, setId] = useState("");
  const history = useHistory();
  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post("sessions", { id });

      localStorage.setItem("ongId", id);
      localStorage.setItem("ongName", response.data.name);

      history.push("/profile");
    } catch (error) {
      alert("Erro no login");
    }
  }
  return (
    <div className="logon-container">
      <section className="form">
        <img src={khauaImg} alt="khaua logo" className="khauaLogo" />
        <form onSubmit={handleLogin}>
          <h1>Faça seu Logon</h1>
          <input
            placeholder="Sua ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <button className="button" type="submit">
            Entrar
          </button>
          <Link className="back-link" to="/register">
            <FiLogIn size={20} color="#ff4500" />
            Não tenho cadastro
          </Link>
        </form>
      </section>
      <img src={featherImg} alt="khaua feather" />
    </div>
  );
}
