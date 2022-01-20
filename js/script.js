/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

const itemsPerPage = 9;


function showPage(list, page) {

   const startIndex = (page * itemsPerPage) - itemsPerPage;
   const endIndex = (page * itemsPerPage);
   

   const studentList = document.querySelector('.student-list');

   studentList.innerHTML = '';

   for (let i = 0; i < list.length; i++) {
      if (i >= startIndex && i < endIndex) {
         studentList.insertAdjacentHTML('beforeend', `
      <li class="student-item cf">
         <div class="student-details">
            <img class="avatar" src="${list[i].picture.large}" alt="Profile Picture">
            <h3>${list[i].name.title} ${list[i].name.first} ${list[i].name.last}</h3>
            <span class="email">${list[i].email}</span>
         </div>
         <div class="joined-details">
            <span class="date">Joined ${list[i].registered.date}</span>
         </div>
      </li>`)
      }
   }
}

/*
Create the `addPagination` function
*/
function addPagination(list) {
   
   
   const numOfPages = Math.ceil(list.length / itemsPerPage);

   const linkList = document.querySelector('.link-list');

   linkList.innerHTML = '';
   
   for (let i = 1; i <= numOfPages; i++) {
      const button = `
      <li>
         <button type="button">${i}</button>
      </li>`;
      linkList.insertAdjacentHTML('beforeend', button)
   }
   // give the first pagination button a class of "active"
   const activeButton = document.querySelector('li button');
   if (list.length > 0) {
      activeButton.className = 'active';
   }
   
   

   linkList.addEventListener('click', (e) => {
      if (e.target.tagName == 'BUTTON') {
         document.querySelector('.active').className = '';
         e.target.className = 'active';
         showPage(list, e.target.textContent)
      }
   });
}

const searchBar = document.getElementById('search');
searchBar.addEventListener('keyup', () => {
   searchByName(data);
});


function searchByName(users) {
   const newArray = [];
   const input = document.getElementById('search').value.toLowerCase();
   users.filter(user => {
      const firstName = user.name.first.toLowerCase();
      const lastName = user.name.last.toLowerCase();
      const name = `${firstName} ${lastName}`;
      if (name.includes(input)) {
         newArray.push(user);
      }
      
   });
   showPage(newArray, 1);
   addPagination(newArray);
}

showPage(data, 1)
addPagination(data)