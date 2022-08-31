
console.log('Here')

document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:3000/animals')
        .then((response) => response.json())
        .then((result) => callingFetch(result))
})

function callingFetch(entries) {
    console.log(breedName)
    // for (entry of entries) {
    //     // console.log(headers)
    //     const header = document.createElement('h1');
    //     header.textContent = entry.breed;
    //     breedName.appendChild(header);

    //     const image = document.createElement('img');
    //     image.style.width = '100px'
    //     image.src = entry.imageUrl;
    //     imageHolder.appendChild(image);
    // }
      
}
