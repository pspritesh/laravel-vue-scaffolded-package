<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SinglePageController extends Controller
{
    /**
     * Redirects each request on Vue router
     *
     * @param 
     * @return array
     */
    public function index()
    {
        return view('app');
    }
}
