
const workGalleryItems = [{
    img: './images/work-examples/image-1.jpg',
    alt: 'Summer'
  }, {
    img: './images/work-examples/image-2.jpg',
    alt: 'Season'
  }, {
    img: './images/work-examples/image-3.jpg',
    alt: 'New product'
  }, {
    img: './images/work-examples/image-4.jpg',
    alt: 'Healing Cream'
  },{
    img: './images/work-examples/image-5.jpg',
    alt: 'Speakers'
  }, {
    img: './images/work-examples/image-6.jpg',
    alt: 'Model'
  }];

  const DESKTOP_COUNT = 4;
  const MOBILE_COUNT = 4;
  const MOBILE_BREAKPOINT = 680;
  
let shownCount = 0;
  
  const openModal = (content) => {
    const modalContent = videoModal.querySelector('.video-modal__content');
    modalContent.innerHTML = `
      <span class="video-modal__close"></span>
      ${content}
    `;
    videoModal.style.display = 'block';
    document.body.classList.add('modal-opened');
  
    const video = modalContent.querySelector('video');
    if (video) {
      video.play();
    }
  }
  
  const onGalleryItemClick = (item) => {
    if (item.video) {
      openModal(`<video class="video-modal__player" controls autoplay>
        <source src="${item.video}" type="video/mp4">
        Your browser does not support the video tag.
      </video>`);
    } else if (item.img) {
      openModal(`<img src="${item.img}" alt="${item.alt}" class="video-modal__player">`);
    }
  };
  
  const renderGallery = () => {
    const shownContainer = document.getElementById('gallery-shown');
    const hiddenContainer = document.getElementById('gallery-hidden');
    const shownItems = workGalleryItems.slice(0, shownCount);  
    const hiddenItems = workGalleryItems.slice(shownCount);

    shownContainer.innerHTML = '';
    hiddenContainer.innerHTML = '';
  
    const renderItem = (item) => {
        const {video, img, alt} = item;
      const itemContainer = document.createElement('div');
      itemContainer.classList.add('work-examples__image-container');
      if (video) {
        itemContainer.dataset.video = video;
      }
      itemContainer.innerHTML = `
        <div class="work-examples__image-wrap"><img src="${img}" alt="${alt}" class="work-examples__image" width="340" height="340"></div>
        ${video ? '<div class="work-examples__play-button"></div>' :''}
      `;
      itemContainer.onclick = () => onGalleryItemClick(item);
      return itemContainer;
    }
  
    shownItems.forEach(item => {
      shownContainer.appendChild(renderItem(item));
    });
    hiddenItems.forEach(item => {
      hiddenContainer.appendChild(renderItem(item));
    });
  };

  const toggleShowMore = () => {
    const showMoreBtn = document.getElementById('showMoreBtn');
    const shownGallery = document.getElementById('gallery-shown');
    const hiddenGallery = document.getElementById('gallery-hidden');

    hiddenGallery.classList.toggle('work-examples__gallery--visible');
    shownGallery.classList.toggle('work-examples__gallery--shown');
      
      if (hiddenGallery.classList.contains('work-examples__gallery--visible')) {
        showMoreBtn.textContent = 'Сховати';
        
        setTimeout(() => {
          const bottomOfHiddenGallery = hiddenGallery.getBoundingClientRect().bottom;
          const scrollPosition = window.scrollY + bottomOfHiddenGallery - window.innerHeight + 150;
          window.scrollTo({
            top: scrollPosition,
            behavior: 'smooth'
          });
        }, 500);
      } else {
        showMoreBtn.textContent = 'Показати більше';
        showMoreBtn.style.transform = 'translateY(0)';
      }
  };

  const closeModal = () => {
    const videoModal = document.getElementById('videoModal');
    videoModal.style.display = 'none';
    document.body.classList.remove('modal-opened');
    const modalContent = videoModal.querySelector('.video-modal__content');
    modalContent.innerHTML = '';
  }

  const updateShownCount = () => {
    const clientWidth = window.innerWidth;
    
    let count;
    if (clientWidth <= MOBILE_BREAKPOINT) {
        count = MOBILE_COUNT;
    } else {
        count = DESKTOP_COUNT;
    }
    if (count !== shownCount) {
        shownCount = count;
    }
  };

  const onCheckListItemClick = (imgItem) => {
    const imgElement = imgItem.querySelector('img');
    onGalleryItemClick({
      img: imgElement.src,
      alt: imgElement.alt
    })
  };

  const checkListHandlers = () => {
    const images = document.querySelectorAll('.check-list-section__img');
    images.forEach(img => {
      img.addEventListener('click', () => {
        onCheckListItemClick(img);
      })
    });
  };

  export const onLoad = () => {
    const showMoreBtn = document.getElementById('showMoreBtn');
    const videoModal = document.getElementById('videoModal');

    updateShownCount();

    checkListHandlers();

    renderGallery();

    window,addEventListener("resize", () => {
        updateShownCount();

        renderGallery();
    });
  
    showMoreBtn.addEventListener('click', function(e) {
      e.preventDefault();
      
      toggleShowMore();
    });
  
    videoModal.addEventListener('click', function(e) {
      if (e.target === videoModal || e.target.classList.contains('video-modal__close')) {
        closeModal();
      }
    });
  };
