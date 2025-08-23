<?php

use App\Http\Controllers\PagesController;
use Illuminate\Support\Facades\Route;

Route::get('/', [PagesController::class, 'index']);
Route::get('/services', [PagesController::class, 'services']);
Route::get('/process', [PagesController::class, 'process']);
