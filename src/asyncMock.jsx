

const products = [
    {
        id:'1',
        name: 'Zenitsu',
        price: 800,
        category: 'anime',
        img: 'Zenitsu.png',
        stock: 20,
        description: 'Descripcion de Zenitsu'
    },
    {
     id:'2',
     name:'Capitan America', 
     price: 1200, 
     category: 'marvel', 
     img: 'capi.png', 
     stock: 10, 
     description:'descripcion del Capitan America'
    }
    
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout (( ) => {
            resolve(products)
        }, 300)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}
