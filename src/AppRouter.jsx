import { BrowserRouter, Routes, Route } from "react-router-dom";

import TeaCeremonyIntro from "./pages/Intro/TeaCeremonyIntro";
import Teaguide from "./pages/Guide/Teaguide";
import TeaCulture from "./pages/TeaCulture.jsx";
import TeaEtiquette from "./pages/TeaEtiquette.jsx";
import TeaLibrary from "./pages/TeaLibrary.jsx";
import SiteHeader from "./components/SiteHeader.jsx"; // 헤더를 여기에 포함하면 편리합니다.

export default function AppRouter() {
  return (
    <BrowserRouter>
      {/* 💡 모든 페이지 위에 상단 헤더를 고정시킵니다. */}
      <SiteHeader /> 
      
      <Routes>
        <Route path="/" element={<TeaCeremonyIntro />} />
        <Route path="/guide" element={<Teaguide />} />
        <Route path="/etiquette" element={<TeaEtiquette />} />
        <Route path="/culture" element={<TeaCulture />} />
        <Route path="/library" element={<TeaLibrary activePage="library" />} />
        
        {/* 💡 지정되지 않은 엉뚱한 주소로 들어오면 홈으로 리다이렉트 */}
        <Route path="*" element={<TeaCeremonyIntro />} />
      </Routes>
    </BrowserRouter>
  );
}