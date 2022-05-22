import React from 'react';
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "../pages/homePage";
import InputsPage from "../pages/inputsPage";
import SelectPage from "../pages/selectPage";
import TextAreaPage from "../pages/textAreaPage";

function RouterAppRoot() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/inputcustom" element={<InputsPage />} />
          <Route path="/textareacustom" element={<TextAreaPage />} />
          <Route path="/selectcustom" element={<SelectPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default RouterAppRoot;