module.exports = {
    index: {
        // entry for the page
        entry: './src/pages/index/main.js',
        // the source template
        template: 'public/index.html',
        title: 'Index Page',
        // chunks to include on this page, by default includes
        // extracted common chunks and vendor chunks.
        chunks: ['chunk-vendors', 'chunk-common', 'index']
      },
    cart: {
        entry: './src/pages/cart/main.js',
        template: 'public/index.html',
        title: 'Cart',
        chunks: ['chunck-vendors', 'chunk-common', 'cart']
      }
  },
