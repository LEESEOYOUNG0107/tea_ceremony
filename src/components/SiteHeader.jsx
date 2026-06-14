import styled from "styled-components";

import leafDecoration from "../assets/leaf.png";

const MENU_ITEMS = [
  { href: "/", label: "홈", key: "home" },
  { href: "/library", label: "차 도감", key: "library" },
  { href: "/guide", label: "다도 가이드", key: "guide" },
  { href: "/etiquette", label: "다도 예절", key: "etiquette" },
  { href: "/culture", label: "한국 다도 문화", key: "culture" },
  { href: "/community", label: "커뮤니티", key: "community" },
];

export default function SiteHeader({ activePage = "library" }) {
  const movePage = (event, href) => {
    event.preventDefault();
    window.history.pushState({}, "", href);
    window.dispatchEvent(new PopStateEvent("popstate"));
  };

  return (
    <Header>
      <Brand href="/library" onClick={(event) => movePage(event, "/library")}>
        <BrandText>다도락</BrandText>
        <BrandLeaf src={leafDecoration} alt="" aria-hidden="true" />
      </Brand>

      <Menu aria-label="서비스 메뉴">
        {MENU_ITEMS.map((item) => (
          <MenuLink
            key={item.key}
            href={item.href}
            $active={activePage === item.key}
            onClick={(event) => movePage(event, item.href)}
          >
            {item.label}
          </MenuLink>
        ))}
      </Menu>
    </Header>
  );
}

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
  gap: 42px;
`;

const MenuLink = styled.a`
  position: relative;
  color: ${({ $active }) => ($active ? "#3c5123" : "#5e563f")};
  font-size: 17px;
  font-weight: 700;
  text-decoration: none;
  padding: 20px 0 18px;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 8px;
    height: 3px;
    border-radius: 999px;
    background: ${({ $active }) => ($active ? "#7d9a5a" : "transparent")};
  }
`;
