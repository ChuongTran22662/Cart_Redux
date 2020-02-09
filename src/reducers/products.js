var initialState = [
    {
        id: 1,
        name: 'Iphone 8',
        image: 'https://cdn1.viettelstore.vn/images/Product/ProductImage/medium/1923694765.jpeg',
        description: 'Iphone bán chạy nhất hiện nay',
        price: 400,
        inventory: 10,
        rating: 4
    },
    {
        id: 2,
        name: 'Iphone 7',
        image: 'https://bachlongmobile.com/media/catalog/product/cache/2/image/040ec09b1e35df139433887a97daa66f/7/p/7psilver_2.jpg',
        description: 'Iphone bán chạy nhất hiện nay',
        price: 300,
        inventory: 10,
        rating: 4
    },
    {
        id: 3,
        name: 'Iphone 6',
        image: 'https://cdn1.viettelstore.vn/images/Product/ProductImage/medium/1877233454.jpeg',
        description: 'Iphone bán chạy nhất hiện nay',
        price: 200,
        inventory: 10,
        rating: 4
    }
];

const products = (state = initialState, action) => {
    switch (action.type) {
        default: return [...state];
    }
}

export default products;