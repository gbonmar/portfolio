// Random Quote Generator start
var quotes = [
  "Roses are red, violets are blue, I love you. <br>-Bonmar Guilleno",
  "Atleast di ako cheater, par. <br>-John Harold Pineda",
  "Saan tayo par? Teka lang mag sunod lang ako. <br>-John Clark Pineda",
  "Oo nga nickers, ambobo mo. <br>-Julius Canares",
  "Awit sayo par. <br>-Nathaniel Bilo",
  "Cobra tayo par. <br>-Nikko Prudente",
  "Tara nomi. <br>-Jc Vasquez",
  "Nayy. <br>-Julius Canares",
  "Tae muna ko par. <br>-John Harold Pineda",
  "Bobo mo julay. <br>-Bonmar Guilleno",
  "Bobo mo naman Bonmar. <br>-Julius Canares",
  "Luto tayo par, foodtrip, ayaw nyo? Di wag. <br>-John Harold Pineda",
  "Inom nanaman lakas nyo talaga mag inom. <br>-Nathaniel Bilo",
  "ML. <br>-John Clark Pineda",
  "Oo nga bobo mo clark. <br>-Julius Canares",
  "HAHAHAHA GE. <br>-Bonmar Guilleno",
  "Ibang bata nga walang makain eh. <br>-Bonmar Guilleno",
  "Bakit pag inubos ko ba to mabubusog yung mga bata? <br>-Julius Canares",
  "Hayaan mo sila par, basta tayo di cheater. <br>-John Harold Pineda",
  "Grind muna ko par. Pabili cobra. <br>-Nikko Prudente",
  "TFT is life. <br>-Nikko Prudente"
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
