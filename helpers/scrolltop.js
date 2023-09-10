//  SUMMARY:
//  This class provides functionality to change the appearance of the navigation bar and 
//  logo based on the user's scrolling behavior. If the user scrolls down a little, the 
//  navigation bar becomes sticky and the logo changes. If the user scrolls back to the top, the navigation bar reverts to its original state and the logo also changes back.

class Scrollhandler {

  // CONSTRUCTOR:
  // - Initializes the class.
  // - Assigns the .navbar element and #logo element to this.navbar 
  //   and this.logo, respectively.
  // - Sets up a window event listener for scroll events. When the user scrolls, 
  //   it triggers the backgroundchanger method.

  constructor(){
    this.navbar = document.querySelector('.navbar');
    this.logo = document.querySelector('#logo');
    window.onscroll = () => {
      this.backgroundchanger();
    }
  }

  // BACKGROUND CHANGER:
  // - Checks the vertical scroll position of the document.
  // - If the scroll position is greater than 2 pixels (meaning the user has scrolled down):
  //   Adds the class 'stickybar' to the .navbar element, which likely makes it stick to the top of the page.
  // - Changes the src attribute of the #logo element to './assets/logotxt.png', likely changing the logo image to a different one.
  //   If the scroll position is less than or equal to 2 pixels (meaning the user is at or near the top of the page):
  //   Removes the class 'stickybar' from the .navbar element.
  //   Resets the src attribute of the #logo element back to './assets/logo.png', likely reverting it to the original logo.

  backgroundchanger() {
    if (document.body.scrollTop > 2 || document.documentElement.scrollTop > 2) {
      this.navbar.classList.add('stickybar');
      this.logo.setAttribute('src', './assets/logotxt.png');
    } else {
      this.navbar.classList.remove('stickybar');
      this.logo.setAttribute('src', './assets/logo.png');
    }
  }
}

export default Scrollhandler;


