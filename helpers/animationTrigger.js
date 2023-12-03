// SUMMARY:
//  this class manages the accordion effect. When a button is clicked,
// it toggles the visibility of the corresponding content panel by adding
// or removing the show class. If a different button is clicked,
// it hides the previously displayed content panel and shows the newly clicked one.

class AccordionEffectManager {
  // Constructor:
  // Initializes the class.
  // Queries and stores references to all elements with the class .accordion-btn (buttons)
  // and .accordionContent (content panels).

  constructor() {
    this.buttons = document.querySelectorAll('.accordion-btn');
    this.accordionContents = document.querySelectorAll('.accordionContent');
    this.init();
  }

  // init():
  // Initializes the accordion functionality.
  // Adds a click event listener to each button.
  // When a button is clicked, it calls handleButtonClick with the index of the clicked button.

  init() {
    this.buttons.forEach((button, index) => {
      button.addEventListener('click', () => this.handleButtonClick(index));
    });
  }

  // handleButtonClick(index):
  // Toggles the visibility of the content panels based on the clicked button.
  // Loops through all content panels (accordionContents).
  // If the index matches the clicked button, it toggles the class show (if it's present,
  // it removes it; if it's absent, it adds it).
  // If the index does not match, it removes the class show from the content panel,
  // effectively hiding it.

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
