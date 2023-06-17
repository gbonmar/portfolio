// Random Quote Generator start
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
//end

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

const slider = document.getElementById('slider');
const images = slider.getElementsByTagName('img');
let currentIndex = 0;

function showImage(index) {
  // Hide all images
  for (let i = 0; i < images.length; i++) {
    images[i].style.display = 'none';
  }

  // Show the image at the given index
  images[index].style.display = 'block';
}

function nextImage() {
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  showImage(currentIndex);
}

function previousImage() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  showImage(currentIndex);
}

// Show the first image initially
showImage(currentIndex);

// Automatically advance to the next image every 3 seconds
setInterval(nextImage, 3000);


document.querySelectorAll('a[href^="#"').forEach(anchor => {
  anchor.addEventListener("click", function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior : "smooth"
    });
  })
})

ScrollReveal().reveal('.container', {
  delay: 200,
  distance: '50px',
  easing: 'ease-in-out',
  origin: 'bottom',
  interval: 100
});
