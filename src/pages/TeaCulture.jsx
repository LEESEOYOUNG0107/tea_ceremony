import styled from "styled-components";

import bannerCharacterImage from "../assets/charactor2.png";
import characterImage from "../assets/charactor.png";
import cultureHeroImage from "../assets/etiquette-hero2.png";
import spiritImage from "../assets/다도의 정신.png";
import teaToolsImage from "../assets/image.png";
import teaSetImage from "../assets/tea.png";
import cultureBuildingImage from "../assets/한국다도문화1.png";
import cultureTeapotImage from "../assets/한국다도문화2.png";
import cultureTempleImage from "../assets/한국다도문화3.png";
import cultureCupImage from "../assets/한국다도문화4.png";
import cultureModernCupImage from "../assets/한국다도문화5.png";

const HISTORY_ITEMS = [
  {
    period: "삼국시대",
    text: "불교와 함께 차 문화가 들어왔어요.",
    image: cultureTempleImage,
  },
  {
    period: "통일신라",
    text: "차를 마시는 풍습이 널리 퍼졌어요.",
    image: cultureCupImage,
  },
  {
    period: "고려",
    text: "다구와 차 문화가 크게 발전했어요.",
    image: cultureTeapotImage,
  },
  {
    period: "조선",
    text: "유교 문화의 영향으로 다도가 정착했어요.",
    image: cultureBuildingImage,
  },
  {
    period: "현대",
    text: "전통을 이어가며 현대적으로 발전하고 있어요.",
    image: cultureModernCupImage,
  },
];

export default function TeaCulture() {
  return (
    <Page>

      <Hero>
        <HeroImage
          src={cultureHeroImage}
          alt="한국 다도 문화. 차 한 잔 속에 담긴 우리의 역사와 예절을 알아보아요."
        />
      </Hero>

      <Shell>
        <IntroCard>
          <IntroContent>
            <IntroTitleRow>
              <SectionNumber>01</SectionNumber>
              <SectionTitle>다도란?</SectionTitle>
            </IntroTitleRow>
            <IntroText>
              다도는 차를 통해 마음을 수양하고 예절을 배우는 한국의
              전통 문화입니다.
            </IntroText>
          </IntroContent>
          <IntroImage src={characterImage} alt="" aria-hidden="true" />
        </IntroCard>

        <HistoryCard>
          <SectionHeader>
            <SectionNumber>02</SectionNumber>
            <SectionTitle>한국 다도의 역사</SectionTitle>
          </SectionHeader>
          <Timeline>
            {HISTORY_ITEMS.map((item) => (
              <HistoryItem key={item.period}>
                <HistoryIcon src={item.image} alt="" aria-hidden="true" />
                <HistoryPeriod>{item.period}</HistoryPeriod>
                <HistoryText>{item.text}</HistoryText>
              </HistoryItem>
            ))}
          </Timeline>
        </HistoryCard>

        <TwoColumn>
          <ToolsCard>
            <ToolsFullImage src={teaToolsImage} alt="대표 다구 일러스트" />
          </ToolsCard>

          <SpiritCard>
            <SpiritFullImage src={spiritImage} alt="다도의 정신. 화, 경, 청" />
          </SpiritCard>
        </TwoColumn>

        <BottomBanner>
          <BannerMascot src={bannerCharacterImage} alt="" aria-hidden="true" />
          <BannerQuote>
            “ 우리의 다도 문화는
            <br />
            차를 통해 마음을 나누는 아름다운 전통입니다. ”
          </BannerQuote>
          <BannerTea src={teaSetImage} alt="" aria-hidden="true" />
        </BottomBanner>
      </Shell>
    </Page>
  );
}

const Page = styled.main`
  min-height: 100vh;
  background:
    radial-gradient(circle at 18% 8%, rgba(250, 239, 205, 0.46), transparent 28%),
    radial-gradient(circle at 84% 10%, rgba(232, 239, 207, 0.42), transparent 28%),
    #fffdf8;
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
  border-bottom: 1px solid #ebe2d0;
  background: #fffaf0;
  overflow: hidden;
`;

const HeroImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

const Shell = styled.section`
  width: min(100% - 64px, 1420px);
  margin: 0 auto;
  padding: 34px 0 48px;
`;

