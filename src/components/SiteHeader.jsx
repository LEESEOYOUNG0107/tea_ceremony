import styled from "styled-components";
import { NavLink } from "react-router-dom"; 

import leafDecoration from "../assets/leaf.png";

const MENU_ITEMS = [
  { href: "/", label: "홈" },
  { href: "/library", label: "차 도감" },
  { href: "/guide", label: "다도 가이드" },
  { href: "/etiquette", label: "다도 예절" },
  { href: "/culture", label: "한국 다도 문화" },
];

export default function SiteHeader() {
  return (
    <Header>
      {/* 💡 a 태그 대신 NavLink 사용 */}
      <Brand as={NavLink} to="/library">
        <BrandText>다도락</BrandText>\
        <BrandLeaf src={leafDecoration} alt="" aria-hidden="true" />
      </Brand>

      <Menu aria-label="서비스 메뉴">
        {MENU_ITEMS.map((item) => (
          <MenuLink
            key={item.href}
            as={NavLink} // 🌟 styled-component가 NavLink 역할을 하도록 바꿉니다.
            to={item.href}
          >
            {item.label}
          </MenuLink>
        ))}
      </Menu>
    </Header>
  );
}

// ── 아래는 기존 스타일 구조를 유지하되 스타일 부여 방식만 약간 조율합니다 ──

const Header = styled.header`
  height: 62px;
  display: grid;
  grid-template-columns: 180px 1fr 180px;
  align-items: center;
  gap: 32px;
  padding: 0 44px;
  border-bottom: 1px solid #ebe2d0;
  background: rgba(255, 253, 248, 0.92);
  backdrop-filter: blur(14px);
`;

const Brand = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: #3c5123;
  text-decoration: none;
`;

const BrandText = styled.span`
  font-size: 31px;
  font-weight: 700;
  line-height: 1;
`;

const BrandLeaf = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
`;

const Menu = styled.nav`
  display: flex;
  justify-content: center;
  gap: 34px;
`;

const MenuLink = styled.a`
  font-size: 16px;
  font-weight: 500;
  color: #76634e;
  text-decoration: none;
  position: relative;
  transition: color 0.25s ease;

  &:hover {
    color: #3c5123;
  }

  &.active {
    color: #3c5123;
    font-weight: 700;

    &::after {
      content: "";
      position: absolute;
      bottom: -6px;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: #869968;
    }
  }
`;