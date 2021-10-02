<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\Ship;
use App\Models\Route;

class ShipController extends Controller
{
    public function browse(Request $request)
    {
        $page = $request->get('page', 1);
        $perPage = $request->get('perPage', 10);

        $ships = Ship::paginate($perPage, ['*'], 'ships', $page);

        return response()->json($ships);
    }

    public function read(Ship $ship)
    {
        $ship->load(
            'crews',
            'route',
        );

        return response()->json([
            'success'   => true,
            'data'      => $ship,
        ]);
    }

    public function add(Request $request)
    {
        $rules = [
            'name'  => ['required'],
        ];

        $inputs = $request->validate($rules);

        $ship = Ship::create($inputs);

        return response()->json([
            'success'   => true,
            'data'      => $ship,
        ]);
    }

    public function edit(Request $request, Ship $ship)
    {
        $rules = [
            'name' => ['required']
        ];

        $inputs = $request->validate($rules);
        
        $ship->update($inputs);

        return response()->json([
            'success'   => true,
            'data'      => $ship,
        ]);
    }

    public function assign(Request $request, Ship $ship)
    {
        $rules = [
            'route' => ['required']
        ];

        $inputs = $request->validate($rules);
        
        $route = Route::find($inputs['route']);

        if (!$route) {
            return response()->json([
                'success' => false,
                'message' => __('Assigned route not found'),
            ], 404);
        }

        $ship->route()->associate($route);
        $ship->save();

        return response()->json([
            'success'   => true,
            'data'      => $ship,
        ]);
    }

    public function unAssign(Ship $ship)
    {
        $ship->route()->disassociate();
        $ship->save();

        return response()->json([
            'success'   => true,
            'data'      => $ship,
        ]);
    }
}
