/**
 * method returns the last index at which a given element can be found in the array, or -1 if it is not present. 
 * The array is searched backwards,
 * @param {Array} array 
 * @param {any} searchElement 
 */

function lastIndexOf(array,searchElement){
    for (var i = array.length; i>= 0;i--){
        if(searchElement === array[i]){
            return i;
        }

    }
    return -1;
}

