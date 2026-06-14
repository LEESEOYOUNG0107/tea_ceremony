import styled, { keyframes } from "styled-components";


const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
`;

/* ── 페이지 전체 레이아웃 ── */
export const PageWrap = styled.div`
  margin: 0 auto;
  padding: 0;
  display: flex;
  flex-direction: column;
  animation: ${fadeUp} 0.45s ease both;
  overflow: hidden;
`;

/* ── Hero 카드 ── */
export const HeroCard = styled.div`
  overflow: hidden;
  position: relative;
`;

export const HeroContent = styled.div`
  display: flex;
`;

export const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-top: 10%;
`;

export const HeroBadge = styled.div`
  display: inline-block;
  color: #8D6E63;
  font-size: 20px;
  font-weight: 600;
  margin-left: 90px;
`;

export const HeroTitle = styled.h1`
  font-size: 32px;
  font-weight: 700;
  line-height: 1.3;
  color: #5C4A32;
  word-break: keep-all;
  margin-left: 90px;
`;

export const HeroDesc = styled.p`
  font-size: 16px;
  color: #8D7B6A;
  line-height: 1.8;
  word-break: keep-all;
  margin-left: 90px;
`;

export const WindowImg = styled.img`
  display: inline-block;
  width: 720px;
  margin-right: -250px;
`;

/* ── 캐릭터 일러스트 영역 ── */
export const CharacterArea = styled.div`
  position: relative;
  height: 320px;
  width: 100%;
  margin-top: -100px;
`;

export const CharImg = styled.img`
  position: absolute;
  object-fit: contain;
  pointer-events: none;
`;

/* ── 다도란? 카드 ── */
export const InfoCard = styled.div`
  margin: 50px 250px;
  border-radius: 18px;
  border: 1px solid #FAF4EB;
  padding: 20px 22px;
  background: #FDF9F3;
`;

export const CardSectionTitle = styled.div`
  margin-bottom: -12px;
  margin-left: 40px;
  font-size: 20px;
  font-weight: 700;
  color: #5C4A32;
  display: flex;
  align-items: center;
`;

export const CardSectionTitle2 = styled.div`
  margin-left: 100px;
  font-size: 20px;
  font-weight: 700;
  color: #5C4A32;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const InfoCardInner = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const InfoLeafImg = styled.img`
  width: 30px;
  height: 30px;
  flex-shrink: 0;
  margin-top: 16px;
  margin-right: 10px;
`;

export const InfoCardText = styled.p`
  font-size: 16px;
  color: #8D7B6A;
  line-height: 1.85;
  word-break: keep-all;
`;

export const InfoteaImg = styled.img`
  width: 120px;
`;

/* ── 준비물 섹션 ── */
export const PrepSection = styled.div`
  width: 70%;
  padding: 22px 22px 24px;
  position: relative;
`;

export const ToolsGrid = styled.div`
  margin-left: 28%;
  margin-top: 70px;
  display: flex;
  gap: 40px
`;

export const ToolItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ToolIconWrap = styled.div`
  width: 150px;
  height: 160px;
  border-radius: 10%;
  background: #FAF4E7;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: transform 0.15s;

  &:hover { transform: scale(1.07); }
`;

export const ToolImg = styled.img`
  width: 142px;
  height: 142px;
  object-fit: contain;
`;

export const ToolName = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: #5C4A32;
  text-align: center;
`;

export const ToolSubName = styled.p`
  font-size: 15px;
  color: #BDB7A4;
  text-align: center;
  margin-top: -5px;
  word-break: keep-all;
  line-height: 1.4;
`;

/* ── CTA 버튼 ── */
export const CTAButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40%;
  background: #747D3D;
  color: #F6EFE3;
  font-size: 17px;
  font-weight: 700;
  padding: 18px;
  border-radius: 50PX;
  text-decoration: none;
  transition: background 0.2s, transform 0.15s;
  margin-left: 30%;
  margin-top: 70px;
  margin-bottom: 50px;
  border: none;
  cursor: pointer;

  &:hover {
    background: #7a8c51c5;
    transform: translateY(-2px);
  }
  &:active { transform: translateY(0); }
`;

export const BottomFlower = styled.img`
  width: 162px;
  position: absolute;
  margin: 0;
  left: -25px;
  bottom: -180px;
  position: absolute;
`;

export const BottomFlower2 = styled.img`
  width: 252px;
  position: absolute;
  margin: 0;
  bottom: -180px;  
  left: 70px;
`;

export const BottomFlower3 = styled.img`
  position: absolute;
  margin: 0;
  bottom: -180px;    
  right: -270px;
  position: absolute;
`;
export const BottomFlower4 = styled.img`
  width: 232px;
  position: absolute;
  margin: 0;
  bottom: -180px;    
  right: -460px;
  position: absolute;
`;