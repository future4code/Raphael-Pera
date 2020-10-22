type product = {
    name: string,
    price: number,
    classification: string,
}

const produtos: product[] = [
    {
        name: 'Blusinha',
        price: 30,
        classification: 'verão',
    },

    {
        name: 'Moletom',
        price: 100,
        classification: 'inverno',
    },
    
    {
        name: 'Toalha',
        price: 50,
        classification: 'banho',
    },
    
    {
        name: 'Cueca',
        price: 20,
        classification: 'intimas',
    },
]

const blackFridayPricing = (products: product[]): /*[] | {}*/ any => {
    const newProducts = products.map(prod=>{
        let discountPrice: number | string
        switch (prod.classification) {
            case "verão": discountPrice = prod.price * (1 - (5/100)); break;
            case "inverno": discountPrice = prod.price * (1 - (10/100)); break;
            case "banho": discountPrice = prod.price * (1 - (4/100)); break;
            case "intimas": discountPrice = prod.price * (1 - (7/100)); break;
            default: discountPrice = 0/100; break;
        }

        return {...prod, discountPrice: Number(discountPrice.toFixed(2))}
    })

    return newProducts
}

console.table(blackFridayPricing(produtos))