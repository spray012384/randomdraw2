// uiManager.js
const mainTitleDisplay = document.getElementById('main-title-display');
const mainTitleInput = document.getElementById('main-title-input');
// ... 기타 UI 요소 ...

const updateMainTitleDisplay = (title) => {
    mainTitleDisplay.textContent = title;
};

const setMainTitleInput = (title) => {
    mainTitleInput.value = title;
};

// ... 기타 UI 업데이트 함수 ...

export {
    mainTitleDisplay,
    mainTitleInput,
    // ... 기타 UI 요소 ...
    updateMainTitleDisplay,
    setMainTitleInput,
    // ... 기타 UI 업데이트 함수 ...
};
