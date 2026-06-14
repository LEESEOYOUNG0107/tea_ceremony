import styled, { css, keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
`;

/* ── Page Layout ── */
export const PageWrapper = styled.div`
  box-sizing: border-box;
`;

export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  align-items: start;
  max-width: 1280px;
  margin: 0 auto;
`;

export const LeftCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const RightCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

/* ── Header ── */
export const Header = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 40px;
  margin-bottom: 28px;
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  gap: 16px;
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

export const TeapotIcon = styled.img`
  width: 72px;
  height: 72px;
  object-fit: contain;
`;

export const HeaderTitle = styled.h1`
  font-size: 45px;
  font-weight: 800;
  color: #2d2d2d;
  margin: 0 0 4px;
  letter-spacing: -0.5px;
`;

export const HeaderSubtitle = styled.p`
  font-size: 20px;
  color: #888;
  margin: 0;
`;

/* ── Tea Selector ── */
export const TeaSelector = styled.button`
  background: #fff;
  border: 1.5px solid #e0dbd0;
  border-radius: 14px;
  padding: 10px 16px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  min-width: 140px;
  gap: 4px;
  transition: border-color 0.2s;

  &:hover {
    border-color: #4a7c59;
  }
`;

export const TeaIcon = styled.img`
  width: 22px;
  height: 22px;
  object-fit: contain;
  border-radius: 4px;
`;

export const TeaName = styled.span`
  font-size: 15px;
  font-weight: 700;
  color: #2d2d2d;
`;

export const ChevronIcon = styled.span`
  font-size: 14px;
  color: #4a7c59;
  transition: transform 0.2s;
  transform: ${(p) => (p.$open ? "rotate(180deg)" : "rotate(0deg)")};
  display: inline-block;
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  background: #fff;
  border: 1.5px solid #e0dbd0;
  border-radius: 14px;
  min-width: 160px;
  z-index: 100;
  box-shadow: 0 8px 28px rgba(0,0,0,0.10);
  overflow: hidden;
  animation: ${fadeIn} 0.18s ease;
`;

export const DropdownItem = styled.button`
  width: 100%;
  background: ${(p) => (p.$active ? "#f0f7f2" : "transparent")};
  border: none;
  padding: 11px 16px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  font-weight: ${(p) => (p.$active ? 700 : 500)};
  color: ${(p) => (p.$active ? "#4a7c59" : "#2d2d2d")};
  cursor: pointer;
  text-align: left;

  &:hover {
    background: #f5f9f6;
  }
`;

export const DropdownImg = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
`;

/* ── Step Nav ── */
export const StepNav = styled.div`
  margin-top: 3%;
  margin-left: 30%;
  margin-bottom: 3%;
  overflow-x: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
`;

export const StepList = styled.div`
  display: flex;
  align-items: flex-start;
  min-width: max-content;
  padding-bottom: 28px;
  padding-top: 4px;
`;

export const StepItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

export const StepDot = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(p) => p.$done || p.$active ? "#6A793F" : "#F3ECDC"};
  border: 1px solid ${(p) => p.$done || p.$active ? "#4a7c59" : "#d2ccbc"};
  transition: all 0.2s;
  flex-shrink: 0;
`;

export const StepDotInner = styled.span`
  font-size: 14px;
  font-weight: 700;
  color: ${(p) => p.$done || p.$active ? "#fff" : "#504b48"};
`;

export const StepConnector = styled.div`
  border-top: 3px dotted ${(p) => p.$done ? "#4a7c59" : "#d2ccbc"};
  width: 48px;
  margin: 19px 15px 0;
  flex-shrink: 0;
`;

export const StepLabel = styled.span`
  font-size: 12px;
  color: ${(p) => p.$active ? "#6A793F" : "#504b48"};
  font-weight: ${(p) => p.$active ? 800 : 500};
  margin-top: 8px;
  white-space: nowrap;
`;

/* ── Video ── */
export const VideoSection = styled.div`
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 6px 24px rgba(0,0,0,0.12);
`;

export const VideoWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  background: #1a1a1a;
  overflow: hidden;

  img {
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
    object-fit: cover;
  }
`;

export const PlayBtn = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: rgba(255,255,255,0.92);
  border: none;
  font-size: 22px;
  color: #2d2d2d;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 16px rgba(0,0,0,0.2);
  padding-left: 4px;
  transition: transform 0.15s;

  &:hover {
    transform: translate(-50%, -50%) scale(1.08);
  }
`;

export const VideoMeta = styled.div`
  position: absolute;
  bottom: 10px;
  left: 14px;
  font-size: 12px;
  color: #fff;
  background: rgba(0,0,0,0.45);
  padding: 3px 8px;
  border-radius: 6px;
`;

/* ── Step Content ── */
export const StepContent = styled.div`
  background: #FCFAF4;
  border-radius: 20px;
  padding: 28px 28px 24px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.05);
  animation: ${fadeIn} 0.25s ease;
`;

export const StepBadge = styled.span`
  display: inline-block;
  background: #6A793F;
  color: #fff;
  font-size: 12px;
  font-weight: 700;
  border-radius: 20px;
  padding: 4px 12px;
  margin-bottom: 12px;
`;

export const StepTitle = styled.h2`
  font-size: 28px;
  font-weight: 800;
  color: #2d2d2d;
  margin: 0 0 10px;
  letter-spacing: -0.3px;
`;

export const StepDesc = styled.p`
  font-size: 15px;
  color: #555;
  line-height: 1.7;
  margin: 0;
`;

export const StepIllustration = styled.img`
  width: 130px;
  height: 130px;
  object-fit: contain;
  flex-shrink: 0;
`;

/* ── Tip Box ── */
export const TipBox = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  background: #FBF7ED;
  border-radius: 14px;
  padding: 16px 18px;
  margin-top: 20px;
`;

export const TipLeaf = styled.img`
  width: 32px;
  height: 32px;
  object-fit: contain;
`;

export const TipText = styled.p`
  font-size: 14px;
  color: #444;
  margin: 0;
  line-height: 1.5;
`;

/* ── Nav Row ── */
export const NavRow = styled.div`
  display: flex;
  gap: 14px;
  margin-top: 20px;
  margin-bottom: 100px
`;

const btnBase = css`
  flex: 1;
  padding: 16px 0;
  border-radius: 16px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  border: none;
  transition: all 0.18s;

  &:disabled {
    opacity: 0.35;
    cursor: not-allowed;
  }
`;

export const PrevBtn = styled.button`
  ${btnBase}
  background: #F3ECDC;
  color: #555;
  border: 1.5px solid #F1E6D5;

  &:not(:disabled):hover {
    background: rgb(229, 229, 208);
  }
`;

export const NextBtn = styled.button`
  ${btnBase}
  background: #6A793F;
  color: #FBF7ED;
  box-shadow: 0 4px 16px rgba(106, 121, 63, 0.28);

  &:not(:disabled):hover {
    background: #788947;
  }
`;