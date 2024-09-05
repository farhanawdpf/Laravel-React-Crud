<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\UserStoreRequest;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{

    public function index(){
        $users = User::all();

        return response()->json([
        'results' => $users
        ],200);
    }
    

    public function show($id){

        $users = User::find($id);

        if(!$users){
            return response()->json([
                'message' => 'user not found'
            ],404);
        }

        return response()->json([
            'user' => $users
        ],200);


        
    }

    public function store(UserStoreRequest $request){
        try {
            User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' =>$request->password
            ]);

            return response()->json([
                'message' => "User successfully created"
            ],200);

        } catch (\Exception $e) {
            return response()->json([
                
            ],500);
        }
    }

    public function update(UserStoreRequest $request,$id){

        try {
            $users = User::find($id);
            if(!$users){
                return $users()->json([
                    'message' => 'User not found!'
                ],404);
            }

            $users->name = $request->name;
            $users->email = $request->email;
            $users->password = $request->password;
            
            $users->save();

            return response()->json([
                'message' => 'User successfully updated'
            ],200);

        } catch (\Exception $e) {
            return response()->json([
                'message' => "Something went wrong!"
            ],500);
        }
    } 
        
    public function delete($id){

        $users = User::find($id);
        if(!$users){
            return $users()->json([
                'message' => 'User not found!'
            ],404);
        }

        $users->delete();

        return response()->json([
            'message' => 'user succesfully deleted'
        ],200);
    }
}
