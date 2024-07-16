import { ui } from "./Ui.js";

export class apis {
    constructor(){
        this.index=0
        this.ui=new ui()
        this.allData()
        this.Categories()
        this.area()
        this.search()
        this.searchLetter()
        this.ingredient()
    }

        //    <<<<<<<<<<<<<<HOME>>>>>>>>>>>>>    //

    async allData(){
        // document.querySelector('.load').classList.remove('d-none')
        let data=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
        let response=await data.json()
        // console.log(response);
        this.ui.displayAllData(response.meals.slice(0, 20))
        this.getId()
        document.querySelector('sectionDetails').classList.add('d-none')
        // document.querySelector('.load').classList.add('d-none')
    }

    getId(){
        document.querySelectorAll('.card-allCat').forEach((card) => {
            card.addEventListener('click', (e) => {
                // console.log(e.target);
                document.querySelector('sectionHome').classList.add('d-none')
                document.querySelector('sectionDetails').classList.remove('d-none')
                this.details(e.target.id)
            });
        });        
    }
    
   //    <<<<<<<<<<<<<<DETAILS>>>>>>>>>>>>>    //

    async details(id){
        document.querySelector('.load').classList.remove('d-none')
        let data=await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        let response=await data.json()
        // console.log(response);
        this.ui.displayAllDetails(response.meals[this.index])
        document.querySelector('.load').classList.add('d-none')
    }
    
    
    
     //    <<<<<<<<<<<<<<SEARCH>>>>>>>>>>>>>    //

    async searchByName(searchValue){
        document.querySelector('.load').classList.remove('d-none')
        let data=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`)
        let response=await data.json()
        // console.log(response);
        this.ui.displaySearch(response.meals.slice(0, 20))
        this.getIdSearch()
        document.querySelector('.load').classList.add('d-none')
    }
    
    search(){
        document.getElementById('searchName').addEventListener('keyup', ()=>{
            let searchValue = document.getElementById('searchName').value;
            // console.log(searchValue);
                this.searchByName(searchValue);
        });
    }
    getIdSearch(){
        document.querySelectorAll('.cardSearch').forEach((card) => {
            card.addEventListener('click', (e) => {
                // console.log(e.target);
                document.querySelector('sectionSearch').classList.add('d-none')
                document.querySelector('sectionDetails').classList.remove('d-none')
                this.details(e.target.id)
            });
        });        
    }
    
    async searchByLetter(letter){
        document.querySelector('.load').classList.remove('d-none')
        let data=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
        let response=await data.json()
        // console.log(response);
        this.ui.displaySearch(response.meals.slice(0, 20))
        this.getIdSearch()
        document.querySelector('.load').classList.add('d-none')
    }
    
    searchLetter(){
        document.getElementById('searchLetter').addEventListener('keyup', ()=>{
            let searchValue = document.getElementById('searchLetter').value;
            console.log(searchValue);
            if (document.getElementById('searchLetter').value.length < 1) {
                this.ui.displaySearch()
            }    
            this.searchByLetter(searchValue);
        });
    }
    

   //    <<<<<<<<<<<<<<CATEGORIES>>>>>>>>>>>>>    //

    async Categories(){
        document.querySelector('.load').classList.remove('d-none')
        let data=await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
        let response=await data.json()
        // console.log(response);
        this.ui.displayCategories(response.categories.slice(0, 20))
        this.getCat()
        document.querySelector('.load').classList.add('d-none')
    }
    
    
    async filterCategory(cat){
        document.querySelector('.load').classList.remove('d-none')
        let data=await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat}`)
        let response=await data.json()
        // console.log(response);
        this.ui.displayFilterCategories(response.meals.slice(0, 20))
        this.getIdCatForDetails()
        document.querySelector('.load').classList.add('d-none')
    }


    getCat(){
        document.querySelectorAll('.cat-Card').forEach((card) => {
            card.addEventListener('click', (e) => {
                // console.log(e.target);
                document.getElementById('demoCategory').classList.add('d-none')
                this.filterCategory(e.target.id)
            });
        });        
    }
    
    getIdCatForDetails(){
        document.querySelectorAll('.filterCat').forEach((card) => {
            card.addEventListener('click', (e) => {
                // console.log(e.target);
                document.getElementById('demoFilterCategory').classList.add('d-none')
                document.querySelector('sectionDetails').classList.remove('d-none')
                this.details(e.target.id)
            });
        });        
    }

   //    <<<<<<<<<<<<<<AREA>>>>>>>>>>>>>    //

    async area(){
        document.querySelector('.load').classList.remove('d-none')
        let data=await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
        let response=await data.json()
        //  console.log(response);
        this.ui.displayArea(response.meals.slice(0, 20))
        this.getname()
        document.querySelector('.load').classList.add('d-none')
    }

    getname(){
        document.querySelectorAll('.cardArea').forEach((card) => {
            card.addEventListener('click', (e) => {
                // console.log(e.target);
                document.getElementById('demoArea').classList.add('d-none')
                this.fliterArea(e.target.id)
            });
        });        
    }

    async fliterArea(name){
        document.querySelector('.load').classList.remove('d-none')
        let data=await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${name}`)
        let response=await data.json()
        //  console.log(response);
        this.ui.displayFilterArea(response.meals)
        this.getNameForDetails()
        document.querySelector('.load').classList.add('d-none')
        }


    
    getNameForDetails(){
        document.querySelectorAll('.filterArea').forEach((card) => {
            card.addEventListener('click', (e) => {
                // console.log(e.target);
                document.getElementById('demoFilterarea').classList.add('d-none')
                document.querySelector('sectionDetails').classList.remove('d-none')
                this.details(e.target.id)
            });
        });        
    }

   //    <<<<<<<<<<<<<<INGREDIENT>>>>>>>>>>>>>    //

    async ingredient(){
        document.querySelector('.load').classList.remove('d-none')
        let data= await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
        let response=await data.json()
        // console.log(response);
        this.ui.displayIngredient(response.meals.slice(0,20))
        this.getIngredient()
        document.querySelector('.load').classList.add('d-none')
    }

    async filterIngredient(ingredient){
        document.querySelector('.load').classList.remove('d-none')
        let data=await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
        let response =await data.json()
        // console.log(response);
        this.ui.displayFilterIngredient(response.meals.slice(0, 20))
        this.getIngredientDetails()
        document.querySelector('.load').classList.add('d-none')
    }

    getIngredient(){
        document.querySelectorAll('.card-Ing').forEach((card) => {
            card.addEventListener('click', (e) => {
                console.log(e.target);
                document.getElementById('demoIngredients').classList.add('d-none')
                this.filterIngredient(e.target.id)
            });
        });        
    }
    getIngredientDetails(){
        document.querySelectorAll('.filterIng').forEach((card) => {
            card.addEventListener('click', (e) => {
                console.log(e.target);
                document.getElementById('demoFilterIngredients').classList.add('d-none')
                document.querySelector('sectionDetails').classList.remove('d-none')
                this.details(e.target.id)
            });
        });        
    }
        
}