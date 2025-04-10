// positionSettingsManager.js
import { state, setState, getState, subscribe } from './stateManager.js';
import { positionTypeGroup, updatePositionTypeSelection } from './uiManager.js';

const initializePositionSettingsManager = () => {
  // 초기 로딩 시 UI 반영
  updatePositionTypeSelection(getState().positionType);

  // 상태 변화 감지 및 UI 업데이트
  subscribe('positionType', updatePositionTypeSelection);

  // 이벤트 핸들러
  positionTypeGroup.addEventListener('click', handlePositionTypeButtonClick);
};

const handlePositionTypeButtonClick = (event) => {
  if (event.target.tagName === 'BUTTON') {
    setState({ positionType: event.target.id });
  }
};

export { initializePositionSettingsManager };
