const catApiKey='0c928b12-ce74-45d4-a024-85437887d2fe'

const url3 = 'https://api.thecatapi.com/v1/images/search?limit=6&breed_id=beng'

function showModal(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
}

function myFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    let div = document.getElementById("myDIV");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
      let txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
}



async function fetchBreeds(){

    const data = await fetch(`https://api.thecatapi.com/v1/breeds`)
    const response = await data.json()

    const breeds = response.map(x=>({id:x.id,name:x.name}))
    console.log(breeds)
    return breeds
}

async function fetchCats(breed){
    let data=[]
    if(breed)
        data = await fetch(`https://api.thecatapi.com/v1/images/search?limit=9&breed_id=${breed}`)
    else
        data = await fetch(`https://api.thecatapi.com/v1/images/search?limit=9`)

    const response = await data.json()
    console.log(response)
    return response
}

async function updateCats(breed){
    const data = await fetchCats(breed)
    const catContainer=document.querySelector('#cat-card-container')
    catContainer.innerHTML = ''

    data.forEach(e => {
        const catImg = document.createElement('img')
        catImg.classList.add('cat-img','w3-col','s12','m6','l4','w3-round','w3-center')
        catImg.onclick=()=>showModal(catImg)
        catImg.src=e.url
        
        //catImg.classList.add('cat-img')
        // const card = document.createElement('div')
        // card.classList.add('w3-card-4')
        // const description = document.createElement('div')
        // description.classList.add('w3-container','w3-center')
        // const cardText = document.createElement('p')
        // cardText.innerHTML="cat cat"
        // description.innerHTML=cardText
        // card.innerHTML=""
        // card.appendChild(catImg)
        // card.appendChild(description)

        //catContainer.appendChild(card)
        catContainer.appendChild(catImg)
    });

}

fetchBreeds()
updateCats('beng')

