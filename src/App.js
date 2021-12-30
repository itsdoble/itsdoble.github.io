import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects/Projects";
import PGrid from "./components/Projects/PGrid";
import PRants from "./components/Projects/PRants";
import Contact from "./components/Contact";
import { useEffect, useState } from "react";
import { supabase } from "./supabase";
import AuthContext from "./auth-context";

function App() {
  const [dataW, setDataW] = useState([]);
  const [dataPR, setDataPR] = useState([]);
  const [dataP, setDataP] = useState([]);
  const [fresh, dofresh] = useState(1);

  const getDataW = async () => {
    try {
      const { data, error } = await supabase
        .from("projects")
        .select()
        .match({ type: "web" });
      if (error) throw error;
      setDataW(data);
    } catch (e) {
      console.log(e);
    } finally {
    }
  };
  const getDataP = async () => {
    try {
      const { data, error } = await supabase
        .from("projects")
        .select()
        .match({ type: "photo" });
      if (error) throw error;
      setDataP(data);
    } catch (e) {
      console.log(e);
    } finally {
    }
  };
  const getDataPR = async () => {
    try {
      const { data, error } = await supabase
        .from("projects")
        .select()
        .match({ type: "prant" });
      if (error) throw error;
      setDataPR(data);
    } catch (e) {
      console.log(e);
    } finally {
    }
  };
  useEffect(() => {
    getDataP();
    getDataPR();
    getDataW();
  }, [fresh]);

  const refresh = () => {
    let s = fresh + 1;
    dofresh(s);
  };
  return (
    <AuthContext.Provider value={{ refresh: refresh }}>
      <div className="w-full min-h-full bg-gray-800">
        <Header />
        <div className="w-full h-12"></div>
        <div className="text-gray-100  ">
          <Routes>
            <Route path="/" element={<About />}></Route>
            <Route
              path="/projects"
              element={<Projects data={[dataW, dataP, dataPR]} />}
            ></Route>
            <Route
              path="/projects/pics"
              element={<PGrid cat="Photos" data={dataP} />}
            ></Route>{" "}
            <Route
              path="/projects/web"
              element={<PGrid cat="Web Apps" data={dataW} />}
            ></Route>{" "}
            <Route
              path="/projects/lit"
              element={<PRants cat="Poems/Rants" data={dataPR} />}
            ></Route>{" "}
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
        </div>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
