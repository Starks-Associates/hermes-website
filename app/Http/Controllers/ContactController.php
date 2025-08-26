<?php

namespace App\Http\Controllers;

use App\Mail\ContactEmail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function send(Request $request){
        $request->validate([
					'phone_number'=>['required'],
					'name'=>['required'],
					'email'=>['required','email'],
					'message'=>['required'],
					'company_name'=>['required'],
					'accept'=>['required']
				]);

				$data = $request->all();
				Mail::to('mike@yahoo.com')->send(new ContactEmail($data));

				return back()->with('success','Message sent! we will be in touch');
    }
}
