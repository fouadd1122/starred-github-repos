
var pageNumber = 1;
const nextButton = document.querySelector(".Next");
const previousButton = document.querySelector(".Previous");
const firstButton = document.querySelector(".First");

function getData(){

<<<<<<< HEAD
   let repoData = "", repoDescription = "";
=======
   let repoData= "", repoDescription = "";
>>>>>>> 5820c087059317302f703394616197e034c9dc90
   let api = `https://api.github.com/search/repositories?q=created:>2020-10-30&sort=stars&order=desc&page=${pageNumber}`;

      // get the repositories data with fetch function.

    fetch(api).then((response)=> response.json())

              .then((data)=>{
                
                
               data.items.forEach(repository => {

                 //Verify if the description of the repository is available.

                repoDescription = (repository.description !== null) ? repository.description : "No description available for the repository";
                 
                 // store the repository details with html structure. 

                repoData += `
                <tr>
                <td> <img src="${repository.owner.avatar_url}" alt="" width="80" height="80"> <p>${repository.owner.login}</p>  </td>  <td>${repository.name}</td> <td>${repoDescription}</td><td>${repository.stargazers_count}</td><td>${repository.open_issues}</td>
                </tr>
                
                ` ;
                   
               
            
                });
                   
              //show the repositories details.

              document.getElementById('reposData').innerHTML = repoData;

              
            } 
     );


}

 
// Call the function to get Repos data and display it.

getData();   

 

// Pagination Elements

 nextButton.addEventListener("click", () => {
   pageNumber++;
   
   getData();
});

previousButton.addEventListener("click", () => {

   pageNumber--;

   //Check if the page API number requested greater or equal to 0.
<<<<<<< HEAD
   pageNumber = (pageNumber >=1 ) ? pageNumber:1;
=======
   pageNumber=(pageNumber >=1 ) ? pageNumber:1;
>>>>>>> 5820c087059317302f703394616197e034c9dc90
   
   getData();
   
});

firstButton.addEventListener("click", () => {
<<<<<<< HEAD
  pageNumber = 1;
=======
  pageNumber=1;
>>>>>>> 5820c087059317302f703394616197e034c9dc90
  
  getData();
});