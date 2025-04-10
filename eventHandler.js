// eventHandler.js
import { saveButton, resetButton, previewButton, startButton } from './uiManager.js';
import { getState, setState } from './stateManager.js';

const initializeEventHandler = () => {
  saveButton.addEventListener('click', handleSaveButtonClick);
  resetButton.addEventListener('click', handleResetButtonClick);
  previewButton.addEventListener('click', handlePreviewButtonClick);
  startButton.addEventListener('click', handleStartButtonClick);
};

const handleSaveButtonClick = () => {
  // 저장 기능 (추후 구현)
  console.log('저장 버튼 클릭!', getState());
  // 로컬 스토리지 등에 현재 상태를 저장하는 로직을 추가할 수 있습니다.
};

const handleResetButtonClick = () => {
  // 초기화 기능
  const initialState = {
    mainTitle: "랜덤 뽑기",
    itemUse: false,
    itemDescription: "[상품 안내를 하지 않습니다.]",
    horizontal: 0,
    vertical: 0,
    totalWinners: 0,
    winType: 'win-fail',
    manualPrizes: [],
    positionType: 'random-position',
    designType: 'default-design',
  };
  setState(initialState);
  console.log('초기화 버튼 클릭!', getState());
  // 각 UI 요소의 값을 초기 상태에 맞게 업데이트하는 로직은
  // 각 모듈의 상태 구독 핸들러에서 자동으로 처리됩니다.
};

const handlePreviewButtonClick = () => {
  // 미리보기 기능 (추후 구현)
  console.log('미리보기 버튼 클릭!', getState());
  // 현재 설정된 상태를 기반으로 미리보기 UI를 보여주는 로직을 추가할 수 있습니다.
};

const handleStartButtonClick = () => {
  // 시작 기능 (추후 구현)
  console.log('시작 버튼 클릭!', getState());
  // 랜덤 뽑기 로직을 실행하는 부분을 추가할 수 있습니다.
};

export { initializeEventHandler };
