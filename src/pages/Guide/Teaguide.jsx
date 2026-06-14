import { useState, useRef, useEffect } from "react";
import {
  PageWrapper,
  ContentGrid,
  LeftCol,
  RightCol,
  Header,
  HeaderLeft,
  TeapotIcon,
  HeaderTitle,
  HeaderSubtitle,
  TeaSelector,
  // TeaDropdownBtn,
  TeaIcon,
  TeaName,
  ChevronIcon,
  DropdownMenu,
  DropdownItem,
  DropdownImg,
  StepNav,
  StepList,
  StepItem,
  StepDot,
  StepDotInner,
  StepConnector,
  StepLabel,
  VideoSection,
  VideoWrapper,
  PlayBtn,
  VideoMeta,
  StepContent,
  StepBadge,
  StepTitle,
  StepDesc,
  StepIllustration,
  TipBox,
  TipLeaf,
  TipText,
  NavRow,
  PrevBtn,
  NextBtn,
} from "./Teaguide.styles";

import beanChar from "../../assets/img/beanChar.png";
import boilTea from "../../assets/img/boilTea.png";
import kettle2 from "../../assets/img/kettle2.png";
import leavesImg from "../../assets/img/leaves.png";
import dechuImg from "../../assets/img/dechu.png";
import gingerImg from "../../assets/img/ginger.png";
import omijaImg from "../../assets/img/omija.png";
import yujaImg from "../../assets/img/yuja.png";
import gughwaImg from "../../assets/img/gughwa.png";
import mogwaImg from "../../assets/img/mogwa.png";
import plumImg from "../../assets/img/plum.png";

const TEA_LIST = [
  { id: "nokcha",  name: "녹차",   img: leavesImg  },
  { id: "ginger",  name: "생강차", img: gingerImg  },
  { id: "omija",   name: "오미자차", img: omijaImg  },
  { id: "gughwa",  name: "국화차", img: gughwaImg  },
  { id: "mogwa",   name: "모과차", img: mogwaImg   },
  { id: "dechu",   name: "대추차", img: dechuImg   },
  { id: "plum",    name: "매실차", img: plumImg    },
  { id: "yuja",    name: "유자차", img: yujaImg    },
];

const STEPS = [
  {
    num: 1, label: "물 끓이기", title: "물 끓이기",
    desc: "깨끗한 물을 준비하여 70~80℃로 끓여주세요.",
    tip: "너무 끓는 물(100℃)은 찻잎을 상하게 할 수 있어요!",
    illustration: boilTea,
    videoId: "Z_hbWiWE_tk", duration: "0:45",
  },
  {
    num: 2, label: "다구 데우기", title: "다구 데우기",
    desc: "찻주전자와 찻잔에 뜨거운 물을 부어 데워주세요. 이 과정으로 차의 온도를 유지할 수 있어요.",
    tip: "다구를 데우면 차가 빨리 식지 않아요.",
    illustration: boilTea,
    videoId: "fxDz9QCNJp0", duration: "1:02",
  },
  {
    num: 3, label: "차 우리기", title: "차 우리기",
    desc: "찻주전자에 찻잎을 넣고 적당한 온도의 물을 부어 1~2분간 우려주세요.",
    tip: "우리는 시간이 길어지면 쓴맛이 강해져요.",
    illustration: boilTea,
    videoId: "P3ZKWZ2SXJA", duration: "1:30",
  },
  {
    num: 4, label: "따르기", title: "따르기",
    desc: "우린 차를 여러 잔에 골고루 조금씩 번갈아 따라주세요. 차의 농도를 균일하게 맞추는 방법이에요.",
    tip: "한 잔씩 가득 채우지 말고, 조금씩 돌아가며 따르세요.",
    illustration: boilTea,
    videoId: "B4iHxzxkODE", duration: "0:50",
  },
  {
    num: 5, label: "음미하기", title: "음미하기",
    desc: "두 손으로 찻잔을 감싸 쥐고, 향을 먼저 맡은 뒤 천천히 음미하세요.",
    tip: "차를 마시기 전 먼저 향을 충분히 느껴보세요.",
    illustration: boilTea,
    videoId: "zEdofJsJpJg", duration: "1:10",
  },
];

