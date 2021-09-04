function pressButton()
{
    fetch('https://animechan.vercel.app/api/random')
    .then(res=>res.json())
    .then(data=>quote(data));
    const spinner = document.getElementById('spinner');
    spinner.style.display= 'block';
}

function quote(quote)
{ const spinner = document.getElementById('spinner');
spinner.style.display='none';
const paragraph= document.getElementById('quote');
paragraph.innerHTML= `<h4>Anime:  </h4> ${quote.anime}`;
const paragraph1= document.getElementById('quote-1');
paragraph1.innerHTML= `<h4>Character:  </h4> ${quote.character}`;
const paragraph2= document.getElementById('quote-2');
paragraph2.innerHTML= `<h4>Quote:  </h4> ${quote.quote}`;
console.log(quote)
}