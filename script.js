// Random Quote Generator start
var quotes = [
  "Roses are red, violets are blue, tang ina mu. <br>-Bonmar Guilleno",
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
  "AMBOBO AMPOTA. <br>-Bonmar Guilleno",
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
