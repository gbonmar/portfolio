// Random quote generator - Start

var quotes = [
  "The greatest glory in living lies not in never falling, but in rising every time we fall. <br>-Nelson Mandela",
  "The way to get started is to quit talking and begin doing. <br>-Walt Disney",
  "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking. <br>Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
  "If life were predictable it would cease to be life, and be without flavor. <br>Eleanor Roosevelt",
  "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. <br>-Oprah Winfrey",
  "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. <br>-James Cameron",
  "Life is what happens when you're busy making other plans. <br>-John Lennon",
  "Spread love everywhere you go. Let no one ever come to you without leaving happier. <br>-Mother Teresa",
  "When you reach the end of your rope, tie a knot in it and hang on. <br>-Franklin D. Roosevelt",
  "Always remember that you are absolutely unique. Just like everyone else. <br>-Margaret Mead",
   "Don't judge each day by the harvest you reap but by the seeds that you plant. <br>-Robert Louis Stevenson",
  "The future belongs to those who believe in the beauty of their dreams. <br>-Eleanor Roosevelt",
  "Tell me and I forget. Teach me and I remember. Involve me and I learn. <br>-Benjamin Franklin",
  "The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart. <br>-Helen Keller",
  "It is during our darkest moments that we must focus to see the light. <br>-Aristotle",
  "Whoever is happy will make others happy too. <br>-Anne Frank",
  "Do not go where the path may lead, go instead where there is no path and leave a trail. <br>-Ralph Waldo Emerson",
  "You will face many defeats in life, but never let yourself be defeated. <br>-Maya Angelou",
  "The greatest glory in living lies not in never falling, but in rising every time we fall. <br>-Nelson Mandela",
  "In the end, it's not the years in your life that count. It's the life in your years. <br>-Abraham Lincoln",
  "Never let the fear of striking out keep you from playing the game. <br>-Babe Ruth",
  "Life is either a daring adventure or nothing at all. <br>-Helen Keller",
  "Many of life's failures are people who did not realize how close they were to success when they gave up. <br>-Thomas A. Edison",
  "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. <br>-Dr. Seuss"
];

function generateQuote() {
  var randomIndex = Math.floor(Math.random() * quotes.length);
  var quoteElement = document.getElementById("quote");
  quoteElement.innerHTML = quotes[randomIndex];
}


// Random quote generator - End

// Project open - Start


function on() {
  document.getElementById("overlayBackground").style.height = "100%";
}

function off() {
  document.getElementById("overlayBackground").style.height = "0%";
}


function on1() {
  document.getElementById("overlayProject01").style.height = "100%";
}

function off1() {
  document.getElementById("overlayProject01").style.height = "0%";
}

function on2() {
  document.getElementById("overlayProject02").style.height = "100%";
}

function off2() {
  document.getElementById("overlayProject02").style.height = "0%";
}

function on3() {
  document.getElementById("overlayProject03").style.height = "100%";
}

function off3() {
  document.getElementById("overlayProject03").style.height = "0%";
}


// Project open - End


// Animation effect - Start

const observer = new IntersectionObserver ((entries) => {
  entries.forEach((entry) => {
      if (entry.isIntersecting) {
          entry.target.classList.add('show');
      } else {
          entry.target.classList.remove('show');
      }
  });
});

const hiddenElements = document.querySelectorAll('.hidden-right');
const hiddenElements2 = document.querySelectorAll('.hidden-left');
hiddenElements.forEach((el) => observer.observe(el));
hiddenElements2.forEach((el) => observer.observe(el));


const observer3 = new IntersectionObserver ((entries) => {
  entries.forEach((entry) => {
      if (entry.isIntersecting) {
          entry.target.classList.add('show2');
      } else {
          entry.target.classList.remove('show2');
      }
  });
});

const hiddenElements3 = document.querySelectorAll('.hidden');
hiddenElements3.forEach((el) => observer3.observe(el));



const observer4 = new IntersectionObserver ((entries) => {
  entries.forEach((entry) => {
      if (entry.isIntersecting) {
          entry.target.classList.add('show3');
      } else {
          entry.target.classList.remove('show3');
      }
  });
});

