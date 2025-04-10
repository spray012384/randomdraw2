// uiManager.js
const mainTitleDisplay = document.getElementById('main-title-display'); // id 변경 가능
const mainTitleInput = document.getElementById('main-title-input');
// ... 기타 UI 요소 ...

// const updateMainTitleDisplay = (title) => { // 제거 또는 수정
//     mainTitleDisplay.textContent = title;
// };

const setMainTitleInput = (title) => {
    mainTitleInput.value = title;
};

// ... 기타 UI 업데이트 함수 ...

export {
    mainTitleDisplay,
    mainTitleInput,
    // ... 기타 UI 요소 ...
    // updateMainTitleDisplay, // 제거 또는 수정
    setMainTitleInput,
    // ... 기타 UI 업데이트 함수 ...
};
