class Scrollhandler {
  constructor(){
    this.navbar = document.querySelector('.navbar');
    this.logo = document.querySelector('#logo');
    window.onscroll = () => {
      this.backgroundchanger();
    }
  }

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