const hiddenElements4 = document.querySelectorAll('.hidden-up');
hiddenElements4.forEach((el) => observer4.observe(el));



const observer5 = new IntersectionObserver ((entries) => {
  entries.forEach((entry) => {
      if (entry.isIntersecting) {
          entry.target.classList.add('show4');
      } else {
          entry.target.classList.remove('show4');
      }
  });
});

const hiddenElements5 = document.querySelectorAll('.hidden');
hiddenElements5.forEach((el) => observer5.observe(el));


// Animation effect - End

window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar');
  const content = document.getElementById('content');

  // Calculate the height of the navigation bar
  const navbarHeight = navbar.offsetHeight;

  // Calculate the distance from the top of the content section
  const contentOffset = content.offsetTop;

  // If the vertical scroll position is greater than or equal to the content offset,
  // add the 'sticky' class to the navbar; otherwise, remove it
  if (window.pageYOffset >= contentOffset) {
    navbar.classList.add('sticky');
    content.style.paddingTop = navbarHeight + 'px';
  } else {
    navbar.classList.remove('sticky');
    content.style.paddingTop = 0;
  }
});



// Image slider - Start

const carousel = document.querySelector(".carousel"),
firstImg = carousel.querySelectorAll("img")[0],
arrowIcons = document.querySelectorAll(".wrapper i");
const carouselItems = document.querySelectorAll('.carousel-item');
const zoomOverlay = document.querySelector('.zoom-overlay');
const zoomedImage = document.querySelector('.zoom-overlay img');

let currentIndex = 0; // Track the current index of the carousel item

// Attach click event to each carousel item
carouselItems.forEach((item, index) => {
  item.addEventListener('click', function () {
    // Get the image source of the clicked item
    const imageSrc = this.querySelector('img').src;

    // Set the image source for the zoomed image
    zoomedImage.src = imageSrc;

    // Update the current index
    currentIndex = index;

    // Show the zoom overlay
    zoomOverlay.style.display = 'block';
  });
});



// Close button functionality
$(".close-button").on("click", function() {
  $(".zoom-overlay").hide();
});

// Hide the zoom overlay when clicked outside the zoomed image
zoomOverlay.addEventListener('click', function (event) {
  if (event.target === this) {
    this.style.display = 'none';
  }
});

let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;

const showHideIcons = () => {
    // showing and hiding prev/next icon according to carousel scroll left value
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth; // getting max scrollable width
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
}
arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + 14; // getting first img width & adding 14 margin value
        // if clicked icon is left, reduce width value from the carousel scroll left else add to it
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60); // calling showHideIcons after 60ms
    });
});

const autoSlide = () => {
  // if there is no image left to scroll then return from here
  if(carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) > -1 || carousel.scrollLeft <= 0) return;

  positionDiff = Math.abs(positionDiff); // making positionDiff value to positive
  let firstImgWidth = firstImg.clientWidth + 14;
  // getting difference value that needs to add or reduce from carousel left to take middle img center
  let valDifference = firstImgWidth - positionDiff;

  if(carousel.scrollLeft > prevScrollLeft) { // if user is scrolling to the right
      return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
  }
  // if user is scrolling to the left
  carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
}

const dragStart = (e) => {
    // updatating global variables value on mouse down event
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    // scrolling images/carousel to left according to mouse pointer
    if(!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    carousel.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
}

const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");

    if(!isDragging) return;
    isDragging = false;
    autoSlide();
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

document.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);

document.addEventListener("mouseup", dragStop);
carousel.addEventListener("touchend", dragStop);


// Image slider - End



// Soft ID scroll - Start

document.querySelectorAll('a[href^="#"').forEach(anchor => {
  anchor.addEventListener("click", function(e){
    e.preventDefault();

    // Remove the active class from all anchors
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.classList.remove("active");
    });

    // Add the active class to the clicked anchor
    this.classList.add("active");

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior : "smooth"
    });
  })
})


// Soft ID scroll - End