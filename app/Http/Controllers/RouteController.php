<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Route;

class RouteController extends Controller
{
    public function browse(Request $request)
    {
        $page = $request->get('page', 1);
        $perPage = $request->get('perPage', 10);

        $routes = Route::paginate($perPage, ['*'], 'routes', $page);

        return response()->json($routes);
    }

    public function read(Route $route)
    {
        return response()->json([
            'success'   => true,
            'data'      => $route,
        ]);
    }

    public function add(Request $request)
    {
        $rules = [
            'name'          => ['required'],
            'origin'        => ['required'],
            'destination'   => ['required'],
        ];

        $inputs = $request->validate($rules);

        $route = Route::create($inputs);

        return response()->json([
            'success'   => true,
            'data'      => $route,
        ]);
    }
}
