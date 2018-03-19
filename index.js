function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    return new Handlebars.SafeString('<li name="ingredientsList">' + ingredient + '</li>')
  })

  function createRecipe() {

    let name = document.getElementById('name')
    let ingredients = document.getElementsByName('ingredients')

    let recipeTemplate = Handlebars.compile(document.getElementById("recipe-template").innerHTML);

    console.log('ingredients', ingredients)
    let html = recipeTemplate({name: name, ingredients: ingredients})
  }

  function displayEditForm() {


  }
}
document.addEventListener("DOMContentLoaded", function(event) {
  // init()
})


//put any page initialization/handlebars initialization here
Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML)
Handlebars.registerHelper('displayIngredient', function(ingredient) {
  return new Handlebars.SafeString('<li>' + ingredient + '</li>')
})
Handlebars.registerHelper('displayEditIngredient', function(ingredient) {
  return new Handlebars.SafeString('<input name="editedIngredrients" value="' + ingredient + '"><br>')
})

function createRecipe() {

  let name = document.getElementById('name').value
  let description = document.getElementById("description").value
  let ingredientsNodes = document.getElementsByName('ingredients')

  let ingredients = []
  for(var i=0;i<ingredientsNodes.length;i++) {
    if(ingredientsNodes[i].value !== "") {
      ingredients.push(ingredientsNodes[i].value)
    }
  }

  let recipeTemplate = Handlebars.compile(document.getElementById("recipe-template").innerHTML);

  // console.log('ingredients', ingredients)
  document.getElementById("main").innerHTML += recipeTemplate({name: name, description: description, ingredients: ingredients})
}

function displayEditForm() {
  alert('ee')
  let name = document.getElementById('name').value
  let description = document.getElementById("description").value
  let ingredientsList = document.getElementsByName('ingredientsList')

  let ingredients = []
  for(var i=0;i<ingredientsList.length;i++) {
    if(ingredientsList[i].value !== "") {
      ingredients.push(ingredientsList[i].value)
    }
  }

  let formTemplate = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);

  document.getElementById("recipe-template").innerHTML += formTemplate({name: name, description: description, ingredients: ingredients})

}
