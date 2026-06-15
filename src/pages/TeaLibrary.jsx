import { useEffect, useState } from "react";
import styled from "styled-components";

import SiteHeader from "../components/SiteHeader.jsx";
import chrysanthemumTea from "../assets/ChrysanthemumTea.png";
import decorativeCharacter from "../assets/cr.png";
import gingerTea from "../assets/GingerTea.png";
import greenTea from "../assets/GreenTea.png";
import jujubeTea from "../assets/JujubeTea.png";
import leafDecoration from "../assets/leaf.png";
import omijaTea from "../assets/OmijaTea.png";
import persimmonLeafTea from "../assets/PersimmonLeafTea.png";
import plumTea from "../assets/PlumTea.png";
import quinceTea from "../assets/QuinceTea.png";
import teaSetImage from "../assets/tea.png";
import yuzaTea from "../assets/YuzaTea.png";

const FAVORITES_FILTER = "즐겨찾기";
const LIKED_TEAS_STORAGE_KEY = "tea-library-liked-teas";
const CATEGORIES = ["전체", FAVORITES_FILTER, "잎차", "꽃차", "과일차", "건강차"];

const TEAS = [
  {
    id: "green",
    name: "녹차",
    englishName: "Green Tea",
    category: "잎차",
    image: greenTea,
    cardTone: "#f2f5df",
    accent: "#6f8847",
    description: "신선한 풀향과 깔끔한 맛이 특징인 차",
    benefits: ["항산화", "집중력", "가벼운 활력"],
  },
  {
    id: "yuzu",
    name: "유자차",
    englishName: "Yuzu Tea",
    category: "과일차",
    image: yuzaTea,
    cardTone: "#fff3d4",
    accent: "#9b6d24",
    description: "상큼한 유자 향과 달콤한 맛의 차",
    benefits: ["비타민C", "감기 예방", "상큼함"],
  },
  {
    id: "jujube",
    name: "대추차",
    englishName: "Jujube Tea",
    category: "건강차",
    image: jujubeTea,
    cardTone: "#faeadb",
    accent: "#8b4a23",
    description: "달콤하고 구수한 맛의 대추로 만든 차",
    benefits: ["피로 회복", "숙면", "포근함"],
  },
  {
    id: "ginger",
    name: "생강차",
    englishName: "Ginger Tea",
    category: "건강차",
    image: gingerTea,
    cardTone: "#fff0d8",
    accent: "#986026",
    description: "알싸한 생강의 향과 따뜻한 맛의 차",
    benefits: ["몸을 따뜻하게", "소화", "면역"],
  },
  {
    id: "omija",
    name: "오미자차",
    englishName: "Omija Tea",
    category: "과일차",
    image: omijaTea,
    cardTone: "#fde9e2",
    accent: "#a7221b",
    description: "새콤달콤 오미자의 맛과 붉은 빛이 매력적인 차",
    benefits: ["갈증 해소", "상큼한 산미", "활력"],
  },
  {
    id: "plum",
    name: "매실차",
    englishName: "Plum Tea",
    category: "과일차",
    image: plumTea,
    cardTone: "#eff3dd",
    accent: "#7b8a3c",
    description: "상큼한 매실의 향과 부드러운 맛의 차",
    benefits: ["소화 도움", "피로 회복", "새콤달콤"],
  },
  {
    id: "chrysanthemum",
    name: "국화차",
    englishName: "Chrysanthemum Tea",
    category: "꽃차",
    image: chrysanthemumTea,
    cardTone: "#fff4d5",
    accent: "#9b6720",
    description: "국화의 은은한 향과 깊은 풍미의 차",
    benefits: ["눈 피로", "편안함", "은은한 향"],
  },
  {
    id: "quince",
    name: "모과차",
    englishName: "Quince Tea",
    category: "과일차",
    image: quinceTea,
    cardTone: "#fff1d3",
    accent: "#8f5d21",
    description: "모과의 향긋함과 부드러운 단맛의 차",
    benefits: ["목 관리", "향긋함", "따뜻함"],
  },
  {
    id: "persimmon",
    name: "감잎차",
    englishName: "Persimmon Leaf Tea",
    category: "건강차",
    image: persimmonLeafTea,
    cardTone: "#eef4df",
    accent: "#768b43",
    description: "구수하고 깔끔한 맛의 자연 그대로의 차",
    benefits: ["비타민", "맑은 맛", "카페인 적음"],
  },
];

