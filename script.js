// Random Quote Generator start
var quotes = [
  "Roses are red, violets are blue, tang ina mu - Bonmar Guilleno",
  "Atleast di ako cheater, par. - John Harold Pineda",
  "Saan tayo par? Teka lang mag sunod lang ako. - John Clark Pineda",
  "Oo nga nickers, ambobo mo. -Julius Canares",
  "Awit sayo par. -Nathaniel Bilo",
  "Cobra tayo par. -Nikko Prudente",
  "Tara nomi. -Jc Vasquez",
  "Nayy. -Julius Canares",
  "Tae muna ko par. -John Harold Pineda",
  "Bobo mo julay. -Bonmar Guilleno",
  "Bobo mo naman Bonmar. -Julius Canares",
  "Luto tayo par, foodtrip, ayaw nyo? Di wag. John Harold Pineda",
  "Inom nanaman lakas nyo talaga mag inom. -Nathaniel Bilo",
  "ML. -John Clark Pineda",
  "Oo nga bobo mo clark. -Julius Canares",
  "AMBOBO AMPOTA. -Bonmar Guilleno",
  "Ibang bata nga walang makain eh. -Bonmar Guilleno",
  "Bakit pag inubos ko ba to mabubusog yung mga bata? -Julius Canares",
  "Hayaan mo sila par, basta tayo di cheater. -John Harold Pineda",
  "Grind muna ko par. Pabili cobra -Nikko Prudente",
  "TFT is life. -Nikko Prudente"
];

function generateQuote() {
  var randomIndex = Math.floor(Math.random() * quotes.length);
  var quoteElement = document.getElementById("quote");
  quoteElement.innerHTML = quotes[randomIndex];
}
//end


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
