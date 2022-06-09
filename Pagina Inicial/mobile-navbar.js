class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
        /*Botão do Menu*/
        this.mobileMenu = document.querySelector(mobileMenu);
        /*Lista da tag nav*/
        this.navList = document.querySelector(navList);
        /*Links da tag Nav*/
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";
    
        this.handleClick = this.handleClick.bind(this);
    }
 animateLinks(){
     this.navLinks.forEach((link, index) => {
        link.style.animation
         ? (link.style.animation = "")
         : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`);
    });
  }
 handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();
 }

addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
}
init() {
    if (this.mobileMenu) {
        this.addClickEvent();
    }
    return this;
 }
}
 const mobileNavbar = new MobileNavbar(
     ".mobile-menu",
     ".nav-list",
     ".nav-list li",
 );
 mobileNavbar.init();