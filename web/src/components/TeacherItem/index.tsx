import React from "react";

import "./styles.css";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars2.githubusercontent.com/u/2254731?s=400&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4"
          alt="Jowpurcinelli"
        />
        <div>
          <strong>Joao Purcinelli</strong>
          <span>Quimica</span>
        </div>
      </header>
      <p>
        Clases de Matemática bien estruturadas y expositivas
        <br /> <br />
        Estudie para el ENEM y otros Vestibulares en el Mejor Curso con el Mejor Precio.
        Pague hasta 12x. ENEM con la mejor preparacion. Cuotas por menos de UYU 150.
      </p>

      <footer>
        <p>
          Precio/hora
          <strong>UYU 150,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar en Contacto
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;