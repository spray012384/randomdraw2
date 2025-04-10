// gridSettingsManager.js
import { state, setState, getState, subscribe } from './stateManager.js';
import { horizontalInput, verticalInput, totalInput, setHorizontalInput, setVerticalInput, setTotalInput, setTotalErrorText } from './uiManager.js';

const initializeGridSettingsManager = () => {
  // 초기 로딩 시 UI 반영
  setHorizontalInput(getState().horizontal);
  setVerticalInput(getState().vertical);
  setTotalInput(getState().totalWinners);
  updateTotalErrorText();

  // 이벤트 핸들러
  horizontalInput.addEventListener('input', handleHorizontalInputChange);
  verticalInput.addEventListener('input', handleVerticalInputChange);
  totalInput.addEventListener('input', handleTotalInputChange);
};

const handleHorizontalInputChange = (event) => {
  const value = parseInt(event.target.value) || 0;
  const newValue = Math.max(1, Math.min(10, value));
  setHorizontalInput(newValue);
  setState({ horizontal: newValue });
  updateTotalErrorText();
};

const handleVerticalInputChange = (event) => {
  const value = parseInt(event.target.value) || 0;
  const newValue = Math.max(1, Math.min(10, value));
  setVerticalInput(newValue);
  setState({ vertical: newValue });
  updateTotalErrorText();
};

const handleTotalInputChange = (event) => {
  const value = parseInt(event.target.value) || 0;
  const maxTotal = getState().horizontal * getState().vertical;
  const newValue = Math.max(0, Math.min(maxTotal - (maxTotal > 0 ? 1 : 0), value));
  setTotalInput(newValue);
  setState({ totalWinners: newValue });
  updateTotalErrorText();
};

const updateTotalErrorText = () => {
  const horizontal = getState().horizontal;
  const vertical = getState().vertical;
  const totalWinners = getState().totalWinners;
  const maxTotal = horizontal * vertical;
  let errorMessage = "";
  let errorClassName = "input-default-text";

  if (horizontal > 10) {
    errorMessage = "[가로 값은 10을 넘어갈 수 없어요.]";
    errorClassName = "input-error-text";
  } else if (vertical > 10) {
    errorMessage = "[세로 값은 10을 넘어갈 수 없어요.]";
    errorClassName = "input-error-text";
  } else if (totalWinners >= maxTotal && maxTotal > 0) {
    errorMessage = "[당첨 개수가 카드 개수를 초과합니다.]";
    errorClassName = "input-error-text";
  } else if (horizontal === 0 || vertical === 0 || totalWinners === 0) {
    errorMessage = "[가로, 세로, 당첨개수를 입력해주세요.]";
  }

  setTotalErrorText(errorMessage, errorClassName);
};

export { initializeGridSettingsManager };
