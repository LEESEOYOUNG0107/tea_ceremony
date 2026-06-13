import { useEffect, useState } from "react";

// import TeaEtiquette from "./pages/TeaEtiquette.jsx";
// import TeaLibrary from "./pages/TeaLibrary.jsx";
import TeaCeremonyIntro from "./pages/Intro/TeaCeremonyIntro";

export default function AppRouter() {
  const [hash, setHash] = useState(() => window.location.hash || "#library");

  useEffect(() => {
    const handleHashChange = () => setHash(window.location.hash || "#library");

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  if (hash === "#etiquette") {
    // return <TeaEtiquette />;
  }

  if(hash === "#TeaCeremonyIntro"){
    return <TeaCeremonyIntro />;
  }

  // return <TeaLibrary />;
}
