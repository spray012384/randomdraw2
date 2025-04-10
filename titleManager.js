// titleManager.js
import { state, setState, getState, subscribe } from './stateManager.js';
import { updateMainTitleDisplay, setMainTitleInput } from './uiManager.js';

const initializeTitleManager = () => {
  // 초기 로딩 시 UI 반영
  setMainTitleInput(getState().mainTitle);
  updateMainTitleDisplay(getState().mainTitle);

  // 상태 변화 감지 및 UI 업데이트
  subscribe('mainTitle', handleMainTitleDisplayChange); // 변경

  // 입력 이벤트 핸들러
  const mainTitleInput = document.getElementById('main-title-input');
  mainTitleInput.addEventListener('input', handleMainTitleInputChange);
};

const handleMainTitleInputChange = (event) => {
  setState({ mainTitle: event.target.value });
};

const handleMainTitleDisplayChange = (newTitle) => { // 변경
  updateMainTitleDisplay(newTitle);
};

export { initializeTitleManager };
