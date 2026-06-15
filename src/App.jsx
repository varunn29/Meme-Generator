import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Heading from "./Components/Heading";
import Template from "./Components/Template";
import Caption from "./Components/Caption";
import { useState } from "react";
import Home from "./Components/Home";

function App()
{
  const templates = [
    {
      id: 1,
      image: "/memes/Template1.png"
    },

    {
      id: 2,
      image: "/memes/Template2.jpg"
    },

    {
      id: 3,
      image: "/memes/Template3.jpg"
    },

    {
      id: 4,
      image: "/memes/Template4.jpg"
    },

    {
      id: 5,
      image: "/memes/Template5.png"
    },

    {
      id: 6,
      image: "/memes/Template6.jpg"
    },

    {
      id: 7,
      image: "/memes/Template7.png"
    },

    {
      id: 8,
      image: "/memes/Template8.png"
    },

    {
      id: 9,
      image: "/memes/Template9.png"
    },

    {
      id: 10,
      image: "/memes/Template10.jpg"
    },

    {
      id: 11,
      image: "/memes/Template11.jpg"
    },

    {
      id: 12,
      image: "/memes/Template12.png"
    },

    {
      id: 13,
      image: "/memes/Template13.jpg"
    },

    {
      id: 14,
      image: "/memes/Template14.png"
    },

    {
      id: 15,
      image: "/memes/Template15.jpg"
    },

    {
      id: 16,
      image: "/memes/Template16.jpg"
    },

    {
      id: 17,
      image: "/memes/Template17.jpg"
    },

    {
      id: 18,
      image: "/memes/Template18.png"
    },

    {
      id: 19,
      image: "/memes/Template19.jpg"
    },

    {
      id: 20,
      image: "/memes/Template20.jpg"
    }
  ];

  const [selectedTemplate, setSelectedTemplate] = useState(null);

  return (
    <div className="bg-gray-900 h-screen overflow-y-auto pb-20">
      <Heading/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/template" element={<Template data={templates} setSelectedTemplate={setSelectedTemplate}/>}/>
        <Route path="/caption" element={<Caption selectedTemplate={selectedTemplate}/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App