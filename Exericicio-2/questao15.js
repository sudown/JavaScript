function receberSomenteOsParesDeIndicesPares(array) {
    for (i in array) {
        if (i % 2 == 0 && array[i] % 2 == 0) {
            return (array[i]);
        }
    }
}