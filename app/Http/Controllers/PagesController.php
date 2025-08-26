<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PagesController extends Controller
{
    public function index(){
        return view('index');
    }

    public function services(){
        return view('services');
    }

    public function process(){
        return view('process');
    }

    public function about(){
        return view('about-us');
    }

     public function contact(){
        return view('contact');
    }
}
