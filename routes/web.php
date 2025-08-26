<?php

use App\Http\Controllers\ContactController;
use App\Http\Controllers\PagesController;
use Illuminate\Support\Facades\Route;

Route::get('/', [PagesController::class, 'index']);
Route::get('/services', [PagesController::class, 'services']);
Route::get('/process', [PagesController::class, 'process']);
Route::get('/about-us', [PagesController::class, 'about']);
Route::get('/contact', [PagesController::class, 'contact']);
Route::post('/send', [ContactController::class, 'send']);
