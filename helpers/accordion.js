// SUMMARY:
// this class manages the accordion functionality. It ensures that when a collapse
// element is shown or hidden, the corresponding button is marked as active and the
// display styles are updated accordingly. It also initializes the accordion on page load.

class AccordionManager {
  // Constructor:
  // Initializes the class.
  // Queries and stores references to all elements with
  // the class .collapse (content panels) and .accordion-btn (buttons).
  // Calls the init() function.
  // Sets the first button and its corresponding collapse panel to be initially active and visible.
  // Calls the checkButtons() function to ensure proper initialization.
  // Adds an event listener to trigger a click on the first button once the DOM is fully loaded.

  constructor() {
    this.collapses = document.querySelectorAll('.collapse');
    this.buttons = document.querySelectorAll('.accordion-btn');
    this.init();
    this.buttons[0].classList.add('active');
    this.collapses[0].style.display = 'flex';
    this.active = 'active';
    this.checkButtons();
    // Trigger click on the first button after the page loads
    document.addEventListener('DOMContentLoaded', () => {
      const firstButton = document.querySelector('.accordion-btn:first-of-type');
      firstButton.click();
    });
  }

  // init() method:
  // Initializes the accordion functionality.
  // Adds event listeners for when a collapse element is shown or hidden.

  init() {
    this.collapses.forEach((collapse) => {
      collapse.addEventListener('show.bs.collapse', this.handleCollapseShow.bind(this));
      collapse.addEventListener('hide.bs.collapse', this.handleCollapseHide.bind(this));
    });
  }

  // checkButtons():
  // Checks the state of the buttons and corresponding collapse panels.
  // Updates the aria-expanded attribute and display styles accordingly.

  checkButtons() {
    this.buttons.forEach((each, index) => {
      if (each.classList.contains('active')) {
        each.setAttribute('aria-expanded', 'true');
        this.collapses[index].style.display = 'flex';
      } else {
        each.setAttribute('aria-expanded', 'false');
        this.collapses[index].style.display = 'none';
      }
    });
  }

  // handleCollapseShow(event):
  // Handles the event when a collapse element is shown.
  // Prevents the default behavior of the event.
  // Retrieves the ID of the active collapse.
  // Finds the corresponding button and marks it as active.
  // Calls checkButtons() to update the buttons and collapse panels.

  handleCollapseShow(event) {
    event.preventDefault();
    const activeCollapseId = event.target.id;
    const activeButton = document.querySelector(`[href="#${activeCollapseId}"]`);

    this.buttons.forEach((button) => {
      if (button !== activeButton) {
        button.classList.remove('active');
      } else {
        button.classList.add('active');
      }
    });

    this.checkButtons();
  }

  // handleCollapseHide(event):
  // Handles the event when a collapse element is hidden.
  // Retrieves the ID of the hidden collapse.
  // Finds the corresponding button and removes the 'active' class.

  handleCollapseHide(event) {
    const hiddenCollapseId = event.target.id;
    const hiddenButton = document.querySelector(`[href="#${hiddenCollapseId}"]`);
    hiddenButton.classList.backgroundColor = '';
    hiddenButton.classList.remove(this.active);
  }
}

export default AccordionManager;
