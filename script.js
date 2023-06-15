// Random Quote Generator start
var quotes = [
  "Roses are red, violets are blue, tang ina mu - Bonmar Guilleno",
  "Atleast di ako cheater, par. - John Harold Pineda",
  "Saan tayo par? Teka lang mag sunod lang ako. - John Clark Pineda",
  "Oo nga nickers, ambobo mo. -Julius Canares",
  "Awit sayo par. -Nathaniel Bilo",
  "Cobra tayo par. -Nikko Prudente",
  "Tara nomi. -Jc Vasquez",
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
