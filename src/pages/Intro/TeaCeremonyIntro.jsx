import {
  PageWrap,
  HeroCard, HeroContent, HeroText, HeroBadge, HeroTitle, HeroDesc, WindowImg,
  CharacterArea, CharImg,
  InfoCard, CardSectionTitle, CardSectionTitle2, InfoCardInner, InfoLeafImg, InfoCardText, InfoteaImg,
  PrepSection, ToolsGrid, ToolItem, ToolIconWrap, ToolImg,
  ToolName, ToolSubName,
  CTAButton,
  BottomFlower, BottomFlower2, BottomFlower4
} from './TeaCeremonyIntro.styles';

import windowImg from '../../assets/img/window.png';
import flower1 from '../../assets/img/flower.png';
import flower2 from '../../assets/img/flower2.png';
import flower4 from '../../assets/img/flower4.png';
import leaf from '../../assets/img/leaf.png';
import charImg from '../../assets/img/charImg.png';
import shiny from '../../assets/img/shiny.png';
import heart from '../../assets/img/heart.png';
import leaves from '../../assets/img/leaves.png';
import tea from '../../assets/img/tea.png';
import teaLeaves from '../../assets/img/teaLeaves.png';
import kettle from '../../assets/img/kettle.png';
import teaSet from '../../assets/img/teaset.png';
import towl from '../../assets/img/towl.png';
import timer from '../../assets/img/timer.png';

const TOOLS = [
  { img: teaLeaves, name: '찻잎', sub: null, hasTimer: false },
  { img: teaSet, name: '다기 세트', sub: '(다관, 찻잔, 숙우 등)', hasTimer: false },
  { img: kettle, name: '뜨거운 물', sub: '(온도계 추천)', hasTimer: false },
  { img: towl, name: '티타월', sub: '(깨끗한 천)', hasTimer: false },
  { img: timer, name: '타이머', sub: '(정확한 우림을 위해)', hasTimer: true },
];

export default function TeaCeremonyIntro() {
  return (
    <PageWrap>

      {/* ── Hero 카드 ── */}
      <HeroCard>
        <HeroContent>
          <HeroText>
            <HeroBadge>처음이라도 괜찮아요!</HeroBadge>
            <HeroTitle>차근차근, 함께 시작해요</HeroTitle>
            <HeroDesc> 다도를 하며 일상 속 쉼과 집중을 되찾아 보세요 </HeroDesc>
          </HeroText>

          <WindowImg src={windowImg} alt="창문" />
        </HeroContent>

        <CharacterArea>                                                      {/* 이미지 선명도, 기울기 */}
          <CharImg src={leaf} alt="잎" style={{ width: 30, top: 100, left: '25%', opacity: 0.6, transform: 'rotate(15deg)' }} />
          <CharImg src={leaf} alt="잎" style={{ width: 40, top: '40%', right: '25%', opacity: 0.6, transform: 'rotate(310deg)' }} />
          <CharImg src={leaf} alt="잎" style={{ width: 30, top: '-50%', left: '40%', opacity: 0.7, transform: 'rotate(8deg)' }} />
          <CharImg src={shiny} alt="반짝이" style={{ width: 40, top: -80, left: '48%' }} />
          <CharImg src={heart} alt="하트" style={{ width: 30, top: -90, left: '50%' }} />

          <CharImg src={charImg} alt="캐릭터" style={{ width: 650, top: '-30%', left: '27%' }} />
        </CharacterArea>
      </HeroCard>

      {/* ── 다도란? ── */}
      <InfoCard>
        <CardSectionTitle>다도란?</CardSectionTitle>
        <InfoCardInner>
          <InfoLeafImg src={leaves} alt="잎" />
        
          <InfoCardText>
            차를 끓이고, 마시고, 대접하는 전 과정을 통해 예절을 익히고 몸과 마음을 수양하는 전통 문화입니다. <br />
            단순한 음용을 넘어 차를 매개로 자연과의 조화, 타인에 대한 배려, 그리고 정신적인 깨달음을 얻는 데 목적이 있습니다
          </InfoCardText>
        
          <InfoteaImg src={tea} alt="차" />
        </InfoCardInner>
      </InfoCard>

      {/* ── 다도 전, 준비해요 ── */}
      <PrepSection>
        <CardSectionTitle2>다도 전, 준비해요</CardSectionTitle2>
        <ToolsGrid>
          {TOOLS.map((tool) => (
            <ToolItem key={tool.name}>
              <ToolIconWrap>
                <ToolImg src={tool.img} alt={tool.name} />
              </ToolIconWrap>
              <ToolName>{tool.name}</ToolName>
              {tool.sub && <ToolSubName>{tool.sub}</ToolSubName>}
            </ToolItem>
          ))}
        </ToolsGrid>

        <BottomFlower src={flower1} />
        <BottomFlower2 src={flower2} />
        <BottomFlower4 src={flower4} />
      </PrepSection>

      {/* ── CTA 버튼 ── */}
      <CTAButton href="#">
        다도 시작하기 🪴
      </CTAButton>





    </PageWrap>
  );
}