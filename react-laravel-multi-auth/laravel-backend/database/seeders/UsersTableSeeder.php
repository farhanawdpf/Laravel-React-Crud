<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;

class UsersTableSeeder extends Seeder
{
    public function run(): void
    {
        User::create([
            'name' => 'Super Admin',
            'email' => 'admin@example.com',
            'password' => 'password', // will be bcrypt'd by model mutator
            'role' => 'admin',
        ]);

        User::create([
            'name' => 'Best Seller',
            'email' => 'seller@example.com',
            'password' => 'password',
            'role' => 'seller',
        ]);

        User::create([
            'name' => 'Happy Customer',
            'email' => 'customer@example.com',
            'password' => 'password',
            'role' => 'customer',
        ]);
    }
}
