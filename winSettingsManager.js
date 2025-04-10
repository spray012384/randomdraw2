// winSettingsManager.js
import { state, setState, getState, subscribe } from './stateManager.js';
import { winTypeGroup, manualInputFieldsContainer, updateWinTypeSelection, clearManualInputFields, appendManualInputField } from './uiManager.js';

const initializeWinSettingsManager = () => {
  // 초기 로딩 시 UI 반영
  updateWinTypeSelection(getState().winType);
  renderManualPrizeInputs(getState().totalWinners, getState().manualPrizes);

  // 상태 변화 감지 및 UI 업데이트
  subscribe('winType', handleWinTypeChangeUI);
  subscribe('totalWinners', handleTotalWinnersChange);
  subscribe('manualPrizes', handleManualPrizesChange); // 추가

  // 이벤트 핸들러
  winTypeGroup.addEventListener('click', handleWinTypeButtonClick);
  manualInputFieldsContainer.addEventListener('input', handleManualInputChange);
};

const handleWinTypeButtonClick = (event) => {
  if (event.target.tagName === 'BUTTON') {
    setState({ winType: event.target.id });
  }
};

const handleWinTypeChangeUI = (newWinType) => {
  updateWinTypeSelection(newWinType);
  renderManualPrizeInputs(getState().totalWinners, getState().manualPrizes);
};

const handleTotalWinnersChange = (newTotalWinners) => {
  renderManualPrizeInputs(newTotalWinners, getState().manualPrizes);
};

const handleManualPrizesChange = (newManualPrizes) => {
  renderManualPrizeInputs(getState().totalWinners, newManualPrizes);
};

const renderManualPrizeInputs = (winCount, manualPrizes) => {
  clearManualInputFields();
  if (getState().winType === 'manual-entry' && winCount > 0) {
    for (let i = 0; i < winCount; i++) {
      const label = document.createElement('label');
      label.textContent = `당첨 ${i + 1}`;
      const inputField = document.createElement('input');
      inputField.type = 'text';
      inputField.placeholder = `당첨 ${i + 1} 내용 입력`;
      inputField.value = manualPrizes[i] || '';
      inputField.dataset.index = i; // 데이터 속성으로 인덱스 저장
      appendManualInputField(label, inputField);
    }
  }
};

const handleManualInputChange = (event) => {
  if (event.target.type === 'text') {
    const index = parseInt(event.target.dataset.index);
    const value = event.target.value;
    const updatedManualPrizes = [...getState().manualPrizes];
    updatedManualPrizes[index] = value;
    setState({ manualPrizes: updatedManualPrizes });
  }
};

export { initializeWinSettingsManager };
