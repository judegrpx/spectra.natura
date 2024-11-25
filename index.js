var quotes = [{
        "author" : "Isaac Asimov, The Roving Mind",
        "quote" : "How often people speak of art and science as though they were two entirely different things, with no interconnection."
    }, {
        "author" : "Dead Poet’s Society",
        "quote" : "Medicine, law, business, engineering, these are all noble pursuits, and necessary to sustain life. But poetry, beauty, romance, love, these are what we stay alive for."
    }, {
        "author" : "Leonardo da Vinci",
        "quote" : "To develop a complete mind: Study the science of art; Study the art of science. Learn how to see. Realize that everything connects to everything else."
    }, {
        "author" : "Johann Wolfgang von Goethe",
        "quote" : "Science and art belong to the whole world, and the barriers of nationality vanish before them."
    }, {
        "author" : "Georges Braque",
        "quote" : "Art is meant to disturb; science reassures."
    }, {
        "author" : "Leo Tolstoy, On the Significance of Science and Art",
        "quote" : "Where there has been true science, art has always been its exponent."
    }, {
        "author" : "Richard Hamming, The Art of Doing Science and Engineering: Learning to Learn",
        "quote" : "Please remember, the inventor often has a very limited view of what he invented, and some others (you?) can see much more."
    }
]


var loading = document.getElementById("loading");
var literary = document.getElementById("literary");
var visual = document.getElementById("visual");
var quotecontainer = document.getElementById("quotecontainer");
var quote = document.getElementById("quote");
var author = document.getElementById("author");

window.onload = function () {
    loading.style.display = "none";
    visual.style.margin = "0pt";
    literary.style.margin = "0pt";
    visual.style.opacity = "1";
    literary.style.opacity = "1";
    setTimeout(
        function () {
            visual.style.transitionDuration = "0.15s";
            literary.style.transitionDuration = "0.15s";
            literary.style.transitionDelay = "0s";
            quotecontainer.style.opacity = "1";

        }, 1);
};

var i = 0;

quotes.sort((a, b) => 0.5 - Math.random())
setInterval(myMethod, 10000);


function myMethod( )
{
    if (i < quotes.length) {
        i++;
    } else {
        i=0;
        quotes.sort((a, b) => 0.5 - Math.random())
    }
            quote.innerHTML = quotes[i].quote;
            author.innerHTML = quotes[i].author;
}

// for (let index = 0; index < quotes.length; index++) {
//     setTimeout(
//         function () {
            

//         }, i*4000);


// }