export default function TeaLibrary({ activePage = "library" }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("전체");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [likedTeas, setLikedTeas] = useState(() => {
    try {
      const storedLikes = window.localStorage.getItem(LIKED_TEAS_STORAGE_KEY);
      return storedLikes ? JSON.parse(storedLikes) : {};
    } catch {
      return {};
    }
  });
  const [visibleTeas, setVisibleTeas] = useState(TEAS);

  useEffect(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    const nextTeas = TEAS.filter((tea) => {
      const matchesFilter =
        selectedFilter === "전체" ||
        tea.category === selectedFilter ||
        (selectedFilter === FAVORITES_FILTER && likedTeas[tea.id]);
      const matchesSearch =
        tea.name.includes(normalizedSearch) ||
        tea.englishName.toLowerCase().includes(normalizedSearch) ||
        tea.description.includes(normalizedSearch) ||
        tea.benefits.some((benefit) =>
          benefit.toLowerCase().includes(normalizedSearch),
        );

      return matchesFilter && matchesSearch;
    });

    const updateTimer = window.setTimeout(() => {
      setVisibleTeas(nextTeas);
    }, 0);

    return () => window.clearTimeout(updateTimer);
  }, [likedTeas, searchTerm, selectedFilter]);

  useEffect(() => {
    try {
      window.localStorage.setItem(
        LIKED_TEAS_STORAGE_KEY,
        JSON.stringify(likedTeas),
      );
    } catch {
      // localStorage may be unavailable in private or restricted browser modes.
    }
  }, [likedTeas]);

  const toggleLike = (event, teaId) => {
    event.stopPropagation();
    setLikedTeas((current) => ({
      ...current,
      [teaId]: !current[teaId],
    }));
  };

  const selectFilter = (category) => {
    setSelectedFilter(category);
    setIsFilterOpen(false);
  };

  return (
    <Page>
      <SiteHeader activePage={activePage} />

      <Shell>
        <Hero>
          <LeafCluster src={leafDecoration} alt="" aria-hidden="true" />
          <HeroCopy>
            <PageTitle>차 도감</PageTitle>
            <Subtitle>다양한 차를 만나보고, 당신의 취향을 찾아보세요.</Subtitle>
          </HeroCopy>

          <HeroTools>
            <SearchBox>
              <SearchIcon aria-hidden="true">⌕</SearchIcon>
              <SearchInput
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="차 이름을 검색해보세요."
              />
              <SearchLens aria-hidden="true">○</SearchLens>
            </SearchBox>
            <FilterWrap>
              <FilterButton
                type="button"
                aria-expanded={isFilterOpen}
                aria-controls="tea-filter-menu"
                onClick={() => setIsFilterOpen((open) => !open)}
              >
                {selectedFilter === "전체" ? "필터" : selectedFilter}
                <FilterGlyph aria-hidden="true">{isFilterOpen ? "▴" : "▾"}</FilterGlyph>
              </FilterButton>

              {isFilterOpen && (
                <FilterMenu id="tea-filter-menu" aria-label="차 카테고리 필터">
                  {CATEGORIES.map((category) => (
                    <FilterOption
                      key={category}
                      type="button"
                      $active={selectedFilter === category}
                      onClick={() => selectFilter(category)}
                    >
                      {category}
                    </FilterOption>
                  ))}
                </FilterMenu>
              )}
            </FilterWrap>
          </HeroTools>
        </Hero>

        <TeaGrid>
          {visibleTeas.map((tea) => (
            <TeaCard key={tea.id} $tone={tea.cardTone} $accent={tea.accent}>
              <CardText>
                <TeaName>{tea.name}</TeaName>
                <TeaEnglish>{tea.englishName}</TeaEnglish>
                <TeaDescription>{tea.description}</TeaDescription>
              </CardText>
              <HeartButton
                type="button"
                aria-label={`${tea.name} 즐겨찾기 ${likedTeas[tea.id] ? "해제" : "추가"}`}
                $liked={Boolean(likedTeas[tea.id])}
                onClick={(event) => toggleLike(event, tea.id)}
              >
                {likedTeas[tea.id] ? "♥" : "♡"}
              </HeartButton>
              <TeaImage src={tea.image} alt={`${tea.name} 일러스트`} />
            </TeaCard>
          ))}
        </TeaGrid>

        {visibleTeas.length === 0 && (
          <EmptyState>
            <EmptyCup aria-hidden="true">🍵</EmptyCup>
            찾는 차가 없어요. 다른 이름이나 카테고리로 찾아보세요.
          </EmptyState>
        )}

        <BottomBanner>
          <BottomTea src={teaSetImage} alt="" aria-hidden="true" />
          <BottomLeavesLeft src={leafDecoration} alt="" aria-hidden="true" />
          <BannerText>오늘은 어떤 차와 함께,  마음을 쉬어볼까요?</BannerText>
          <BottomMascot src={decorativeCharacter} alt="" aria-hidden="true" />
          <BottomLeavesRight src={leafDecoration} alt="" aria-hidden="true" />
        </BottomBanner>
      </Shell>
    </Page>
  );
}

