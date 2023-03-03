const block = document.querySelector('.block_item')
const btn = document.querySelector('#btn')
let count = 1


const getData = async (url) =>{
    const responce = await fetch(`https://jsonplaceholder.typicode.com/posts/${count}`);
    if (url === 'next'){
        count ++
    }
     return  await responce.json()
        .then(data => {
            const div = document.createElement('div')
            div.setAttribute('class', 'card')
                div.innerHTML = `
                <img src="img/putin.webp" alt="">
                <h2>${data.title}</h2>
                <h3>${data.body}</h3>
                
               
                 
        `
            // block.innerHTML = ''
            block.append(div)
        })




};

btn.onclick = () => {
    getData("next")
}


