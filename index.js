let URL = `http://localhost:3000/users`

let container = document.getElementById("container")




function displayData(arr){
    container.innerHTML = "";
    arr.forEach((ele) => {
        let card = document.createElement("div");
        card.innerHTML = `<h4>Name : ${ele.name}</h4>
        <h4>Username : ${ele.username}</h4>
        <p>Email : ${ele.email}</p>
        <p>City : ${ele.address.city}</p>
        <p>Contact Number : ${ele.phone}</p>
        `

        container.appendChild(card)
    });
}
async function getData(URL){
    try {
        let response = await fetch(`${URL}`)
        let data = await response.json()
   
        displayData(data)
    } catch (error) {
        console.log("something went wrong")
    }
}
getData(URL)

let sort = document.getElementById("sort");
sort.addEventListener("input",function(){
    sortByName()
})
function sortByName(URL){
    let sortVal = sort.value;
    console.log(sortVal)
    getData(`http://localhost:3000/users?_sort=name&_order=${sortVal}`)
}