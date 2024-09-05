# Laravel-React-Crud
This is a CRUD application using frontend React and backend Laravel.

The Application folder is the laravel backend and React-Crud folder is the Frontend of the application.

Application(Backend Part)

1.First you need to have Composer,Php,Laravel installed.
2.Database Connection:
  you need to connect your database with your own configuration.For example- 
  Connecting our Database

open .env file root directory.

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravelreact
DB_USERNAME=root
DB_PASSWORD=


3.Database Migration run in Cli.

C:\xampp\htdocs\laravel\my-app>php artisan migrate

4.Make users database with random data-
php artisan tinker

User::factory()->count(50)->create()

5.Finally run- 
php artisan serve

In this point you can able to see users random data according to the routes written in api routes.For example: http://127.0.0.1:8000/api/users for getting all users data.


React-Crud (Frontend Part)

you must have node.js installed in your Pc.Then run npm install in the React-Crud directory Cli and install the dependencies.

1.In the React-Crud directory cli run- npm run dev to start local server.
2.Then you can make Crud Part as shown in the Frontend.
