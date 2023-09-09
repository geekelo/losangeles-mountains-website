class AccordionManager {
  constructor() {
    this.collapses = document.querySelectorAll('.collapse');
    this.buttons = document.querySelectorAll('.accordion-btn');
    this.init();
    this.buttons[0].classList.add('active');
    this.collapses[0].style.display = 'flex';
    this.checkButtons();
    // Trigger click on the first button after the page loads
    document.addEventListener('DOMContentLoaded', function() {
      const firstButton = document.querySelector('.accordion-btn:first-of-type');
      firstButton.click();
    });
  }

  init() {
    this.collapses.forEach(collapse => {
      collapse.addEventListener('show.bs.collapse', this.handleCollapseShow.bind(this));
      collapse.addEventListener('hide.bs.collapse', this.handleCollapseHide.bind(this));
    });
  }

  checkButtons() {
    this.buttons.forEach((each, index) => {
      if (each.classList.contains('active')) {
        each.setAttribute('aria-expanded', 'true');
        this.collapses[index].style.display = 'flex';
      } else {
        each.setAttribute('aria-expanded', 'false');
        this.collapses[index].style.display = 'none';
      }
    })
  }

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

  handleCollapseHide(event) {
    const hiddenCollapseId = event.target.id;
    const hiddenButton = document.querySelector(`[href="#${hiddenCollapseId}"]`);
    hiddenButton.classList.backgroundColor = '';
    hiddenButton.classList.remove('active');
  }
}

export default AccordionManager;
