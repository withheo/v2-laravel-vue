<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\UserController;


Route::get('/test', function () {
    return api_response()->success();
})->where('any', '.*');