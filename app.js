// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// solo un registro en consola para nosotros.
console.log(sum(7,3));

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)


const fromEuroToDollar = (valor) => {
    let moneda = (valor * 1.2);
    return (moneda);
}

const fromDollarToYen = (valor) => {
    let moneda = (valor / 1.2) * 127.9;
    return (moneda);
}

const fromYenToPound = (valor) => {
    let moneda = (valor / 127.9) / 0.8;
    return (moneda);
}


module.exports = { fromEuroToDollar, sum, fromDollarToYen, fromYenToPound};

