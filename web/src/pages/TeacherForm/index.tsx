import React from "react";

import PageHeader from "../../components/Header/";
import Input from "../../components/Input/";
import Textarea from "../../components/Textarea/";
import Select from "../../components/Select/";

import warningIcon from "../../assets/images/icons/warning.svg";


import "./styles.css";

export default function TeacherForm() {
  return (
    <div className="container" id="page-teacher-form">
      <PageHeader
        title="Que demas que vos quieras dar classes"
        description="El primer paso es poner sus infos aca"
      />

      <main>
        <fieldset>
          <legend>Sus Datos</legend>
          <Input name="name" label="Nombre Completo" />
          <Input name="avatar" label="Avatar" />
          <Input name="whatsapp" label="Whatsapp" />
          <Textarea name="bio" label="Biografia" />
        </fieldset>

        <fieldset>
          <legend>Sobre la clase</legend>
          <Select
            name="subject"
            label="Matéria"
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
          <Input name="cost" label="Valor de las classes por hora" />
        </fieldset>

        <fieldset>
          <legend>
            Horários Disponibles
            <button type="button">+ Nuevo Horario</button>
          </legend>

          <div className="schedule-item">
            <Select
              name="week_day"
              label="Dias de la Semana"
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
            <Input name="from" label="De" type="time" />
            <Input name="to" label="Hasta" type="time" />
          </div>
        </fieldset>

        <footer>
          <p>
            <img src={warningIcon} alt="Aviso Importante" />
            Importante <br />
            Poner todos los datos
          </p>
          <button type="button">Save</button>
        </footer>
      </main>
    </div>
  );
}

