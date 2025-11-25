<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $token = Str::random(60);

        $user = User::create([
            'name'     => $request->name,
            'email'    => $request->email,
            'password' => Hash::make($request->password),
            'api_token'=> $token,
        ]);

        return response()->json([
            'message' => 'Registration Successful',
            'token'   => $token
        ]);
    }

    public function login(Request $request)
    {
        $user = User::where('email', $request->email)->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json(['message' => 'Invalid Credentials'], 401);
        }

        // নতুন টোকেন জেনারেট
        $token = Str::random(60);
        $user->update(['api_token' => $token]);

        return response()->json([
            'message' => 'Login Successful',
            'token'   => $token
        ]);
    }

    public function user()
    {
        return response()->json(auth()->user());
    }
}