const Page = styled.main`
  min-height: 100vh;
  background:
    radial-gradient(circle at 12% 8%, rgba(250, 239, 205, 0.48), transparent 28%),
    radial-gradient(circle at 88% 2%, rgba(232, 239, 207, 0.42), transparent 26%),
    #fffdf8;
  color: #3d321d;
  font-family:
    "MaruBuri",
    "Segoe UI",
    "Pretendard",
    system-ui,
    sans-serif;
`;

const Shell = styled.section`
  width: min(100% - 120px, 1500px);
  margin: 0 auto;
  padding: 30px 0 34px;

  @media (max-width: 760px) {
    width: min(100% - 32px, 1620px);
    padding-top: 30px;
  }
`;

const Hero = styled.section`
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1fr) 520px;
  align-items: center;
  gap: 58px;
  min-height: 142px;
  margin-bottom: 18px;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

const LeafCluster = styled.img`
  position: absolute;
  left: -78px;
  top: -2px;
  width: 142px;
  height: 118px;
  object-fit: contain;
  transform: rotate(-16deg);
  opacity: 0.78;
`;

const HeroCopy = styled.div`
  padding: 14px 0 0 96px;

  @media (max-width: 980px) {
    padding-left: 0;
  }
`;

const PageTitle = styled.h1`
  margin: 0;
  font-size: clamp(42px, 3.6vw, 58px);
  line-height: 1.02;
  color: #33451f;
  font-weight: 900;
  letter-spacing: 0;
`;

const Subtitle = styled.p`
  margin: 14px 0 0;
  color: #714c31;
  font-size: 19px;
  font-weight: 700;
`;

const HeroTools = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  justify-content: flex-end;
  gap: 16px;
  padding: 18px 20px;
  border: 1px solid rgba(226, 212, 188, 0.72);
  border-radius: 28px;
  background:
    radial-gradient(circle at 12% 50%, rgba(255, 246, 220, 0.82), transparent 32%),
    rgba(255, 251, 241, 0.54);
  box-shadow: 0 12px 30px rgba(114, 83, 42, 0.045);
`;

const SearchBox = styled.label`
  width: 100%;
  height: 66px;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0 18px;
  border: 1px solid #dfd4bd;
  border-radius: 20px;
  background: rgba(255, 252, 244, 0.96);
  box-shadow: 0 8px 20px rgba(114, 83, 42, 0.055);
  box-sizing: border-box;
  z-index: 2;

  @media (max-width: 560px) {
    width: 100%;
  }
`;

const SearchIcon = styled.span`
  color: #b5a68d;
  font-size: 27px;
  font-weight: 900;
`;

const SearchInput = styled.input`
  width: 100%;
  border: 0;
  outline: 0;
  background: transparent;
  color: #5b432e;
  font-size: 18px;
  font-weight: 700;

  &::placeholder {
    color: #ad9c82;
  }
`;

const SearchLens = styled.span`
  color: #9f927f;
  font-size: 34px;
  font-weight: 900;
`;

const FilterButton = styled.button`
  width: 118px;
  height: 62px;
  border: 1px solid #e1d4b9;
  border-radius: 999px;
  background: #fff7e6;
  color: #80572e;
  font-size: 17px;
  font-weight: 900;
  cursor: pointer;
  transition:
    border-color 160ms ease,
    background 160ms ease,
    transform 160ms ease;

  &:hover {
    background: #fff1d4;
    border-color: #cdbb91;
    transform: translateY(-1px);
  }
`;

const FilterGlyph = styled.span`
  margin-left: 6px;
  color: #a47d35;
`;

const FilterWrap = styled.div`
  position: relative;
`;

const FilterMenu = styled.div`
  position: absolute;
  right: 0;
  top: calc(100% + 12px);
  z-index: 20;
  width: 172px;
  display: grid;
  gap: 8px;
  padding: 12px;
  border: 1px solid #e2d6be;
  border-radius: 18px;
  background: rgba(255, 252, 244, 0.98);
  box-shadow: 0 16px 34px rgba(92, 71, 44, 0.12);
`;

const FilterOption = styled.button`
  height: 38px;
  border: 1px solid ${({ $active }) => ($active ? "#74864a" : "transparent")};
  border-radius: 999px;
  background: ${({ $active }) => ($active ? "#74864a" : "rgba(249, 240, 220, 0.74)")};
  color: ${({ $active }) => ($active ? "#fffdf4" : "#754c2e")};
  font-size: 14px;
  font-weight: 900;
  cursor: pointer;
  transition:
    background 150ms ease,
    color 150ms ease,
    transform 150ms ease;

  &:hover {
    transform: translateY(-1px);
    background: ${({ $active }) => ($active ? "#74864a" : "#f2e4c8")};
  }
`;

const TeaGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px 24px;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

const TeaCard = styled.article`
  position: relative;
  min-height: 206px;
  border: 1px solid color-mix(in srgb, ${({ $accent }) => $accent} 22%, #dfd4bd);
  border-radius: 14px;
  background:
    radial-gradient(circle at 78% 58%, rgba(255, 255, 255, 0.72), transparent 38%),
    ${({ $tone }) => $tone};
  overflow: hidden;
  padding: 28px 28px;
  box-sizing: border-box;
  box-shadow: 0 2px 8px rgba(92, 71, 44, 0.025);
  cursor: pointer;
  transition:
    transform 180ms ease,
    border-color 180ms ease,
    box-shadow 180ms ease,
    background 180ms ease;

  &:hover {
    transform: translateY(-6px);
    border-color: color-mix(in srgb, ${({ $accent }) => $accent} 46%, #d7c8a8);
    box-shadow: 0 14px 28px rgba(92, 71, 44, 0.09);
  }

  &:hover img {
    transform: scale(1.04);
  }
`;

const CardText = styled.div`
  position: relative;
  z-index: 2;
  width: 48%;
  text-align: left;
`;

const TeaName = styled.h2`
  margin: 0;
  color: #5a321d;
  font-size: 29px;
  line-height: 1.08;
  font-weight: 900;
  letter-spacing: 0;
`;

const TeaEnglish = styled.p`
  margin: 8px 0 14px;
  color: #5c3520;
  font-family: Georgia, "Times New Roman", serif;
  font-size: 17px;
`;

const TeaDescription = styled.p`
  margin: 0;
  color: #64452d;
  font-size: 15px;
  font-weight: 700;
  line-height: 1.7;
`;

const HeartButton = styled.button`
  position: absolute;
  right: 22px;
  top: 20px;
  z-index: 3;
  width: 34px;
  height: 34px;
  display: inline-grid;
  place-items: center;
  border: 0;
  background: transparent;
  color: ${({ $liked }) => ($liked ? "#d4864a" : "#a58b42")};
  font-size: 31px;
  line-height: 1;
  cursor: pointer;
  padding: 0;
  transition:
    color 160ms ease,
    transform 160ms ease;

  ${TeaCard}:hover & {
    color: ${({ $liked }) => ($liked ? "#d4864a" : "#8ca05b")};
    transform: scale(1.08);
  }
`;

const TeaImage = styled.img`
  position: absolute;
  right: 18px;
  bottom: 8px;
  width: 58%;
  height: 176px;
  object-fit: contain;
  object-position: right bottom;
  filter: drop-shadow(0 14px 12px rgba(117, 83, 42, 0.08));
  transition: transform 180ms ease;
`;

const EmptyState = styled.div`
  margin: 4px 0 0;
  min-height: 170px;
  display: grid;
  place-items: center;
  gap: 8px;
  border: 1px dashed #d9c8a7;
  border-radius: 22px;
  background: rgba(255, 252, 244, 0.74);
  color: #8b7257;
  font-weight: 800;
`;

const EmptyCup = styled.span`
  font-size: 38px;
`;

const BottomBanner = styled.aside`
  position: relative;
  width: min(100%, 1420px);
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  margin: 34px auto 0;
  border-radius: 999px;
  background:
    radial-gradient(circle at 8% 50%, rgba(255, 246, 220, 0.9), transparent 18%),
    radial-gradient(circle at 92% 50%, rgba(255, 246, 220, 0.9), transparent 18%),
    rgba(255, 250, 236, 0.66);
  box-shadow: inset 0 0 0 1px rgba(232, 218, 191, 0.54);
  overflow: visible;
`;

const BottomTea = styled.img`
  position: absolute;
  left: 46px;
  bottom: -48px;
  width: 266px;
  height: 168px;
  object-fit: contain;
`;

const BottomLeavesLeft = styled.img`
  position: absolute;
  left: 14px;
  top: -22px;
  width: 84px;
  height: 84px;
  object-fit: contain;
  opacity: 0.58;
  transform: rotate(-10deg);
`;

const BannerText = styled.p`
  margin: 0;
  color: #684226;
  font-size: 21px;
  font-weight: 900;
`;

const BottomMascot = styled.img`
  position: absolute;
  right: 122px;
  bottom: -88px;
  width: 258px;
  height: 258px;
  object-fit: contain;
`;

const BottomLeavesRight = styled.img`
  position: absolute;
  right: 28px;
  bottom: -6px;
  width: 92px;
  height: 72px;
  object-fit: contain;
  opacity: 0.42;
  transform: rotate(18deg) scaleX(-1);
`;
