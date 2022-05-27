function receberSomenteOsParesDeIndicesPares(array) {
    for (i in array) {
        if (i % 2 == 0 && array[i] % 2 == 0) {
            console.log(array[i]);
        }
    }
}

receberSomenteOsParesDeIndicesPares([2,2,3,5,60]);