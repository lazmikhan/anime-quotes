
function pressSearch()
{
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    
    searchField.value ='';
    if(searchText==''){
        console.log('age dhuksi');
        const spinner = document.getElementById('spinner');
        spinner.style.display='none';
        
const paragraph= document.getElementById('create-element');
     paragraph.innerHTML= ` <p  class="text-center fs-1 fw-bolder">Type An Anime Character</p>`;
     
    
    }
   else{
       console.log('amiki dhuksi?');
    const url=`https://animechan.vercel.app/api/quotes/character?name=${searchText}`;

    fetch(url)
    .then(res=>res.json())
    .then(data=>{
         searchsearch(data)
    });
    const spinner = document.getElementById('spinner');
    spinner.style.display= 'block';
   }
  
   
    
}


function searchsearch(animes)
{

const paragraph= document.getElementById('create-element');
paragraph.textContent='';

try{
    console.log('dhuksi');
    for(const char of animes)
{
    const spinner = document.getElementById('spinner');
spinner.style.display='none';


const paras= document.createElement('div');
paras.classList.add('color');

paras.innerHTML=` <p id="quote" class="text-white"><h4>Anime:  </h4> ${char.anime}</p>
<p id="quote-1" class="text-white"><h4>Character:  </h4> ${char.character}</p>
<p id="quote-2" class="text-white"><h4>Quote:  </h4> ${char.quote}</p>`

paragraph.appendChild(paras);
console.log(char);
}
}
catch(exception )
{
    console.log(33);
    const spinner = document.getElementById('spinner');
    spinner.style.display='none';
 paragraph.innerHTML= ` <p  class="text-center fs-1 fw-bolder">Character Not Found in Database,Please try another character</p>`;

}
   
    
}