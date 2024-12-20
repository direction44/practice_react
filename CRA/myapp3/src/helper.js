
function choice(foods){
   let randomFood= Math.floor(Math.random()*foods.length)
   return foods[randomFood]
}

function remove(foods,food)
{
    
    let foodIs=foods.indexOf(food)
    let remainingFood=[...foods.slice(0,foodIs),...foods.slice(foodIs+1)]
    return remainingFood

}

export {choice,remove}