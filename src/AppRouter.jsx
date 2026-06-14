import { useEffect, useState } from "react";

import TeaCeremonyIntro from "./pages/Intro/TeaCeremonyIntro";
import Teaguide from "./pages/Guide/Teaguide";
import TeaCulture from "./pages/TeaCulture.jsx";
import TeaEtiquette from "./pages/TeaEtiquette.jsx";
import TeaLibrary from "./pages/TeaLibrary.jsx";

export default function AppRouter() {
  const [path, setPath] = useState(() => getCurrentPath());

  useEffect(() => {
    const handlePageChange = () => setPath(getCurrentPath());

    window.addEventListener("popstate", handlePageChange);
    window.addEventListener("hashchange", handlePageChange);
    return () => {
      window.removeEventListener("popstate", handlePageChange);
      window.removeEventListener("hashchange", handlePageChange);
    };
  }, []);

  const activePage = path.split("/").filter(Boolean)[0] || "home";

  if (activePage === "home" || activePage === "intro" || activePage === "TeaCeremonyIntro") {
    return <TeaCeremonyIntro />;
  }
  if(activePage === "#Teaguide"){
    return <Teaguide />;
  }

  if (activePage === "etiquette") {
    return <TeaEtiquette />;
  }

  if (activePage === "culture") {
    return <TeaCulture />;
  }

  return <TeaLibrary activePage={activePage === "library" ? "library" : activePage} />;
}

function getCurrentPath() {
  const hashPath = window.location.hash.replace(/^#/, "");

  if (hashPath === "TeaCeremonyIntro") {
    return "/TeaCeremonyIntro";
  }

  if (hashPath === "etiquette" || hashPath === "library" || hashPath === "culture") {
    return `/${hashPath}`;
  }

  return window.location.pathname || "/";
}
