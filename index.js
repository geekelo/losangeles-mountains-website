import Scrollhandler from './helpers/scrolltop.js';
import MobileMenumanager from './helpers/mobileMenu.js';
import CarouselHandler from './helpers/carousel.js';
import AccordionManager from './helpers/accordion.js';
import ScheduleTableGenerator from './helpers/schedule.js';
import AccordionEffectManager from './helpers/animationTrigger.js';

const intializeScroll = new Scrollhandler();
const initializeMobileMenu = new MobileMenumanager();
const initializeCarousel = new CarouselHandler();
const intializeAccordion = new AccordionManager();
const initializeGenerator = new ScheduleTableGenerator();
const initializeAccordionEffect = new AccordionEffectManager();

export default intializeScroll;
export {
    initializeMobileMenu,
    initializeCarousel,
    intializeAccordion,
    initializeGenerator,
    initializeAccordionEffect,
};
