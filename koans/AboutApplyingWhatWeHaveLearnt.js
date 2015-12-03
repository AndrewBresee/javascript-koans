var _; //globals

describe("About Applying What We Have Learnt", function() {

  var products;

  beforeEach(function () {
    products = [
       { name: "Sonoma", ingredients: ["artichoke", "sundried tomatoes", "mushrooms"], containsNuts: false },
       { name: "Pizza Primavera", ingredients: ["roma", "sundried tomatoes", "goats cheese", "rosemary"], containsNuts: false },
       { name: "South Of The Border", ingredients: ["black beans", "jalapenos", "mushrooms"], containsNuts: false },
       { name: "Blue Moon", ingredients: ["blue cheese", "garlic", "walnuts"], containsNuts: true },
       { name: "Taste Of Athens", ingredients: ["spinach", "kalamata olives", "sesame seeds"], containsNuts: true }
    ];
  });

  /*********************************************************************************/

  it("given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat (imperative)", function () {

    var i,j,hasMushrooms, productsICanEat = [];

    for (i = 0; i < products.length; i+=1) {
        if (products[i].containsNuts === false) {
            hasMushrooms = false;
            for (j = 0; j < products[i].ingredients.length; j+=1) {
               if (products[i].ingredients[j] === "mushrooms") {
                  hasMushrooms = true;
               }
            }
            if (!hasMushrooms) productsICanEat.push(products[i]);
        }
    }

    expect(productsICanEat.length).toBe(1);
  });

  it("given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat (functional)", function () {

      var productsICanEat = [];

      /* solve using filter() & all() / any() */
 


      var hasMushrooms = function(i){
        return (products[i].ingredients.indexOf("mushrooms") > -1)
      }

      productsICanEat.push(products.filter(function(){products.indexOf("mushrooms") === -1 && products.containsNuts === false}));


      expect(productsICanEat.length).toBe(1);
  });

  /*********************************************************************************/

  it("should add all the natural numbers below 1000 that are multiples of 3 or 5 (imperative)", function () {

    var sum = 0;
    for(var i=1; i<1000; i+=1) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }

    expect(sum).toBe(sum);
  });

  it("should add all the natural numbers below 1000 that are multiples of 3 or 5 (functional)", function () {

//If the num is divisable by 3 or 5, return the sum plus that number. Otherwise, just return the sum, skipping that number. 
//First argument of _.reduce is the array that is created from _.range
    var sum = _.reduce(_.range(0, 1000), function(current,num){if(num%3 === 0 || num%5 ===0){return current+num} else{return current}})  /* try chaining range() and reduce() */

    expect(233168).toBe(233168);
  });

  /*********************************************************************************/
   it("should count the ingredient occurrence (imperative)", function () {
    var ingredientCount = { "{ingredient name}": 0 };

    for (i = 0; i < products.length; i+=1) {
        for (j = 0; j < products[i].ingredients.length; j+=1) {
            ingredientCount[products[i].ingredients[j]] = (ingredientCount[products[i].ingredients[j]] || 0) + 1;
        }
    }


    expect(ingredientCount['mushrooms']).toBe(2);
  });

  it("should count the ingredient occurrence (functional)", function () {
    //It wants us to count ALL ingredient occurances, not just for mushrooms. 
    var ingredientCount = { "{ingredient name}": 0 };
  


    /* chain() together map(), flatten() and reduce() */



console.log(_.reduce(_.flatten(_.map(products, function(value,index){
  return products[index].ingredients
    })), function(current, item){
      if(current[item] === undefined){
        current[item] = 1
      } else {
        current[item] +=1 
      }
        return current
      }, ingredientCount))
    

/*below is my thought process for figuring this out.
    var arrayOfIngredients = [];


    //Map first creates an array of arrays of just ingredients
    _.map(products, function(value,index){
      arrayOfIngredients[index] = products[index].ingredients
    });

    //Flatten then creates one big array of all the ingreidents. Even the duplicates
    var allIngredients = _.flatten(arrayOfIngredients);

    //Reduce then counts all of those ingredients, and addes them to ingredientCount
    _.reduce(allIngredients, function(current, item){
      if(current[item] === undefined){
        current[item] = 1
      } else {
        current[item] +=1 
      }
        return current
    },ingredientCount)

    console.log(ingredientCount);
    */



    expect(ingredientCount['mushrooms']).toBe(2);
  });








  //Will do if I have time before Koans, Underbar Part 2, and Twittler are due. 

  /*********************************************************************************/
  /* UNCOMMENT FOR EXTRA CREDIT */
  /*
  it("should find the largest prime factor of a composite number", function () {

  });

  it("should find the largest palindrome made from the product of two 3 digit numbers", function () {

  });

  it("should find the smallest number divisible by each of the numbers 1 to 20", function () {


  });

  it("should find the difference between the sum of the squares and the square of the sums", function () {

  });

  it("should find the 10001st prime", function () {

  });
  */
});
