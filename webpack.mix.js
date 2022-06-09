const mix = require('laravel-mix');
mix.disableNotifications()

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.sass('resources/sass/header.scss', 'public/resources/css/app');
mix.sass('resources/sass/footer.scss', 'public/resources/css/app');
mix.js('resources/js/header.js', 'public/resources/js/app');
mix.js('resources/js/footer.js', 'public/resources/js/app');
