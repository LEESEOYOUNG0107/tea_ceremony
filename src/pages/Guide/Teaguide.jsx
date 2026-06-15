import { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  PageWrapper, ContentGrid,
  LeftCol, RightCol,
  Header, HeaderLeft, TeapotIcon,
  HeaderTitle, HeaderSubtitle,
  TeaSelector, TeaIcon, TeaName,
  ChevronIcon, /* 드롭다운 */
  DropdownMenu, DropdownItem, DropdownImg,
  StepNav, StepList, StepItem, StepDot, StepDotInner, StepConnector, StepLabel,
  VideoSection, VideoWrapper,
  StepContent, StepBadge, StepTitle, StepDesc, StepIllustration,
  TipBox, TipLeaf, TipText,
  NavRow, PrevBtn, NextBtn,
} from "./Teaguide.styles";

import beanChar from "../../assets/beanChar.png";
import boilTea from "../../assets/boilTea.png";
import kettle2 from "../../assets/kettle2.png";
import leavesImg from "../../assets/leaves.png";
import dechuImg from "../../assets/jujube.png";
import gingerImg from "../../assets/ginger.png";
import omijaImg from "../../assets/omija.png";
import yujaImg from "../../assets/yuzu.png";
import gughwaImg from "../../assets/chrysanthemum.png";
import mogwaImg from "../../assets/quience.png";
import plumImg from "../../assets/plum.png";
import persimmonImg from "../../assets/persimmon.png";

const VIDEO_ID = "DlvkxN3olnk";

// 영상을 직접 보고 각 단계 시작 시간(초)을 여기서 수정하세요
// 단계별 시작 시간 (초)
const STEP_TIMES = [0, 54, 89, 111, 159];

const TEA_LIST = [
  { id: "green", name: "녹차", img: leavesImg, temp: "70°C ~ 80°C", time: "1분 ~ 1분 30초", tempNote: "한 김 식힌 물" },
  { id: "ginger", name: "생강차", img: gingerImg, temp: "약불 달이기", time: "30분 ~ 1시간", tempNote: "약불에 푹 달여요" },
  { id: "omija", name: "오미자차", img: omijaImg, temp: "찬물 냉침 ⚠️", time: "12시간 ~ 24시간", tempNote: "절대 뜨거운 물 금지!" },
  { id: "chrysanthemum", name: "국화차", img: gughwaImg, temp: "90°C ~ 100°C", time: "2분 ~ 3분", tempNote: "팔팔 끓는 물" },
  { id: "quince", name: "모과차", img: mogwaImg, temp: "80°C ~ 90°C", time: "청을 물에 희석", tempNote: "정수기 온수 정도" },
  { id: "jujube", name: "대추차", img: dechuImg, temp: "약불 달이기", time: "30분 ~ 1시간", tempNote: "약불에 푹 달여요" },
  { id: "plum", name: "매실차", img: plumImg, temp: "80°C ~ 90°C", time: "청을 물에 희석", tempNote: "온차 또는 냉차로!" },
  { id: "yuzu", name: "유자차", img: yujaImg, temp: "80°C ~ 90°C", time: "청을 물에 희석", tempNote: "정수기 온수 정도" },
  { id: "persimmon", name: "감잎차", img: persimmonImg, temp: "70°C ~ 80°C", time: "1분 30초 ~ 2분", tempNote: "한 김 식힌 물" },
];

