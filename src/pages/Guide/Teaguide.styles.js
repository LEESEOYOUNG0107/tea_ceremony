import styled, { css, keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const PageWrapper = styled.div`
  background: #f5f0e8;
  min-height: 100vh;
  max-width: 480px;
  margin: 0 auto;
  padding: 20px 18px 32px;
  font-family: 'Pretendard', 'Apple SD Gothic Neo', sans-serif;
  box-sizing: border-box;
`;

/* ── Header ── */
export const Header = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 20px;
  gap: 12px;
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const TeapotIcon = styled.img`
  width: 44px;
  height: 44px;
  object-fit: contain;
`;

export const HeaderTitle = styled.h1`
  font-size: 22px;
  font-weight: 800;
  color: #2d2d2d;
  margin: 0 0 2px;
  letter-spacing: -0.5px;
`;

export const HeaderSubtitle = styled.p`
  font-size: 12px;
  color: #888;
  margin: 0;
`;

/* ── Tea Selector ── */
export const TeaSelector = styled.button`
  background: #fff;
  border: 1.5px solid #e0dbd0;
  border-radius: 12px;
  padding: 8px 12px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  min-width: 110px;
  gap: 2px;
  transition: border-color 0.2s;

  &:hover {
    border-color: #4a7c59;
  }
`;

export const TeaIcon = styled.img`
  width: 20px;
  height: 20px;
  object-fit: contain;
  border-radius: 4px;
`;

export const TeaName = styled.span`
  font-size: 14px;
  font-weight: 700;
  color: #2d2d2d;
`;

export const ChevronIcon = styled.span`
  font-size: 14px;
  color: #4a7c59;
  transition: transform 0.2s;
  transform: ${(p) => (p.open ? "rotate(180deg)" : "rotate(0deg)")};
  display: inline-block;
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: calc(100% + 6px);
  right: 0;
  background: #fff;
  border: 1.5px solid #e0dbd0;
  border-radius: 12px;
  min-width: 140px;
  z-index: 100;
  box-shadow: 0 8px 24px rgba(0,0,0,0.10);
  overflow: hidden;
  animation: ${fadeIn} 0.18s ease;
`;

export const DropdownItem = styled.button`
  width: 100%;
  background: ${(p) => (p.active ? "#f0f7f2" : "transparent")};
  border: none;
  padding: 10px 14px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: ${(p) => (p.active ? 700 : 500)};
  color: ${(p) => (p.active ? "#4a7c59" : "#2d2d2d")};
  cursor: pointer;
  text-align: left;

  &:hover {
    background: #f5f9f6;
  }
`;

export const DropdownImg = styled.img`
  width: 22px;
  height: 22px;
  object-fit: contain;
`;

/* ── Step Navigation ── */
export const StepNav = styled.div`
  margin-bottom: 18px;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
`;

export const StepList = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0;
  min-width: max-content;
  padding-bottom: 24px;
  padding-top: 4px;
`;

export const StepItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  cursor: pointer;
`;

export const StepDot = styled.div`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(p) => p.done ? "#4a7c59" : p.active ? "#4a7c59" : "#fff"};
  border: 2px solid ${(p) => p.done || p.active ? "#4a7c59" : "#d0ccc4"};
  transition: all 0.2s;
  flex-shrink: 0;
  flex-direction: column;
`;

export const StepDotInner = styled.span`
  font-size: 13px;
  font-weight: 700;
  color: ${(p) => p.done || p.active ? "#fff" : "#aaa"};
`;

export const StepConnector = styled.div`
  width: 28px;
  height: 2px;
  background: ${(p) => p.done ? "#4a7c59" : "#d0ccc4"};
  margin: 16px 2px 0;
  transition: background 0.3s;
  flex-shrink: 0;
`;

export const StepLabel = styled.span`
  position: absolute;
  top: 38px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 11px;
  color: ${(p) => p.active ? "#4a7c59" : "#999"};
  font-weight: ${(p) => p.active ? 700 : 400};
  white-space: nowrap;
`;

/* ── Video ── */
export const VideoSection = styled.div`
  margin-bottom: 16px;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0,0,0,0.12);
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
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: rgba(255,255,255,0.92);
  border: none;
  font-size: 20px;
  color: #2d2d2d;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 12px rgba(0,0,0,0.2);
  transition: transform 0.15s;
  padding-left: 4px;

  &:hover {
    transform: translate(-50%, -50%) scale(1.08);
  }
`;

export const VideoMeta = styled.div`
  position: absolute;
  bottom: 8px;
  left: 12px;
  font-size: 12px;
  color: #fff;
  background: rgba(0,0,0,0.45);
  padding: 2px 7px;
  border-radius: 6px;
`;

/* ── Step Content ── */
export const StepContent = styled.div`
  background: #fff;
  border-radius: 16px;
  padding: 18px 16px;
  margin-bottom: 14px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  animation: ${fadeIn} 0.25s ease;
`;

export const StepBadge = styled.span`
  display: inline-block;
  background: #4a7c59;
  color: #fff;
  font-size: 11px;
  font-weight: 700;
  border-radius: 20px;
  padding: 3px 10px;
  margin-bottom: 8px;
`;

export const StepTitle = styled.h2`
  font-size: 22px;
  font-weight: 800;
  color: #2d2d2d;
  margin: 0 0 8px;
  letter-spacing: -0.3px;
`;

export const StepDesc = styled.p`
  font-size: 14px;
  color: #555;
  line-height: 1.6;
  margin: 0;
`;

export const StepIllustration = styled.img`
  width: 90px;
  height: 90px;
  object-fit: contain;
  margin-left: 12px;
  flex-shrink: 0;
`;

/* ── Tip Box ── */
export const TipBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  background: #f5f9f6;
  border-radius: 12px;
  padding: 12px 14px;
  margin-top: 14px;
  border: 1px solid #dff0e6;
`;

export const TipLeaf = styled.span`
  font-size: 20px;
  flex-shrink: 0;
`;

export const TipText = styled.p`
  font-size: 13px;
  color: #444;
  margin: 0;
  line-height: 1.5;
`;

/* ── Nav Row ── */
export const NavRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
`;

const btnBase = css`
  flex: 1;
  padding: 14px 0;
  border-radius: 14px;
  font-size: 15px;
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
  background: #fff;
  color: #555;
  border: 1.5px solid #ddd;

  &:not(:disabled):hover {
    background: #f0f0ee;
  }
`;

export const NextBtn = styled.button`
  ${btnBase}
  background: #3a6147;
  color: #fff;
  box-shadow: 0 4px 14px rgba(58,97,71,0.28);

  &:not(:disabled):hover {
    background: #2e4f3a;
  }
`;