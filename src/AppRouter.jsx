import { useEffect, useState } from "react";

import TeaCulture from "./pages/TeaCulture.jsx";
import TeaEtiquette from "./pages/TeaEtiquette.jsx";
import TeaLibrary from "./pages/TeaLibrary.jsx";

export default function AppRouter() {
  const [path, setPath] = useState(() => window.location.pathname || "/library");

  useEffect(() => {
    const handlePageChange = () => setPath(window.location.pathname || "/library");

    window.addEventListener("popstate", handlePageChange);
    return () => window.removeEventListener("popstate", handlePageChange);
  }, []);

  const activePage = path.split("/").filter(Boolean)[0] || "home";

  if (activePage === "etiquette") {
    return <TeaEtiquette />;
  }

  if (activePage === "culture") {
    return <TeaCulture />;
  }

  return <TeaLibrary activePage={activePage === "home" ? "home" : activePage} />;
}
