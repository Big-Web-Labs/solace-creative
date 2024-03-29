import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {CreativeAgency, Home, ForTheLikeMinded, InternalProjects, Contact, Lock, ProjectDetails} from './pages'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="creative-agency" element={<CreativeAgency />} />
          <Route path="for-the-like-minded" element={<ForTheLikeMinded />} />
          <Route path="internal-projects" element={<InternalProjects />} />
          <Route path="contact" element={<Contact />} />
          <Route path="/projects/:slug" element={<ProjectDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
