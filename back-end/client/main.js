const picturesContainer = document.querySelector('#pictures')
const baseURL = `http://localhost:4000/api/pictures`
const picturesCallback = ({ data: pics }) => displayPictures(pics)
const getImg = () => axios.get(baseURL).then(picturesCallback)
function createPictureCard(picture) {
    const pictureCard = document.createElement('div')
    pictureCard.classList.add('picture-card')
   
    pictureCard.innerHTML = `<img alt='picture  cover' src=${picture.imageURL} class=""/>`
    pictures.appendChild(pictureCard)
}

function displayPictures(arr) {
    pictures.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createPictureCard(arr[i])
    }
}

getImg()

document.querySelector('#itemsBtn').addEventListener('click', function(){
    axios
       .get('http://localhost:4000/api/items')
       .then(function(res){
         alert(res.data)
       })
       .catch(function(err){console.log(err)})
});
document.querySelector('#addItem').addEventListener('click', function(){
     const itemValue = document.querySelector('#itemInput').value;

     if(!itemValue) {
       alert('cannot add empty item!')
       return;
     } 
     axios
       .post('http://localhost:4000/api/items', { newItem: itemValue})
       .then(function(){
         alert('Item added')

         document.querySelector('#itemInput').value = '';
       })
       .catch(function(err){console.log(err)})


});
document.querySelector('#delete').addEventListener('click', function(){
     const tgtIndex = prompt('What index do you want to delete?')

     axios
       .delete(`http://localhost:4000/api/items/${tgtIndex}`)
       .then(function(res){
         alert(`You have deleted ${res.data}`)
       })
       .catch(function(err){console.log(err)})
});
document.getElementById("complimentButton").onclick = function () {
    axios.get("http://localhost:4000/api/compliment/")
        .then(function (response) {
          const data = response.data;
          alert(data);
        });
};
document.querySelector('#fortuneButton').addEventListener('click', function(){
    axios
    .get('http://localhost:4000/api/fortune')
    .then(function (res){
      const data = res.data;
      alert(data)
    })
    .catch(function(err) {console.log(err)})
})
 
document.getElementById('submitBtn').onclick = function(){
   axios
   .get("http://localhost:4000/api/data/")
   .then(function(res){
     const data = res.data;
     document.getElementById('list').innerHTML = data
     .map(function(list){
       return '<li class="row">' +  list;
     })
     .join("");
   })
};
     //  document.getElementById('motivation').onclick = function(){
    //    axios
    //    .get('http://localhost:4000/api/pictures/')
    //    .then(function(res){
    //      const data = res.data; 
    //      document.getElementById('pictures').innerHTML = data.map(function(){
    //        return `<img src= "`+data+`"width=auto height=auto/>`
    //    })
    //  });
    // }


