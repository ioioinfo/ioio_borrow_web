/**
 ┌──────────────────────────────────────────────────────────────┐
 │               ___ ___ ___ ___ ___ _  _ ___ ___               │
 │              |_ _/ _ \_ _/ _ \_ _| \| | __/ _ \              │
 │               | | (_) | | (_) | || .` | _| (_) |             │
 │              |___\___/___\___/___|_|\_|_| \___/              │
 │                                                              │
 │                                                              │
 │                       set up in 2015.2                       │
 │                                                              │
 │   committed to the intelligent transformation of the world   │
 │                                                              │
 └──────────────────────────────────────────────────────────────┘
*/

module.exports = {
    entry: {
        index: './app/index.jsx',
        borrow_books: './app/borrow_books.jsx',
        return_list: './app/return_list.jsx',
        borrow_view: './app/borrow_view.jsx',
        mobile_index: './app/mobile_index.jsx',
        my_borrow: './app/my_borrow.jsx',
        person: './app/person.jsx',
        borrow_card: './app/borrow_card.jsx',
        borrow_books_view: './app/borrow_books_view.jsx',
        students_list: './app/students_list.jsx',
        card_deposit: './app/card_deposit.jsx',
        book_inventory: './app/book_inventory.jsx',
        borrow_return: './app/borrow_return.jsx',
        book_transfers: './app/book_transfers.jsx',
    },
    output: {
        path: __dirname,
        filename: './public/js/app/[name].js'
    },
    resolve: {
        modules: [__dirname, '../node_modules','components'],
        alias: {

        },
        extensions: ['.js','.jsx']
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            }
        ]
   }
};
