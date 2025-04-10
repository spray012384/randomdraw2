// titleManager.js
import { state, setState, getState, subscribe } from './stateManager.js';
import { updateMainTitleDisplay, setMainTitleInput } from './uiManager.js';

const initializeTitleManager = () => {
    // 초기 로딩 시 UI 반영
    setMainTitleInput(getState().mainTitle);
    updateMainTitleDisplay(getState().mainTitle);

    // 입력 이벤트 핸들러
    const mainTitleInput = document.getElementById('main-title-input');
    mainTitleInput.addEventListener('input', handleMainTitleInputChange);
};

const handleMainTitleInputChange = (event) => {
    const newTitle = event.target.value;
    setState({ mainTitle: newTitle });
    updateMainTitleDisplay(newTitle); // UI 즉시 업데이트
};

export { initializeTitleManager };
