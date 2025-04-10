// itemDescriptionManager.js
import { state, setState, getState, subscribe } from './stateManager.js';
import { itemUseCheckbox, itemDescriptionInput, setItemUseCheckbox, setItemDescriptionInput } from './uiManager.js';

const initializeItemDescriptionManager = () => {
  // 초기 로딩 시 UI 반영
  setItemUseCheckbox(getState().itemUse);
  setItemDescriptionInput(getState().itemDescription);

  // 상태 변화 감지 및 UI 업데이트
  subscribe('itemUse', updateItemDescriptionText);
  subscribe('totalWinners', updateItemDescriptionText);
  subscribe('winType', updateItemDescriptionText);
  subscribe('manualPrizes', updateItemDescriptionText);

  // 이벤트 핸들러
  itemUseCheckbox.addEventListener('change', handleItemUseChange);

  // 초기 실행
  updateItemDescriptionText();
};

const handleItemUseChange = (event) => {
  setState({ itemUse: event.target.checked });
};

const updateItemDescriptionText = () => {
  let newDescription = "";
  if (getState().itemUse) {
    const winCount = getState().totalWinners;
    if (winCount === 0) {
      newDescription = "[설정에 따라 자동으로 입력됩니다.]";
    } else if (getState().winType === 'win-fail') {
      newDescription = `[당첨 ${winCount}개]`;
    } else if (getState().winType === 'manual-entry') {
      const prizeList = getState().manualPrizes.filter(value => value.trim() !== '').join(', ');
      newDescription = prizeList ? `[당첨 : ${prizeList}]` : "[설정에 따라 자동으로 입력됩니다.]";
    } else {
      newDescription = "[설정에 따라 자동으로 입력됩니다.]";
    }
  } else {
    newDescription = "[상품 안내를 하지 않습니다.]";
  }
  setState({ itemDescription: newDescription });
  setItemDescriptionInput(newDescription); // UI 업데이트 추가
};

export { initializeItemDescriptionManager };
