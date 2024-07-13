
export class ui{

    //    <<<<<<<<<<<<<<HOME>>>>>>>>>>>>>    //

    displayAllData(data) {
       let cartona=""
       for (let i = 0; i < data.length; i++) {
           cartona+=`
           <div class="col-lg-3 col-md-6 .col-sm-12 gx-3 gy-3">
           <div id="${data[i].idMeal}" class=" card-allCat position-relative overflow-hidden rounded-2">
           <img id="${data[i].idMeal}" class="w-100" src="${data[i].strMealThumb}" alt="">
           <div id="${data[i].idMeal}" class="layer position-absolute d-flex align-items-center">
                       <h2 id="${data[i].idMeal}">${data[i].strMeal}</h2>
                   </div>
               </div>
           </div>
   `
       }
       
       document.getElementById('demo1').innerHTML=cartona
   
   }

//    <<<<<<<<<<<<<<SEARCH>>>>>>>>>>>>>    //

    displaySearch(data) {
       let cartona=""
       for (let i = 0; i < data.length; i++) {
           cartona+=`
           <div class="col-lg-3 col-md-6 .col-sm-12 gx-3 gy-3">
           <div id="${data[i].idMeal}" class="cardSearch position-relative overflow-hidden rounded-2">
           <img id="${data[i].idMeal}" class="w-100" src="${data[i].strMealThumb}" alt="">
           <div id="${data[i].idMeal}" class="layer position-absolute d-flex align-items-center">
                       <h2>${data[i].strMeal}</h2>
                   </div>
               </div>
           </div>
   `
       }
       
       document.getElementById('demoSearchByName').innerHTML=cartona
   
   }

   //    <<<<<<<<<<<<<<DETAILS>>>>>>>>>>>>>    //

   displayAllDetails(data) {
    let strIngredients="";
    for (let i = 1; i <= 20; i++) {
        // console.log(data[`strIngredient${i}`]);
        if (data[`strIngredient${i}`]) {
            strIngredients +=`<li class="alert alert-success p-1 m-1">${data[`strMeasure${i}`]} ${data[`strIngredient${i}`]}</li>`
        }
    }
    let strTags="";
        if(data.strTags!=null){
            strTags+=`<div class="alert alert-danger p-1 m-1">${data.strTags}</div>`
        }else{
            strTags+=`<div class="alert alert-warning p-2">there's no tags here</div>`
        }          

    let cartona="";
        cartona+=`
                    <div class="col-lg-4 py-3">
                        <img class="w-100" src="${data.strMealThumb}" alt="">
                        <h2>${data.strMeal}</h2>
                    </div>
                    <div class="col-lg-8">
                        <h2>Instructions</h2>
                        <p>${data.strInstructions}</p>
                        <div>
                            <h3>Area :${data.strArea} </h3>
                            <h3>Category :${data.strCategory} </h3>
                            <h3>Recipes : </h3>
                            <ul class="d-flex flex-wrap">
                                ${strIngredients}
                            </ul>
                            <h3>Tags :</h3>
                            <div class="list-unstyled d-flex flex-wrap my-2">
                                ${strTags}
                            </div>                        
                        </div>
                        <a href="${data.strSource}" target="_blank"><button class="btn btn-success">Source</button></a>
                        <a href="${data.strYoutube}" target="_blank"><button class="btn btn-danger">Youtube</button></a>
                    </div>
   `
       
       document.getElementById('demoDetails').innerHTML=cartona
   
   }

//    <<<<<<<<<<<<<<CATEGORIES>>>>>>>>>>>>>    //

