// stateManager.js
const state = {
  mainTitle: "랜덤 뽑기",
  itemUse: false,
  itemDescription: "[상품 안내를 하지 않습니다.]",
  horizontal: 0,
  vertical: 0,
  totalWinners: 0,
  winType: 'win-fail',
  manualPrizes: [],
  positionType: 'random-position',
  designType: 'default-design',
  // ... 기타 상태 (필요에 따라 추가)
};

const listeners = {};

const subscribe = (stateKey, listener) => {
  if (!listeners[stateKey]) {
    listeners[stateKey] = [];
  }
  listeners[stateKey].push(listener);
};

const setState = (newState) => {
  let hasChanged = false;
  for (const key in newState) {
    if (state[key] !== newState[key]) {
      state[key] = newState[key];
      hasChanged = true;
      if (listeners[key]) {
        listeners[key].forEach(listener => listener(state[key]));
      }
    }
  }
  if (hasChanged && listeners.all) {
    listeners.all.forEach(listener => listener(state));
  }
};

const getState = () => ({ ...state });

const subscribeAll = (listener) => {
  if (!listeners.all) {
    listeners.all = [];
  }
  listeners.all.push(listener);
};

export { state, setState, getState, subscribe, subscribeAll };
