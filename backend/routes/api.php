
<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;
//use App\Http\Controllers\Api\Admin\AdminAuthController;


//frontend_api
Route::post('register', [AuthController::class , 'register']);
Route::post('login', [AuthController::class , 'login']);

Route::middleware(['auth:sanctum', 'isAPIAdmin'])->group(function () {
    Route::get('checkingAuthenticated', function(){
        return response()->json(['message' => 'You are in', 'status'=>200],200);
    });
    Route::post('logout', [AuthController::class , 'logout']);

});

//admin_api
//Route::post('admin', [AdminAuthController::class , 'login']);

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
