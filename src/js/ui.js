export const UICtrl = (() => {
  const UISelectors = {
    selectionItems: '.selection__list__item'
  };

  return {
    getSelectors: () => {
      return UISelectors;
    }
  };
})();