   displayCategories(data){
    let cartona=""
    for (let i = 0; i < data.length; i++) {
        cartona+=`
                        <div class="col-lg-3 col-md-6 .col-sm-12 gx-3 gy-3">
                            <div id="${data[i].strCategory}" class="cat-Card position-relative overflow-hidden rounded-2">
                            <img id="${data[i].strCategory}" class="w-100" src="${data[i].strCategoryThumb}" alt="">
                            <div id="${data[i].strCategory}" class="layer position-absolute text-center">
                                        <h2 id="${data[i].strCategory}">${data[i].strCategory}</h2>
                                        <p id="${data[i].strCategory}">${data[i].strCategoryDescription}</p>
                                    </div>
                                </div>
                        </div>

        `
        document.getElementById('demoCategory').innerHTML=cartona
    }
   }
   displayFilterCategories(data){
    let cartona=""
    for (let i = 0; i < data.length; i++) {
        cartona+=`
                        <div class="col-lg-3 col-md-6 .col-sm-12 gx-3 gy-3">
                            <div id="${data[i].idMeal}" class="filterCat position-relative overflow-hidden rounded-2">
                            <img id="${data[i].idMeal}" class="w-100" src="${data[i].strMealThumb}" alt="">
                            <div id="${data[i].idMeal}" class="layer position-absolute text-center d-flex align-items-center">
                                        <h2 id="${data[i].idMeal}">${data[i].strMeal}</h2>
                                    </div>
                                </div>
                        </div>

        `
        document.getElementById('demoFilterCategory').innerHTML=cartona
    }
   }
   
   //    <<<<<<<<<<<<<<AREA>>>>>>>>>>>>>    //

   displayArea(data){
       let cartona="";
       for (let i = 0; i < data.length; i++) {
        cartona+=`
                    <div class="col-lg-3 col-md-6 col-sm-12 gy-3 gx-3">
                        <div class="cardArea text-center">
                            <i id="${data[i].strArea}" class="fa-solid fa-house-laptop fa-4x"></i>
                            <h3 id="${data[i].strArea}">${data[i].strArea}</h3>
                        </div>
                    </div>

        `
        document.getElementById('demoArea').innerHTML=cartona
    }
   }
   displayFilterArea(data){
    let cartona=""
    for (let i = 0; i < data.length; i++) {
        cartona+=`
                        <div class="col-lg-3 col-md-6 .col-sm-12 gx-3 gy-3">
                            <div id="${data[i].idMeal}" class="filterArea position-relative overflow-hidden rounded-2">
                            <img id="${data[i].idMeal}" class="w-100" src="${data[i].strMealThumb}" alt="">
                            <div id="${data[i].idMeal}" class="layer position-absolute text-center d-flex align-items-center">
                                        <h2 id="${data[i].idMeal}">${data[i].strMeal}</h2>
                                    </div>
                                </div>
                        </div>

        `
        document.getElementById('demoFilterarea').innerHTML=cartona
    }
   }

//    <<<<<<<<<<<<<<INGREDIENT>>>>>>>>>>>>>    //

   displayIngredient(data){
    let cartona=""
    for (let i = 0; i < data.length; i++) {
        cartona+=`
                            <div class="card-Ing col-lg-3 col-md-6">
                        <i id="${data[i].strIngredient}" class="fa-solid fa-drumstick-bite fa-4x"></i>
                        <h3>${data[i].strIngredient}</h3>
                        <p>${data[i].strDescription.split(" ").slice(0,20).join(" ")}</p>
                    </div>

        `
        document.getElementById('demoIngredients').innerHTML=cartona
    }
   }

   displayFilterIngredient(data){
    let cartona=""
    for (let i = 0; i < data.length; i++) {
        cartona+=`
                            <div class="col-lg-3 col-md-6 .col-sm-12 gx-3 gy-3">
                        <div id="${data[i].idMeal}" class="filterIng position-relative overflow-hidden rounded-2">
                        <img id="${data[i].idMeal}" class="w-100" src="${data[i].strMealThumb}" alt="">
                        <div id="${data[i].idMeal}" class="layer position-absolute text-center d-flex align-items-center">
                                    <h2>${data[i].strMeal}</h2>
                                </div>
                            </div>
                    </div>

        `        
        document.getElementById('demoFilterIngredients').innerHTML=cartona
    }
   }


}
