// API base url

const WZL_API = {
    base_url: 'https://wizeline-academy.cdn.prismic.io/api/v2/',
    api_id: 'YWYpRBIAACwA3RZ5',
    productsURL: 'https://wizeline-academy.cdn.prismic.io/api/v2/documents/search?ref=YWYpRBIAACwA3RZ5&q=[[at(document.type%2C%20%22product%22)]]&lang=en-us&pageSize=12',
    bannerURL: 'https://wizeline-academy.cdn.prismic.io/api/v2/documents/search?ref=YWYpRBIAACwA3RZ5&q=[[at(document.type%2C%20%22banner%22)]]&lang=en-us&pageSize=30',    
    ftProductsURL: 'https://wizeline-academy.cdn.prismic.io/api/v2/documents/search?ref=YWYpRBIAACwA3RZ5&&q=%5B%5Bat(document.type%2C%20%22product%22)%5D%5D&q=%5B%5Bat(document.tags%2C%20%5B%22Featured%22%5D)%5D%5D&lang=en-us&pageSize=16',
    categoriesURL: 'https://wizeline-academy.cdn.prismic.io/api/v2/documents/search?ref=YWYpRBIAACwA3RZ5&q=%5B%5Bat(document.type%2C%20%22category%22)%5D%5D&lang=en-us&pageSize=30'    
}

export { WZL_API };

