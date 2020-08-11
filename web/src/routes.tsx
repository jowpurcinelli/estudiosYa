import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import TeacherForm from "./pages/TeacherForm";
import TeacherList from "./pages/TeacherList";

export default function Routes() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Dashboard} />
      <Route path="/study" component={TeacherList} />
      <Route path="/give-classes" component={TeacherForm} />
    </BrowserRouter>
  );
}