const SectionNumber = styled.span`
  color: #434E10;
  font-size: 50px;
  font-weight: 700;
`;

const SectionTitle = styled.h2`
  margin: 0;
  color: #405625;
  font-size: 40px;
  font-weight: 700;
`;

const SectionHeader = styled.header`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const IntroCard = styled.section`
  position: relative;
  height: 248px;
  display: grid;
  grid-template-columns: 1fr minmax(420px, 520px);
  align-items: start;
  gap: 18px;
  padding: 24px 48px 30px;
  border: 1px solid #e6dbc4;
  border-radius: 16px;
  background: rgba(255, 252, 244, 0.82);
  overflow: hidden;
`;

const IntroContent = styled.div`
  display: grid;
  gap: 20px;
  padding-top: 0;
`;

const IntroTitleRow = styled.div`
  display: flex;
  align-items: baseline;
  gap: 16px;
`;

const IntroText = styled.p`
  margin: 0;
  max-width: 430px;
  color: #5a4a32;
  font-size: 24px;
  font-weight: 600;
  line-height: 1.8;
  word-break: keep-all;
`;

const IntroImage = styled.img`
  justify-self: center;
  align-self: start;
  width: 380px;
  height: 246px;
  object-fit: contain;
  transform: translateY(-16px);
`;

const HistoryCard = styled.section`
  margin-top: 16px;
  padding: 28px 44px 34px;
  border: 1px solid #e6dbc4;
  border-radius: 16px;
  background: rgba(255, 252, 244, 0.82);
`;

const Timeline = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 24px;
  margin-top: 24px;

  &::before {
    content: "";
    position: absolute;
    left: 10%;
    right: 10%;
    top: 54px;
    border-top: 2px dashed rgba(125, 154, 90, 0.46);
  }
`;

const HistoryItem = styled.article`
  position: relative;
  z-index: 2;
  display: grid;
  justify-items: center;
  text-align: center;
`;

const HistoryIcon = styled.img`
  width: 108px;
  height: 108px;
  padding: 13px;
  border-radius: 50%;
  background: #f7efd9;
  object-fit: contain;
  filter: drop-shadow(0 8px 8px rgba(92, 71, 44, 0.08));
`;

const HistoryPeriod = styled.h3`
  margin: 14px 0 10px;
  color: #5a432b;
  font-size: 18px;
  font-weight: 700;
`;

const HistoryText = styled.p`
  margin: 0;
  max-width: 132px;
  color: #6a5a43;
  font-size: 15px;
  font-weight: 600;
  line-height: 1.65;
  word-break: keep-all;
`;

const TwoColumn = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-top: 16px;
`;

const ToolsCard = styled.section`
  aspect-ratio: 1378 / 1142;
  border: 1px solid #e6dbc4;
  border-radius: 16px;
  background: #fffaf0;
  overflow: hidden;
`;

const ToolsFullImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  background: #fffaf0;
`;

const SpiritCard = styled.section`
  aspect-ratio: 1378 / 1142;
  border-radius: 16px;
  background: #fffaf0;
  overflow: hidden;
`;

const SpiritFullImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
  background: #fffaf0;
`;

const BottomBanner = styled.aside`
  position: relative;
  height: 130px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
  border: 1px solid #e6dbc4;
  border-radius: 16px;
  background:
    radial-gradient(ellipse at 10% 94%, rgba(134, 153, 104, 0.16) 0 22%, transparent 23%),
    radial-gradient(ellipse at 92% 92%, rgba(134, 153, 104, 0.15) 0 22%, transparent 23%),
    linear-gradient(180deg, rgba(255, 252, 238, 0.9), rgba(237, 236, 206, 0.78));
  overflow: hidden;
`;

const BannerMascot = styled.img`
  position: absolute;
  left: 58px;
  bottom: -5px;
  width: 216px;
  height: 128px;
  border-radius: 24px;
  object-fit: cover;
  object-position: 50% 58%;
`;

const BannerQuote = styled.p`
  margin: 0;
  color: #435725;
  font-size: 25px;
  font-weight: 700;
  line-height: 1.55;
  text-align: center;
`;

const BannerTea = styled.img`
  position: absolute;
  right: 42px;
  bottom: -16px;
  width: 260px;
  height: 170px;
  object-fit: contain;
`;
