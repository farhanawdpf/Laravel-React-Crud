<?php

use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/login', [AuthController::class, 'login']);

// Protected routes
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/me', [AuthController::class, 'me']);

    // Customer routes (example)
    Route::middleware('role:customer')->group(function () {
        Route::get('/customer/dashboard', function () {
            return ['message' => 'Customer Dashboard', 'time' => now()];
        });
        // other customer endpoints
    });

    // Seller routes
    Route::middleware('role:seller')->group(function () {
        Route::get('/seller/dashboard', function () {
            return ['message' => 'Seller Dashboard', 'time' => now()];
        });
        Route::post('/seller/product', function (Request $r) {
            return ['message' => 'Product created (stub)'];
        });
    });

    // Admin routes
    Route::middleware('role:admin')->group(function () {
        Route::get('/admin/dashboard', function () {
            return ['message' => 'Admin Dashboard', 'time' => now()];
        });
        Route::get('/admin/users', function () {
            return \App\Models\User::all();
        });
    });
});