const TEA_STEPS = {
  green: [
    { num: 1, label: "물 끓이기", title: "물 끓이기", desc: "물을 끓인 뒤 숙우(물식힘 사발)에 먼저 부어 70~80°C로 식혀주세요.", tip: "끓는 물(100°C)을 바로 쓰면 떫고 쓴맛이 나고 영양소가 파괴돼요!", illustration: boilTea, videoId: "Z_hbWiWE_tk", duration: "0:45" },
    { num: 2, label: "다구 데우기", title: "다구 데우기", desc: "찻주전자와 찻잔에 뜨거운 물을 부어 데워주세요. 차 온도를 오래 유지할 수 있어요.", tip: "다구를 데우면 차가 빨리 식지 않아요.", illustration: boilTea, videoId: "fxDz9QCNJp0", duration: "1:02" },
    { num: 3, label: "차 우리기", title: "차 우리기", desc: "다관에 찻잎을 넣고 70~80°C 물을 부어 1분~1분 30초간 우려주세요.", tip: "2~3번까지 재탕할 수 있어요. 두 번째 탕이 가장 맛있다는 말도 있어요!", illustration: boilTea, videoId: "P3ZKWZ2SXJA", duration: "1:30" },
    { num: 4, label: "따르기", title: "따르기", desc: "우린 차를 여러 잔에 조금씩 번갈아 따라 농도를 균일하게 맞춰주세요.", tip: "한 잔씩 가득 채우지 말고, 조금씩 돌아가며 따르세요.", illustration: boilTea, videoId: "B4iHxzxkODE", duration: "0:50" },
    { num: 5, label: "음미하기", title: "음미하기", desc: "두 손으로 찻잔을 감싸 쥐고, 향을 먼저 맡은 뒤 천천히 음미하세요.", tip: "차를 마시기 전 먼저 향을 충분히 느껴보세요.", illustration: boilTea, videoId: "zEdofJsJpJg", duration: "1:10" },
  ],
  chrysanthemum: [
    { num: 1, label: "물 끓이기", title: "물 끓이기", desc: "물을 90~100°C로 팔팔 끓여주세요. 국화차는 높은 온도에서 향이 제대로 우러납니다.", tip: "국화는 높은 온도에서 우려야 꽃이 활짝 피어나며 향이 진하게 퍼져요!", illustration: boilTea, videoId: "Z_hbWiWE_tk", duration: "0:45" },
    { num: 2, label: "다구 데우기", title: "다구 데우기", desc: "투명한 유리 다관과 찻잔을 뜨거운 물로 데워주세요.", tip: "투명 유리 다관을 쓰면 꽃이 피어나는 시각적인 즐거움도 함께 느낄 수 있어요!", illustration: boilTea, videoId: "fxDz9QCNJp0", duration: "1:02" },
    { num: 3, label: "차 우리기", title: "차 우리기", desc: "다관에 국화 꽃잎을 넣고 90~100°C 뜨거운 물을 부어 2~3분간 우려주세요.", tip: "꽃잎이 활짝 피어오르는 걸 보는 것도 다도의 즐거움이에요.", illustration: boilTea, videoId: "P3ZKWZ2SXJA", duration: "1:30" },
    { num: 4, label: "따르기", title: "따르기", desc: "우린 국화차를 찻잔에 조심스럽게 따라주세요.", tip: "국화 꽃잎이 잔에 떠내려오지 않도록 천천히 따르세요.", illustration: boilTea, videoId: "B4iHxzxkODE", duration: "0:50" },
    { num: 5, label: "음미하기", title: "음미하기", desc: "은은한 국화 향을 먼저 맡고, 부드럽고 달콤한 꽃 향의 차를 천천히 음미하세요.", tip: "국화차는 눈 피로 해소와 두통 완화에 좋아요.", illustration: boilTea, videoId: "zEdofJsJpJg", duration: "1:10" },
  ],
  yuzu: [
    { num: 1, label: "물 끓이기", title: "물 끓이기", desc: "물을 끓인 뒤 80~90°C로 살짝 식혀주세요. 너무 끓는 물은 유자의 비타민 풍미를 죽여요.", tip: "100°C 끓는 물을 바로 부으면 상큼한 유자 향이 날아가요!", illustration: boilTea, videoId: "Z_hbWiWE_tk", duration: "0:45" },
    { num: 2, label: "잔 데우기", title: "잔 데우기", desc: "찻잔에 따뜻한 물을 부어 미리 데워두세요. 유자차를 오래 따뜻하게 즐길 수 있어요.", tip: "잔을 데우면 청이 잘 녹아요.", illustration: boilTea, videoId: "fxDz9QCNJp0", duration: "1:02" },
    { num: 3, label: "청 넣기", title: "유자청 넣기", desc: "데운 찻잔의 물을 버리고, 유자청 1~2 큰술을 잔에 넣어주세요.", tip: "청의 양으로 단맛과 농도를 취향껏 조절하세요.", illustration: boilTea, videoId: "P3ZKWZ2SXJA", duration: "1:30" },
    { num: 4, label: "물 붓기", title: "물 붓기", desc: "80~90°C로 식힌 물을 유자청 위에 천천히 부어주세요.", tip: "뜨거운 물을 천천히 부으면 청이 자연스럽게 녹아요.", illustration: boilTea, videoId: "B4iHxzxkODE", duration: "0:50" },
    { num: 5, label: "음미하기", title: "음미하기", desc: "잘 저어 청을 녹인 뒤, 상큼한 유자 향과 달콤한 맛을 천천히 음미하세요.", tip: "유자차는 비타민 C가 풍부해 감기 예방에 좋아요.", illustration: boilTea, videoId: "zEdofJsJpJg", duration: "1:10" },
  ],
  plum: [
    { num: 1, label: "방법 선택", title: "온차 or 냉차?", desc: "매실차는 따뜻하게도, 얼음 띄워 시원하게도 즐길 수 있어요. 소화 개선엔 냉차가 특히 좋아요!", tip: "🧊 냉차: 매실청 + 차가운 물 + 얼음으로 청량하게 즐겨보세요!", illustration: boilTea, videoId: "Z_hbWiWE_tk", duration: "0:45" },
    { num: 2, label: "물 준비", title: "물 준비", desc: "온차: 물을 끓여 80~90°C로 식혀주세요. 냉차: 차가운 생수나 얼음물을 준비하세요.", tip: "온차에 100°C 끓는 물을 바로 쓰면 매실 특유의 상큼함이 줄어들어요.", illustration: boilTea, videoId: "fxDz9QCNJp0", duration: "1:02" },
    { num: 3, label: "청 넣기", title: "매실청 넣기", desc: "잔에 매실청 1~2 큰술을 넣어주세요. 취향에 따라 양을 조절하세요.", tip: "신맛을 좋아하면 청을 조금 더, 달게 드시려면 꿀을 한 스푼 추가해보세요.", illustration: boilTea, videoId: "P3ZKWZ2SXJA", duration: "1:30" },
    { num: 4, label: "물 붓기", title: "물 붓기", desc: "준비한 물(온수 또는 냉수)을 청 위에 천천히 부어주세요. 냉차는 얼음도 함께 넣어요.", tip: "얼음을 먼저 넣고 물을 부으면 더 시원하게 즐길 수 있어요.", illustration: boilTea, videoId: "B4iHxzxkODE", duration: "0:50" },
    { num: 5, label: "음미하기", title: "음미하기", desc: "잘 저어 청을 녹인 뒤, 새콤달콤한 매실의 맛을 천천히 음미하세요.", tip: "매실차는 소화 촉진, 피로 해소, 해독 작용에 효과적이에요.", illustration: boilTea, videoId: "zEdofJsJpJg", duration: "1:10" },
  ],
  quince: [
    { num: 1, label: "물 끓이기", title: "물 끓이기", desc: "물을 끓인 뒤 80~90°C로 살짝 식혀주세요.", tip: "너무 끓는 물은 모과 특유의 향긋한 풍미를 약하게 만들어요.", illustration: boilTea, videoId: "Z_hbWiWE_tk", duration: "0:45" },
    { num: 2, label: "잔 데우기", title: "잔 데우기", desc: "찻잔에 따뜻한 물을 부어 미리 데워두세요.", tip: "잔을 데우면 모과청이 잘 녹고 차가 오래 따뜻하게 유지돼요.", illustration: boilTea, videoId: "fxDz9QCNJp0", duration: "1:02" },
    { num: 3, label: "청 넣기", title: "모과청 넣기", desc: "데운 잔의 물을 버리고, 모과청 1~2 큰술을 넣어주세요.", tip: "모과청에는 과육이 들어 있어 씹는 재미가 있어요.", illustration: boilTea, videoId: "P3ZKWZ2SXJA", duration: "1:30" },
    { num: 4, label: "물 붓기", title: "물 붓기", desc: "80~90°C로 식힌 물을 청 위에 천천히 부어주세요.", tip: "물을 부은 뒤 잘 저어 청이 고루 녹도록 해주세요.", illustration: boilTea, videoId: "B4iHxzxkODE", duration: "0:50" },
    { num: 5, label: "음미하기", title: "음미하기", desc: "은은한 모과 향과 달콤하면서도 약간 쌉쌀한 맛을 천천히 음미하세요.", tip: "모과차는 기침, 가래에 효과적이고 목에 좋아요.", illustration: boilTea, videoId: "zEdofJsJpJg", duration: "1:10" },
  ],
  ginger: [
    { num: 1, label: "재료 준비", title: "재료 준비", desc: "생강을 깨끗이 씻어 얇게 편 썰어 준비하세요. 말린 생강을 쓰면 더 편리해요.", tip: "생강은 껍질째 쓰면 향이 더 진해요.", illustration: boilTea, videoId: "Z_hbWiWE_tk", duration: "0:45" },
    { num: 2, label: "물 올리기", title: "주전자에 물 올리기", desc: "주전자에 물과 생강 편을 넣고 센 불로 끓이기 시작하세요.", tip: "물 1L 기준 생강 50g 정도가 적당해요.", illustration: boilTea, videoId: "fxDz9QCNJp0", duration: "1:02" },
    { num: 3, label: "약불 달이기", title: "약불에 달이기", desc: "물이 끓기 시작하면 약불로 줄여 30분~1시간 이상 은근하게 달여주세요.", tip: "오래 달일수록 생강의 깊은 매운맛과 단맛이 더 진하게 우러나요.", illustration: boilTea, videoId: "P3ZKWZ2SXJA", duration: "1:30" },
    { num: 4, label: "거르기", title: "건더기 거르기", desc: "생강 건더기를 체로 걸러내고 맑은 생강 달인 물만 찻잔에 따라주세요.", tip: "다도 잔에 낼 때 잣을 고명으로 띄우면 멋스러워요.", illustration: boilTea, videoId: "B4iHxzxkODE", duration: "0:50" },
    { num: 5, label: "음미하기", title: "음미하기", desc: "따뜻한 생강차의 알싸한 향을 먼저 맡고, 꿀을 조금 넣어 달콤하게 음미하세요.", tip: "생강차는 몸을 따뜻하게 해주고 소화 촉진, 감기 예방에 좋아요.", illustration: boilTea, videoId: "zEdofJsJpJg", duration: "1:10" },
  ],
  jujube: [
    { num: 1, label: "재료 준비", title: "재료 준비", desc: "말린 대추를 깨끗이 씻어 준비하세요. 씨를 빼고 슬라이스하면 더 빨리 우러나요.", tip: "슬라이스하면 단맛이 더 잘 우러나요.", illustration: boilTea, videoId: "Z_hbWiWE_tk", duration: "0:45" },
    { num: 2, label: "물 올리기", title: "주전자에 물 올리기", desc: "주전자에 물과 대추를 넣고 센 불로 끓이기 시작하세요.", tip: "물 1L 기준 대추 10~15개 정도가 적당해요.", illustration: boilTea, videoId: "fxDz9QCNJp0", duration: "1:02" },
    { num: 3, label: "약불 달이기", title: "약불에 달이기", desc: "물이 끓기 시작하면 약불로 줄여 30분~1시간 이상 은근하게 달여주세요.", tip: "오래 달일수록 대추의 깊은 단맛이 진하게 우러나요.", illustration: boilTea, videoId: "P3ZKWZ2SXJA", duration: "1:30" },
    { num: 4, label: "거르기", title: "건더기 거르기", desc: "대추 건더기를 체로 걸러내고 찻잔에 따라주세요.", tip: "대추 슬라이스나 잣을 고명으로 띄우면 멋스러워요.", illustration: boilTea, videoId: "B4iHxzxkODE", duration: "0:50" },
    { num: 5, label: "음미하기", title: "음미하기", desc: "은은한 대추 향과 자연스러운 단맛을 천천히 음미하세요.", tip: "대추차는 불면증 완화, 스트레스 해소, 면역력 강화에 좋아요.", illustration: boilTea, videoId: "zEdofJsJpJg", duration: "1:10" },
  ],
  omija: [
    { num: 1, label: "재료 준비", title: "재료 준비", desc: "말린 오미자를 깨끗이 씻어 준비하세요. 뜨거운 물에 끓이면 절대 안 돼요!", tip: "⚠️ 오미자를 뜨거운 물에 끓이면 쓴맛과 신맛이 너무 강해져요!", illustration: boilTea, videoId: "Z_hbWiWE_tk", duration: "0:45" },
    { num: 2, label: "냉침 준비", title: "찬물에 냉침 시작", desc: "깨끗한 유리 용기에 오미자와 찬물(또는 미지근한 물)을 넣어주세요.", tip: "물 1L 기준 오미자 50g 정도가 적당해요.", illustration: boilTea, videoId: "fxDz9QCNJp0", duration: "1:02" },
    { num: 3, label: "냉침 숙성", title: "12~24시간 냉침", desc: "냉장고에 넣고 12시간~하루 동안 천천히 냉침(우려내기)해주세요.", tip: "오래 냉침할수록 오미자의 5가지 맛이 균형 있게 우러나요.", illustration: boilTea, videoId: "P3ZKWZ2SXJA", duration: "1:30" },
    { num: 4, label: "거르기", title: "건더기 거르기", desc: "냉침한 오미자 원액을 체로 걸러 맑은 원액만 남겨주세요.", tip: "원액을 그대로 마시면 너무 강하니 물이나 꿀로 취향껏 희석하세요.", illustration: boilTea, videoId: "B4iHxzxkODE", duration: "0:50" },
    { num: 5, label: "음미하기", title: "음미하기", desc: "희석한 오미자차를 따뜻하게 데우거나 그대로 시원하게 음미하세요.", tip: "오미자차는 피로 회복, 간 보호, 면역력 향상에 효과가 있어요.", illustration: boilTea, videoId: "zEdofJsJpJg", duration: "1:10" },
  ],
  persimmon: [
    { num: 1, label: "다구 데우기", title: "다구 데우기", desc: " 끓는 물을 다관과 찻잔에 부어 먼저 따뜻하게 데운 뒤 그 물은 버립니다.", tip: "수돗물보다는 정수된 물이나 생수를 사용해야 감잎 특유의 은은한 단맛과 부드러운 향을 온전히 느낄 수 있습니다.", illustration: boilTea, videoId: "Z_hbWiWE_tk", duration: "0:45" },
    { num: 2, label: "물 식히기", title: "물 식히기", desc: "끓인 물을 숙우에 부어 70~80°C가 되도록 잠시 식힙니다.", tip: "물을 숙우에 부은 뒤, 손으로 숙우 바닥이나 옆면을 감싸 쥐었을 때 '따뜻하지만 기분 좋게 쥘 수 있는 정도'가 되면 감잎차를 우릴 수 있는 가장 알맞은 온도입니다.", illustration: boilTea, videoId: "fxDz9QCNJp0", duration: "1:02" },
    { num: 3, label: "찻잎 넣기", title: "찻잎 넣기", desc: "데워진 다관에 준비한 감잎을 넣습니다.", tip: "저울이 없다면, 1인용 다관 기준으로 바닥이 살짝 깔릴 정도만 넣으시면 됩니다. 감잎은 물에 불어나면 부피가 커지므로 너무 많이 넣지 않도록 주의합니다.", illustration: boilTea, videoId: "P3ZKWZ2SXJA", duration: "1:30" },
    { num: 4, label: "우리기", title: "우리기", desc: "식힌 물을 다관에 붓고 1분 30초에서 2분간 우려냅니다.", tip: "물을 다관에 부을 때는 물줄기를 높이 들어 콸콸 붓지 마세요. 낙차가 크면 물에 산소가 과하게 들어가 감잎의 비타민 C가 쉽게 산화되고 향이 날아갑니다. 다관 기벽(안쪽 벽)을 따라 물이 미끄러지듯 부드럽고 낮게 채워주는 것이 좋습니다.", illustration: boilTea, videoId: "B4iHxzxkODE", duration: "0:50" },
    { num: 5, label: "음미하기", title: "음미하기", desc: "차의 색과 맛이 고르게 섞이도록 찻잔마다 조금씩 번갈아 가며 따릅니다. 마지막 한 방울까지 모두 짜내야 다음 우림 때 쓴맛이 나지 않습니다.", tip: "여러 번 우려 마시기: 감잎차는 2번째, 3번째 우려낼 때 비타민 C 성분이 가장 많이 나옵니다. 2번째 우릴 때는 시간을 30초~1분 정도 더 늘려서 우려주세요.", illustration: boilTea, videoId: "zEdofJsJpJg", duration: "1:10" },
  ],
};

