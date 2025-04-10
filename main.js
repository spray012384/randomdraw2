// main.js
import { initializeTitleManager } from './titleManager.js';
import { initializeItemDescriptionManager } from './itemDescriptionManager.js';
import { initializeGridSettingsManager } from './gridSettingsManager.js';
import { initializeWinSettingsManager } from './winSettingsManager.js';
import { initializePositionSettingsManager } from './positionSettingsManager.js';
import { initializeDesignSettingsManager } from './designSettingsManager.js';
import { initializeEventHandler } from './eventHandler.js';

document.addEventListener('DOMContentLoaded', () => {
  initializeTitleManager();
  initializeItemDescriptionManager();
  initializeGridSettingsManager();
  initializeWinSettingsManager();
  initializePositionSettingsManager();
  initializeDesignSettingsManager();
  initializeEventHandler();

  console.log('랜덤 뽑기 애플리케이션 초기화 완료!');
});
