const picturesContainer = document.querySelector('#pictures')//creating a variable using document.querySelector to call the section by id name associated on the html file
const baseURL = `http://localhost:4000/api/pictures`// creating a variable and assigning it to the URL to make it easier for below


function createPictureCard(picture) {// creating a function with a parameter of picture
    const pictureCard = document.createElement('div')//creating a variable using document.createElement to create a section by id name on the html file
    pictureCard.classList.add('picture-card')//adding a class called picture-card to the new element above
   
    pictureCard.innerHTML = `<img alt='picture cover' src=${picture.imageURL} class=""/>  <button onclick="deletePic(${picture.id})">delete</button>`// .innerHTML allows us to display the HTML markup within an element. Using the img tag to display the URL as an image, alt is used as a placeholder when a picture can't be diplayed, src is the source of where the picture is coming from, and class is given so it can be displayed where the added class above is. ${picture.imageURL} is the property of the pics object for each parameter. Created button called delete with the function of deletePic with the parameter of of the id property of each picture
    
    picturesContainer.appendChild(pictureCard)// .appendChild() method adds a child element to the specified parent element. 
}

function displayPictures(arr) {//creating a function called displayPictures with a parameter of an array
    picturesContainer.innerHTML = ``//displaying the HTML markup in the picturesContainer section
    for (let i = 0; i < arr.length; i++) {// for loop to loop through the array allow i to be each index
        createPictureCard(arr[i])// calling the function above with the array parameter looping through each index
    }
}
const picturesCallback = ({ data: pics }) => displayPictures(pics)//pulling the data from the pics variable, then accessing a function called displayPictures with the pics variable as the parameter, then assigning to a function called picturesCallback
const getImg = () => axios.get(baseURL).then(picturesCallback)//creating an axios request with our baseURL in the.get and using the picturesCallback function in our .then and assigning it to a function called getImg
const deletePic = id => axios.delete(`${baseURL}/${id}`).then(picturesCallback)

getImg()//calling the getImg function by invoking it

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
     axios
      .get("http://localhost:4000/api/compliment/")
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


