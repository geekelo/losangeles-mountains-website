class AccordionEffectManager {
  constructor() {
    this.buttons = document.querySelectorAll('.accordion-btn');
    this.accordionContents = document.querySelectorAll('.accordionContent');
    this.init();
  }

  init() {
    this.buttons.forEach((button, index) => {
      button.addEventListener('click', () => this.handleButtonClick(index));
    });
  }
  
  handleButtonClick(index) {
    // Toggle the 'show' class for the clicked .accordionContent element
    this.accordionContents.forEach((content, contentIndex) => {
      if (contentIndex === index) {
        content.classList.toggle('show'); // Toggle 'show' class for the clicked element
      } else {
        content.classList.remove('show'); // Remove 'show' class from other elements
      }
    });
  }
}

export default AccordionEffectManager;
