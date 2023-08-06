function insertion(arr) {
   
  for (var i = 1; i < arr.length; i++) {
    const key = arr[i]; // Element a inserer dans la sequence triee
    var j = i - 1;

    // deplace les elements superieurs a la cle vers une position avant leur position actuelle 
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = key; // insertion de l'element dans leur correct emplacement 
  }
}

// Example usage:
const tab = [12, 11, 13, 5, 6];
insertion(tab);
console.log( tab); // Output: [5, 6, 11, 12, 13]