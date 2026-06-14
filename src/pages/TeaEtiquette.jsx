import styled from "styled-components";

import quoteCharacter from "../assets/charactor3.png";
import etiquetteBow from "../assets/etiquette-bow.png";
import etiquetteCup from "../assets/etiquette-cup.png";
import etiquetteDrink from "../assets/etiquette-drink.png";
import etiquetteHeroImage from "../assets/etiquette-hero.png";
import etiquettePosture from "../assets/etiquette-posture.png";
import etiquetteSmell from "../assets/etiquette-smell.png";
import etiquetteThanks from "../assets/etiquette-thanks.png";

const ETIQUETTE_STEPS = [
  {
    number: "1",
    title: "바른 자세",
    description: "허리를 곧게 펴고 단정하게 앉아 마음을 차분히 해요.",
    tip: "등을 세우면 마음도 함께 차분해져요.",
    align: "right",
    tone: "#f6f8e9",
    image: etiquettePosture,
  },
  {
    number: "2",
    title: "공손한 인사",
    description: "차를 함께 마시는 사람에게 공손히 인사해요.",
    tip: "차를 나누기 전, 먼저 마음을 전해요.",
    align: "left",
    tone: "#fff8ed",
    image: etiquetteBow,
  },
  {
    number: "3",
    title: "두 손으로 찻잔 받기",
    description: "찻잔은 두 손으로 공손하게 받아 감사한 마음을 표현해요.",
    tip: "두 손은 상대를 존중하는 작은 약속이에요.",
    align: "right",
    tone: "#f8f5e6",
    image: etiquetteCup,
  },
  {
    number: "4",
    title: "차 향 음미하기",
    description: "차를 마시기 전 향을 먼저 느끼며 차의 향기를 음미해요.",
    tip: "향을 천천히 느끼면 차의 깊이가 보여요.",
    align: "left",
    tone: "#fff9ed",
    image: etiquetteSmell,
  },
  {
    number: "5",
    title: "차 마시는 예절",
    description: "소리 내지 않고 천천히 마시며 차의 맛을 음미해요.",
    tip: "한 모금씩 천천히, 조용히 마셔요.",
    align: "right",
    tone: "#f7f9ea",
    image: etiquetteDrink,
  },
  {
    number: "6",
    title: "감사의 마음",
    description: "차를 준비한 사람에게 감사의 마음을 전하고 예절을 마무리해요.",
    tip: "감사는 다도 예절의 가장 따뜻한 마무리예요.",
    align: "left",
    tone: "#fff7ea",
    image: etiquetteThanks,
  },
];

export default function TeaEtiquette() {
  return (
    <Page>

      <Hero>
        <HeroImage
          src={etiquetteHeroImage}
          alt="다도 예절. 다도는 차를 마시는 기술이 아니라 마음을 나누는 문화예요."
        />
      </Hero>

      <Main>
        <StepsPanel>
          <StepsIntro>
            <IntroText>
              <IntroKicker>6가지 예절을 따라</IntroKicker>
              <IntroTitle>차 한 잔의 마음을 배워봐요.</IntroTitle>
            </IntroText>
          </StepsIntro>

          <StepsList aria-label="다도 예절 6단계">
            <TimelineLine />
            {ETIQUETTE_STEPS.map((step) => (
              <StepItem key={step.number}>
                <StepBadge>{step.number}</StepBadge>
                <StepContent>
                  <StepTitle>{step.title}</StepTitle>
                  <StepDescription>{step.description}</StepDescription>
                </StepContent>
                <StepArt>
                  <StepImage src={step.image} alt="" aria-hidden="true" />
                </StepArt>
              </StepItem>
            ))}
          </StepsList>
        </StepsPanel>

        <QuoteBanner>
          <QuoteText>
            <span>
              <QuoteMark aria-hidden="true">“</QuoteMark>
              다도는
              <br />
              상대를 존중하는 마음입니다.
              <QuoteMark aria-hidden="true">”</QuoteMark>
            </span>
          </QuoteText>
          <FloatingLeaf $left="18%" $top="28%" $rotate="-18deg" />
          <FloatingLeaf $left="61%" $top="43%" $rotate="6deg" />
          <FloatingLeaf $left="88%" $top="30%" $rotate="28deg" />
          <QuoteMascot src={quoteCharacter} alt="" />
        </QuoteBanner>
      </Main>
    </Page>
  );
}

const Page = styled.main`
  min-height: 100vh;
  background:
    radial-gradient(circle at 14% 6%, rgba(234, 225, 193, 0.34), transparent 30%),
    radial-gradient(circle at 86% 12%, rgba(218, 227, 187, 0.28), transparent 32%),
    linear-gradient(180deg, #f8f3e6 0%, #f5edd9 46%, #f1e5cb 100%);
  color: #3d321d;
  font-family:
    "MaruBuri",
    "Segoe UI",
    "Pretendard",
    system-ui,
    sans-serif;
`;

const Hero = styled.section`
  width: 100%;
  max-height: 500px;
  margin: 0 auto;
  border-bottom: 1px solid #ebe2d0;
  background: #f8f3e6;
  overflow: hidden;
`;

const HeroImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

