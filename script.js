// 1. API URL
const apiURL = "https://jsonplaceholder.typicode.com/users";

// 2. fetch userdata from api url

function fetchData() {
  fetch(apiURL)
    .then((response) => response.json())
    .then((data) => {
        // 2.2 parsing user data to the render user function
      renderUserData(data);
    });
}

// 3. Render the users in the DOM
function renderUserData(userdata){
    const ul = document.getElementById("user-list-container");
    // 3.1 Render an li tag for each element
    userdata.forEach((user, index) => {
    const li = document.createElement("li");
    li.innerHTML =`
        <span>${index + 1}. </span>
        <span>${user.name} </span>
        <span> - </span>
        <span class="username">${user.username}. </span>
    `;
    // 3.2 place li inside ul
    ul.appendChild(li);
    });
}
// 4. add Search function
    function searchUserdataByUserName(){
        const input = document.getElementById("search");
        const ul = document.getElementById("user-list-container");
        const inputValue = input.value.toUpperCase();
        const usersList = ul.querySelectorAll("li");

        // 4.1 loop through all the users and render the ones that match the tag

        for(let i=0; i<usersList.length; i++){
            const usernameSpanTag = usersList[i].querySelector(".username");
            const usernameSpanTagValue = usernameSpanTag.innerText.toUpperCase();
            const isMatch = usernameSpanTagValue.indexOf(inputValue)>-1;
            if(isMatch){
                usersList[i].style.display = "flex";
            } else {
                usersList[i].style.display = "none";
            }
        }
    }
// onload
fetchData();
