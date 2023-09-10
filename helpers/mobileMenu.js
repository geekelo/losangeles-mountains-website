class MobileMenumanager {

  // Constructor:
  // Initializes the class and sets up initial properties.
  // Selects elements from the DOM using query selectors and assigns them to respective properties:
  // this.openmenu: The first element with class 'openmenu'.
  // this.closemenu: The first element with class 'closemenu'.
  // this.mobilemenucontainer: The element with ID 'menu'.
  // this.navItems: All elements with class 'nav-link'.
  // Calls two other methods, openMenuHandler and closeMenuHandler, which set up event listeners.

  constructor() {
    this.openmenu = document.querySelectorAll('.openmenu')[0];
    this.closemenu = document.querySelectorAll('.closemenu')[0];
    this.mobilemenucontainer = document.querySelector('#menu');
    this.navItems = document.querySelectorAll('.nav-link');
    this.openMenuHandler();
    this.closeMenuHandler();
  }

  // openMenuHandler:
  // Adds an event listener to the openmenu element for a 'click' event.
  // When the openmenu element is clicked, the following actions occur:
  // Adds the class 'active' to this.openmenu.
  // Adds the class 'active' to this.closemenu.
  // Adds the class 'active' to this.mobilemenucontainer.
  // Iterates over each element in this.navItems and adds the class 'active' to each.

  openMenuHandler() {
    this.openmenu.addEventListener('click', () => {
      this.openmenu.classList.add('active');
      this.closemenu.classList.add('active');
      this.mobilemenucontainer.classList.add('active');
      this.navItems.forEach((each) => each.classList.add('active'));
    })
  }

  // closeMenuHandler:
  // Adds an event listener to the closemenu element for a 'click' event.
  // When the closemenu element is clicked, the following actions occur:
  // Removes the class 'active' from this.openmenu.
  // Removes the class 'active' from this.closemenu.
  // Removes the class 'active' from this.mobilemenucontainer.
  // Iterates over each element in this.navItems and removes the class 'active' from each.
  // Additionally, for each element in this.navItems, it adds another event listener for a 'click' event.
  // When any element in this.navItems is clicked, the following actions occur:
  // Removes the class 'active' from this.openmenu.
  // Removes the class 'active' from this.closemenu.
  // Removes the class 'active' from this.mobilemenucontainer.
  // Iterates over each element in this.navItems and removes the class 'active' from each.
  // This ensures that clicking any element in this.navItems will close the mobile menu.

  closeMenuHandler() {
    this.closemenu.addEventListener('click', () => {
      this.openmenu.classList.remove('active');
      this.closemenu.classList.remove('active');
      this.mobilemenucontainer.classList.remove('active');
      this.navItems.forEach((each) => each.classList.remove('active'));
    })

    this.navItems.forEach((each) => each.addEventListener('click', () => {
      this.openmenu.classList.remove('active');
      this.closemenu.classList.remove('active');
      this.mobilemenucontainer.classList.remove('active');
      this.navItems.forEach((each) => each.classList.remove('active'));
    }))
  }
}

export default MobileMenumanager;
