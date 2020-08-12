import React from "react";
import "./styles.css";

import Header from "../../components/Header/";
import TeacherItem from "../../components/TeacherItem";
import Input from "../../components/Input";
import Select from "../../components/Select";

export default function TeacherList() {
  return (
    <div className="container" id="page-teacher-list">
      <Header title="Eses son los Profesores disponibles.">
        <form id="search-teachers">
          <Select
            name="subject"
            label="Clases"
            options={[
              { value: "Artes", label: "Artes" },
              { value: "Biologia", label: "Biologia" },
              { value: "Geografia", label: "Geografia" },
              { value: "Matematica", label: "Matematica" },
              { value: "Ingles", label: "Ingles" },
              { value: "Historia", label: "Historia" },
              { value: "Fisica", label: "Fisica" },
              { value: "Portugues", label: "Portugues" },
              { value: "Quimica", label: "Quimica" },
              {value: "Filosofia", label: "Filosofia"},
            ]}
          />
          <Select
            name="week_day"
            label="Dia de la Semana"
            options={[
              { value: "0", label: "Domingo" },
              { value: "1", label: "Lunes" },
              { value: "2", label: "Martes" },
              { value: "3", label: "Miercoles" },
              { value: "4", label: "Jueves" },
              { value: "5", label: "Viernes" },
              { value: "6", label: "Sábado" },
            ]}
          />

          <Input name="time" label="Hora" type="time" />
        </form>
      </Header>

      <main>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </main>
    </div>
  );
}