export default function TeaGuide() {
  const [selectedTea, setSelectedTea] = useState(TEA_LIST[0]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [playing, setPlaying] = useState(false);
  const dropdownRef = useRef(null);

  const step = STEPS[currentStep];

  useEffect(() => {
    const handleClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const handleGoToStep = (i) => {
    setCurrentStep(i);
    setPlaying(false);
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep((s) => s - 1);
      setPlaying(false);
    }
  };

  const handleNext = () => {
    if (currentStep < STEPS.length - 1) {
      setCurrentStep((s) => s + 1);
      setPlaying(false);
    }
  };

  return (
    <PageWrapper>
      {/* ── Header ── */}
      <Header>
        <HeaderLeft>
          <TeapotIcon src={kettle2} alt="teapot" />
          <div>
            <HeaderTitle>다도 가이드</HeaderTitle>
            <HeaderSubtitle>단계별로 천천히, 함께 해요.</HeaderSubtitle>
          </div>
        </HeaderLeft>

        <div ref={dropdownRef} style={{ position: "relative" }}>
          <TeaSelector onClick={() => setDropdownOpen((v) => !v)}>
            <span style={{ fontSize: "11px", color: "#888" }}>선택한 차</span>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <TeaIcon src={selectedTea.img} alt={selectedTea.name} />
              <TeaName>{selectedTea.name}</TeaName>
              <ChevronIcon $open={dropdownOpen}>▾</ChevronIcon>
            </div>
          </TeaSelector>

          {dropdownOpen && (
            <DropdownMenu>
              {TEA_LIST.map((tea) => (
                <DropdownItem
                  key={tea.id}
                  $active={tea.id === selectedTea.id}
                  onClick={() => {
                    setSelectedTea(tea);
                    setDropdownOpen(false);
                  }}
                >
                  <DropdownImg src={tea.img} alt={tea.name} />
                  {tea.name}
                </DropdownItem>
              ))}
            </DropdownMenu>
          )}
        </div>
      </Header>

      {/* ── Step Nav ── */}
        <StepNav>
          <StepList>
            {STEPS.map((s, i) => (
              <div key={s.num} style={{ display: "flex", alignItems: "flex-start" }}>
                <StepItem onClick={() => handleGoToStep(i)}>
                  <StepDot $active={i === currentStep} $done={i < currentStep}>
                    <StepDotInner $active={i === currentStep} $done={i < currentStep}>
                      {i < currentStep ? "✓" : s.num}
                    </StepDotInner>
                  </StepDot>
                  <StepLabel $active={i === currentStep} $done={i < currentStep}>
                    {s.label}
                  </StepLabel>
                </StepItem>
                {i < STEPS.length - 1 && (
                  <StepConnector $done={i < currentStep} />
                )}
              </div>
            ))}
          </StepList>
        </StepNav>

      {/* ── 2-column grid ── */}
      <ContentGrid>
        {/* Left: Video */}
        <LeftCol>
          <VideoSection>
            <VideoWrapper>
              {playing ? (
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${step.videoId}?autoplay=1&rel=0`}
                  title={step.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
                />
              ) : (
                <>
                  <img
                    src={`https://img.youtube.com/vi/${step.videoId}/hqdefault.jpg`}
                    alt={step.title}
                  />
                  <PlayBtn onClick={() => setPlaying(true)}>▶</PlayBtn>
                  <VideoMeta>{`0:00 / ${step.duration}`}</VideoMeta>
                </>
              )}
            </VideoWrapper>
          </VideoSection>
        </LeftCol>

        {/* Right: Step content + nav */}
        <RightCol>
          <StepContent>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div style={{ flex: 1 }}>
                <StepBadge>{step.num}단계</StepBadge>
                <StepTitle>{step.title}</StepTitle>
                <StepDesc>{step.desc}</StepDesc>
              </div>
              <StepIllustration src={step.illustration} alt={step.title} />
            </div>

            <TipBox>
              <TipLeaf src={leavesImg} alt="tip leaf" />
              <div>
                <div style={{ fontWeight: 700, fontSize: "13px", marginBottom: "4px", color: "#4a7c59" }}>TIP</div>
                <TipText>{step.tip}</TipText>
              </div>
              <img
                src={beanChar}
                alt="mascot"
                style={{ width: "70px", height: "70px", objectFit: "contain", marginLeft: "auto", flexShrink: 0 }}
              />
            </TipBox>
          </StepContent>

          <NavRow>
            <PrevBtn onClick={handlePrev} disabled={currentStep === 0}>
              ‹ 이전 단계
            </PrevBtn>
            <NextBtn onClick={handleNext} disabled={currentStep === STEPS.length - 1}>
              다음 단계 ›
            </NextBtn>
          </NavRow>
        </RightCol>
      </ContentGrid>
    </PageWrapper>
  );
}