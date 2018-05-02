import { UICtrl } from './ui';
import { languages } from './storage';

export const App = ((UIController, LanguageInfo) => {
  const removeSelectorActive = () => {
    const UISelectors = UIController.getSelectors();
    const selectionItems = document.querySelectorAll(UISelectors.selectionItems);
    selectionItems.forEach((item) => {
      item.classList.add('active');
    });
  };

  const showSelectorInfo = (e) => {
    e.preventDefault();
    const language = e.target.getAttribute('data-language');
    const selectionContent = e.target.parentNode.parentNode.parentNode.children[0];
    const selectionTitle = selectionContent.children[0];
    const selectionText = selectionContent.children[1];

    selectionContent.classList.remove('active');
    selectionTitle.classList.remove('active');
    selectionText.classList.remove('active');
    removeSelectorActive();
    setTimeout(() => {
      e.target.classList.remove('active');

      selectionTitle.innerHTML = LanguageInfo[language].title;
      selectionText.innerHTML = LanguageInfo[language].description;

      selectionContent.classList.add('active');
      selectionTitle.classList.add('active');
      selectionText.classList.add('active');
    }, 800);
  };

  const loadEventListeners = () => {
    const UISelectors = UIController.getSelectors();
    const selectionItems = document.querySelectorAll(UISelectors.selectionItems);

    selectionItems.forEach((item) => {
      item.addEventListener('click', showSelectorInfo);
    });
  };

  return {
    init: () => {
      // Load event listeners
      loadEventListeners();
    }
  };
})(UICtrl, languages);
