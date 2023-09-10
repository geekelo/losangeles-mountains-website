// SUMAMARY:
// this class handles the initialization of carousel images, 
// both for mobile and desktop views. It creates the necessary HTML elements, adds images to the carousels, 
// and sets up indicators to navigate through the images.

class CarouselHandler {

  // Constructor:
  // Initializes the class.
  // Creates an array carouselImages containing objects with src (image source) 
  // and alt (image alt text) properties.
  
  constructor() {
    this.carouselImages = [ 
      {
        'src': './assets/thumb1.png',
        'alt': 'slide'
      },
      {
        'src': './assets/thumb2.png',
        'alt': 'slide'
      },
      {
        'src': './assets/thumb1.png',
        'alt': 'slide'
      },
      {
        'src': './assets/thumb1.png',
        'alt': 'slide'
      },
      {
        'src': './assets/thumb1.png',
        'alt': 'slide'
      },
      {
        'src': './assets/thumb2.png',
        'alt': 'slide'
      },
      {
        'src': './assets/thumb1.png',
        'alt': 'slide'
      },
      {
        'src': './assets/thumb2.png',
        'alt': 'slide'
      },
      {
        'src': './assets/thumb1.png',
        'alt': 'slide'
      },
      {
        'src': './assets/thumb2.png',
        'alt': 'slide'
      },
      {
        'src': './assets/thumb1.png',
        'alt': 'slide'
      },
      {
        'src': './assets/thumb2.png',
        'alt': 'slide'
      }
      // Add more images as needed
    ];
    
    this.displayCarouselImages();
    this.addImagesToDesktopCarousel()
    // ... (Rest of your code) ...
  }

  // displayCarouselImages():
  // Finds the carousel inner container and carousel indicators elements.
  //  Iterates through carouselImages.
  //  For each image, it creates a div element with the class 'carousel-item' and adds an img element with the corresponding src and alt.
  //  The first image is marked as active.
  //  Creates indicators for each image.
  //  Appends the created elements to the carousel.

  displayCarouselImages() {
    const carouselInner = document.querySelector('.mobileCarousel');
    const carouselIndicators = document.querySelector('.carousel-indicators'); // Add this line
  
    this.carouselImages.forEach((imageObj, index) => {
      const imageElement = document.createElement('div');
      imageElement.classList.add('carousel-item', 'd-lg-none', 'd-md-none');
      if (index === 0) {
        imageElement.classList.add('active');
      }
      imageElement.innerHTML = `
        <img src="${imageObj.src}" class="d-block w-100 mobileImage" alt="${imageObj.alt}">
      `;
      carouselInner.appendChild(imageElement);
  
      // Create an indicator for each image
      const indicator = document.createElement('button');
      indicator.type = 'button';
      indicator.dataset.bsTarget = '#carouselExampleIndicators';
      indicator.dataset.bsSlideTo = index;
      if (index === 0) {
        indicator.classList.add('active');
      }
      carouselIndicators.appendChild(indicator);
    });
  }
  
  // addImagesToDesktopCarousel():
  // Finds the desktop carousel inner container and carousel indicators elements.
  // Loops through the images in groups of 4.
  // Creates a div element for each set of 4 images, adding the class 'carousel-item' and marking the first as active.
  // Adds 4 images to each carousel item.
  // Creates an indicator for each item.
  // Appends the created elements to the desktop carousel.

  addImagesToDesktopCarousel() {
    const carouselInnerDesktop = document.querySelector('.desktopCarousel');
    const carouselIndicators = document.querySelector('.desktop');
  
    for (let i = 0; i < this.carouselImages.length / 4; i++) {
      // Create a carousel item for each set of 4 images
      const carouselItem = document.createElement('div');
      carouselItem.classList.add('carousel-item');
      if (i === 0) {
        carouselItem.classList.add('active');
      }
  
      // Add 4 images to each carousel item
      for (let j = i * 4; j < i * 4 + 4 && j < this.carouselImages.length; j++) {
        const imageElement = document.createElement('img');
        imageElement.classList.add('w-10', 'desktopImages', 'd-inline', 'd-lg-inline');
        imageElement.src = this.carouselImages[j].src;
        imageElement.alt = this.carouselImages[j].alt;
        carouselItem.appendChild(imageElement);
      }
  
      // Create an indicator for each item
      const indicator = document.createElement('button');
      indicator.type = 'button';
      indicator.classList.add('indicat');
      indicator.dataset.bsTarget = '#carouselExampleIndicators2';
      indicator.dataset.bsSlideTo = i;
      if (i === 0) {
        indicator.classList.add('active');
      }
      carouselIndicators.appendChild(indicator);
  
      carouselInnerDesktop.appendChild(carouselItem);
    }
  }
}

export default CarouselHandler;
