const array = [1,2,3,4,5]
const rating = 2.5

function ratingFn(array,rating) {
    insideArray = []

    array.forEach(element =>insideArray.push(element<rating ? "Star" : (  insideArray.includes('half Star'))? "White":"half Star" )
    );
    return insideArray
    
}

console.log(ratingFn(array,rating));