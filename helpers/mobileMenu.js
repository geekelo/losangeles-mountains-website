class MobileMenuManager {
  constructor() {
    this.openMenuButton = document.querySelector('.openmenu');
    this.closeMenuButton = document.querySelector('.closeMenu');
    this.mobileMenu = document.querySelector('.mobileMenu');

    this.init();
  }

  init() {
    this.openMenuButton.addEventListener('click', () => this.toggleMenu());
    this.closeMenuButton.addEventListener('click', () => this.toggleMenu());

    this.mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => this.toggleMenu());
    });
  }

  toggleMenu() {
    this.openMenuButton.style.display = 'none';
    this.closeMenuButton.style.display = 'block';
    this.mobileMenu.style.display = this.mobileMenu.style.display === 'none' ? 'flex' : 'none';
  }
}

export default MobileMenuManager();