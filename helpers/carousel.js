class CarouselHandler {
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
