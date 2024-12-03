<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/saludo', function (Request $request) {

    $nombre = $request->query('nombre');

    if (!$nombre) {
        return back()->withErrors(['nombre' => 'Por favor, ingresa un nombre.']);
    }

    if (strlen($nombre) < 3) {
        return back()->withErrors(['nombre' => 'El nombre es demasiado corto']);
    }

    return view('saludo', ['nombre' => $nombre]);
});