const Main = styled.section`
  width: min(100% - 80px, 1440px);
  margin: 0 auto;
  padding: 42px 0 50px;
`;

const StepsPanel = styled.section`
  width: 100%;
  margin: 0 auto;
  padding: 0;
  background: transparent;
`;

const StepsIntro = styled.header`
  display: flex;
  align-items: flex-end;
  gap: 18px;
  width: min(100%, 1180px);
  margin: 0 auto 28px;
  padding-left: 96px;
`;

const IntroText = styled.div`
  color: #435725;
`;

const IntroKicker = styled.p`
  margin: 0 0 8px;
  color: #7d9a5a;
  font-size: 21px;
  font-weight: 700;
`;

const IntroTitle = styled.h2`
  margin: 0;
  color: #31451e;
  font-size: 34px;
  font-weight: 700;
  line-height: 1.35;
`;

const StepsList = styled.section`
  position: relative;
  display: grid;
  gap: 0;
  width: min(100%, 1180px);
  margin: 0 auto;
  padding: 0;
`;

const TimelineLine = styled.span`
  position: absolute;
  left: 44px;
  top: 34px;
  bottom: 58px;
  width: 2px;
  background:
    repeating-linear-gradient(
      180deg,
      rgba(125, 154, 90, 0.72) 0 10px,
      transparent 10px 18px
    );
`;

const StepItem = styled.article`
  position: relative;
  display: grid;
  grid-template-columns: 88px minmax(400px, 520px) minmax(420px, 520px);
  min-height: 172px;
  align-items: center;
  gap: 36px;

  &:not(:last-child)::after {
    content: "";
    position: absolute;
    left: 160px;
    right: 0;
    bottom: 0;
    height: 1px;
    background: #ebe2d0;
  }
`;

const StepBadge = styled.span`
  grid-column: 1;
  justify-self: center;
  width: 56px;
  height: 56px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: #dfe6bd;
  color: #435725;
  font-size: 27px;
  font-weight: 700;
  z-index: 4;
  box-shadow: inset 0 0 0 1px rgba(125, 154, 90, 0.16);
`;

const StepContent = styled.div`
  grid-column: 2;
  padding: 14px 0;
`;

const StepTitle = styled.h3`
  margin: 0 0 14px;
  color: #31451e;
  font-size: 36px;
  font-weight: 700;
  line-height: 1.2;
`;

const StepDescription = styled.p`
  margin: 0;
  max-width: 540px;
  color: #292721;
  font-size: 22px;
  font-weight: 600;
  line-height: 1.7;
  word-break: keep-all;
`;

const StepArt = styled.div`
  position: relative;
  grid-column: 3;
  height: 172px;
`;

const StepImage = styled.img`
  position: absolute;
  left: 50%;
  bottom: -8px;
  width: min(100%, 430px);
  height: 182px;
  object-fit: contain;
  transform: translateX(-50%);
  filter: drop-shadow(0 12px 10px rgba(92, 71, 44, 0.08));
`;

const QuoteBanner = styled.aside`
  position: relative;
  height: 210px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 38px;
  padding: 0 90px;
  border: 1px solid #e4dcc7;
  border-radius: 22px;
  background:
    radial-gradient(ellipse at 8% 88%, rgba(134, 153, 104, 0.18) 0 18%, transparent 19%),
    radial-gradient(ellipse at 17% 94%, rgba(134, 153, 104, 0.15) 0 19%, transparent 20%),
    radial-gradient(ellipse at 78% 92%, rgba(134, 153, 104, 0.16) 0 21%, transparent 22%),
    radial-gradient(ellipse at 94% 90%, rgba(134, 153, 104, 0.15) 0 18%, transparent 19%),
    linear-gradient(180deg, rgba(255, 252, 238, 0.92), rgba(237, 236, 206, 0.84));
  box-shadow:
    inset 0 0 0 1px rgba(255, 255, 255, 0.42),
    0 12px 28px rgba(92, 71, 44, 0.055);
  overflow: hidden;
`;

const QuoteMark = styled.span`
  display: inline-block;
  color: rgba(125, 154, 90, 0.46);
  font-size: 34px;
  font-weight: 700;
  line-height: 1;
  transform: translateY(-10px);

  &:first-child {
    margin-right: 18px;
  }

  &:last-child {
    margin-left: 18px;
  }
`;

const QuoteText = styled.p`
  position: relative;
  z-index: 2;
  margin: 0;
  color: #435725;
  width: 62%;
  font-size: 38px;
  font-weight: 700;
  line-height: 1.6;
  text-align: center;
`;

const QuoteMascot = styled.img`
  position: absolute;
  right: 120px;
  bottom: -50px;
  width: 490px;
  height: 340px;
  border-radius: 28px;
  object-fit: cover;
  object-position: 50% 62%;
  filter: drop-shadow(0 12px 12px rgba(92, 71, 44, 0.1));
`;

const FloatingLeaf = styled.span`
  position: absolute;
  left: ${({ $left }) => $left};
  top: ${({ $top }) => $top};
  width: 24px;
  height: 12px;
  border-radius: 100% 0 100% 0;
  background: rgba(125, 154, 90, 0.28);
  transform: rotate(${({ $rotate }) => $rotate});
  z-index: 1;
`;
