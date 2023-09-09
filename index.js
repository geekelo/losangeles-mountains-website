import Scrollhandler from './helpers/scrolltop.js';
import CarouselHandler from './helpers/carousel.js';
import AccordionManager from './helpers/accordion.js';
import ScheduleTableGenerator from './helpers/schedule.js';
import AccordionEffectManager from './helpers/animationTrigger.js';
import MobileMenuManager from './helpers/mobileMenu.js';

const intializeScroll = new Scrollhandler();
const initializeCarousel = new CarouselHandler();
const intializeAccordion = new AccordionManager();
const initializeMobileMenu = new MobileMenuManager();
const initializeGenerator = new ScheduleTableGenerator();
const initializeAccordionEffect = new AccordionEffectManager();

export {
    initializeCarousel,
    intializeAccordion,
    initializeMobileMenu,
    initializeGenerator,
    initializeAccordionEffect
};

export default intializeScroll;
