// designSettingsManager.js
import { state, setState, getState, subscribe } from './stateManager.js';
import { designTypeGroup, updateDesignTypeSelection } from './uiManager.js';

const initializeDesignSettingsManager = () => {
  // 초기 로딩 시 UI 반영
  updateDesignTypeSelection(getState().designType);

  // 상태 변화 감지 및 UI 업데이트
  subscribe('designType', updateDesignTypeSelection);

  // 이벤트 핸들러
  designTypeGroup.addEventListener('click', handleDesignTypeButtonClick);
};

const handleDesignTypeButtonClick = (event) => {
  if (event.target.tagName === 'BUTTON') {
    setState({ designType: event.target.id });
  }
};

export { initializeDesignSettingsManager };
