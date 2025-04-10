// titleManager.js
import { state, setState, getState, subscribe } from './stateManager.js';
import { setMainTitleInput } from './uiManager.js'; // updateMainTitleDisplay 제거

const initializeTitleManager = () => {
    // 초기 로딩 시 UI 반영
    setMainTitleInput(getState().mainTitle);

    // 입력 이벤트 핸들러
    const mainTitleInput = document.getElementById('main-title-input');
    mainTitleInput.addEventListener('input', handleMainTitleInputChange);
};

const handleMainTitleInputChange = (event) => {
    const newTitle = event.target.value;
    setState({ mainTitle: newTitle });
};

export { initializeTitleManager };
