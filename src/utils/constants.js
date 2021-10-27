// API base url

const WZL_API = {
    base_url: 'https://wizeline-academy.cdn.prismic.io/api/v2/',
    api_id: 'YWYpRBIAACwA3RZ5',
    banners: '&q=%5B%5Bat(document.type%2C%20%22banner%22)%5D%5D&lang=en-us&pageSize=30',
    featuredProducts: '&q=%5B%5Bat(document.type%2C%20%22product%22)%5D%5D&q=%5B%5Bat(document.tags%2C%20%5B%22Featured%22%5D)%5D%5D&lang=en-us&pageSize=16',
    categories: '&q=%5B%5Bat(document.type%2C%20%22category%22)%5D%5D&lang=en-us&pageSize=30',
    products: '&q=%5B%5Bat(document.type%2C%20%22product%22)%5D%5D&lang=en-us&pageSize=12',
    productById: '&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22{productId}%22%29+%5D%5D'    
}

export { WZL_API };