export default function TeaGuide() {
  const location = useLocation();

  const teaId =
    new URLSearchParams(location.search).get("tea");

  const [selectedTea, setSelectedTea] = useState(
    TEA_LIST.find((tea) => tea.id === teaId) ||
    TEA_LIST[0]
  );

  const steps = TEA_STEPS[selectedTea.id];
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const dropdownRef = useRef(null);

  const step = steps[currentStep];

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
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep((s) => s - 1);
    }
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((s) => s + 1);
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
                    setCurrentStep(0);
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
          {steps.map((s, i) => (
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
              {i < steps.length - 1 && (
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
              <iframe
                key={`${selectedTea.id}-${currentStep}`}
                src={`https://www.youtube.com/embed/${VIDEO_ID}?start=${STEP_TIMES[currentStep] ?? 0}&rel=0&modestbranding=1`}
                title={step.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
              />
            </VideoWrapper>
          </VideoSection>
        </LeftCol>

        {/* Right: Step content + nav */}
        <RightCol>
          <StepContent>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", gap: "16px", marginBottom: "14px" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                    <span style={{ fontSize: "11px", color: "#aaa", fontWeight: 600 }}>🌡️ 물 온도</span>
                    <span style={{ fontSize: "14px", fontWeight: 700, color: "#6A793F" }}>{selectedTea.temp}</span>
                    <span style={{ fontSize: "11px", color: "#bbb" }}>{selectedTea.tempNote}</span>
                  </div>
                  <div style={{ width: "1px", background: "#ede8de", margin: "0 4px" }} />
                  <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                    <span style={{ fontSize: "11px", color: "#aaa", fontWeight: 600 }}>⏱️ 우리는 시간</span>
                    <span style={{ fontSize: "14px", fontWeight: 700, color: "#6A793F" }}>{selectedTea.time}</span>
                  </div>
                </div>
                <StepBadge>{step.num}단계</StepBadge>
                <StepTitle>{step.title}</StepTitle>
                <StepDesc>{step.desc}</StepDesc>
              </div>
              <StepIllustration src={step.illustration} alt={step.title} style={{ width: '300px' }} />
            </div>

            <TipBox>
              <TipLeaf src={leavesImg} alt="tip leaf" />
              <div>
                <div style={{ fontWeight: 700, fontSize: "13px", marginBottom: "4px", color: "#4a7c59" }}>TIP</div>
                <TipText>{step.tip}</TipText>
              </div>
              <img
                src={beanChar} alt="mascot" style={{ width: "70px", height: "70px", objectFit: "contain" }}
              />
            </TipBox>
          </StepContent>

          <NavRow>
            <PrevBtn onClick={handlePrev} disabled={currentStep === 0}>
              ‹ 이전 단계
            </PrevBtn>
            <NextBtn onClick={handleNext} disabled={currentStep === steps.length - 1}>
              다음 단계 ›
            </NextBtn>
          </NavRow>
        </RightCol>
      </ContentGrid>
    </PageWrapper>
  );
}