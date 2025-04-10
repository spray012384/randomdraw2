// uiManager.js
const mainTitleDisplay = document.getElementById('main-title-display');
const mainTitleInput = document.getElementById('main-title-input');
const itemUseCheckbox = document.getElementById('item-use');
const itemDescriptionInput = document.getElementById('item-description');
const horizontalInput = document.getElementById('horizontal');
const verticalInput = document.getElementById('vertical');
const totalInput = document.getElementById('total');
const totalErrorText = document.getElementById('total-error-text');
const winTypeGroup = document.getElementById('win-type-group');
const manualInputFieldsContainer = document.getElementById('manual-input-fields');
const positionTypeGroup = document.getElementById('position-type-group');
const designTypeGroup = document.getElementById('design-type-group');
const saveButton = document.getElementById('save-button');
const resetButton = document.getElementById('reset-button');
const previewButton = document.getElementById('preview-button');
const startButton = document.getElementById('start-button');

const updateMainTitleDisplay = (title) => {
  mainTitleDisplay.textContent = title;
};

const setMainTitleInput = (title) => {
  mainTitleInput.value = title;
};

const setItemUseCheckbox = (checked) => {
  itemUseCheckbox.checked = checked;
};

const setItemDescriptionInput = (description) => {
  itemDescriptionInput.value = description;
};

const setHorizontalInput = (value) => {
  horizontalInput.value = value;
};

const setVerticalInput = (value) => {
  verticalInput.value = value;
};

const setTotalInput = (value) => {
  totalInput.value = value;
};

const setTotalErrorText = (text, className) => {
  totalErrorText.textContent = text;
  totalErrorText.className = className;
};

const updateWinTypeSelection = (selectedType) => {
  winTypeGroup.querySelectorAll('button').forEach(button => {
    button.classList.remove('selected');
    if (button.id === selectedType) {
      button.classList.add('selected');
    }
  });
};

const clearManualInputFields = () => {
  manualInputFieldsContainer.innerHTML = '';
};

const appendManualInputField = (label, inputField) => {
  const inputRow = document.createElement('div');
  inputRow.className = 'manual-input-row';
  inputRow.appendChild(label);
  inputRow.appendChild(inputField);
  manualInputFieldsContainer.appendChild(inputRow);
};

const updatePositionTypeSelection = (selectedType) => {
  positionTypeGroup.querySelectorAll('button').forEach(button => {
    button.classList.remove('selected');
    if (button.id === selectedType) {
      button.classList.add('selected');
    }
  });
};

const updateDesignTypeSelection = (selectedType) => {
  designTypeGroup.querySelectorAll('button').forEach(button => {
    button.classList.remove('selected');
    if (button.id === selectedType) {
      button.classList.add('selected');
    }
  });
};

export {
  mainTitleDisplay,
  mainTitleInput,
  itemUseCheckbox,
  itemDescriptionInput,
  horizontalInput,
  verticalInput,
  totalInput,
  totalErrorText,
  winTypeGroup,
  manualInputFieldsContainer,
  positionTypeGroup,
  designTypeGroup,
  saveButton,
  resetButton,
  previewButton,
  startButton,
  updateMainTitleDisplay,
  setMainTitleInput,
  setItemUseCheckbox,
  setItemDescriptionInput,
  setHorizontalInput,
  setVerticalInput,
  setTotalInput,
  setTotalErrorText,
  updateWinTypeSelection,
  clearManualInputFields,
  appendManualInputField,
  updatePositionTypeSelection,
  updateDesignTypeSelection,
};
