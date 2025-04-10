// stateManager.js
const state = {
    mainTitle: "랜덤 뽑기",
    // ... 기타 상태 ...
};

const listeners = {};

const subscribe = (stateKey, listener) => {
    if (!listeners[stateKey]) {
        listeners[stateKey] = [];
    }
    listeners[stateKey].push(listener);
};

const setState = (newState) => {
    Object.assign(state, newState); // 상태를 직접 갱신
    for (const key in newState) {
        if (listeners[key]) {
            listeners[key].forEach(listener => listener(state[key]));
        }
    }
    if (listeners.all) {
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
