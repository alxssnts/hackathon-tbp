<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Crew;
use App\Models\Work;

class CrewController extends Controller
{
    public function browse(Request $request)
    {
        $page = $request->get('page', 1);
        $perPage = $request->get('perPage', 10);

        $crews = Crew::paginate($perPage, ['*'], 'crews', $page);

        return response()->json($crews);
    }

    public function read(Crew $crew)
    {
        $crew->load([
            'work',
        ]);

        return response()->json([
            'success'   => true,
            'data'      => $crew,
        ]);
    }

    public function add(Request $request)
    {
        $rules = [
            'first_name'    => ['required'],
            'last_name'     => ['required'],
        ];

        $inputs = $request->validate($rules);

        $crew = Crew::create($inputs);

        return response()->json([
            'success'   => true,
            'data'      => $crew,
        ]);
    }

    public function edit(Request $request, Crew $crew)
    {
        $rules = [
            'first_name'    => ['required'],
            'last_name'     => ['required'],
        ];

        $inputs = $request->validate($rules);

        $crew->update($inputs);

        return response()->json([
            'success'   => true,
            'data'      => $crew,
        ]);
    }

    public function assign(Request $request, Crew $crew)
    {
        $rules = [
            'work'  => ['required'],
        ];

        $inputs = $request->validate($rules);

        $work = Work::find($inputs['work']);

        if (!$work) {
            return response()->json([
                'success' => false,
                'message' => __("Assigned work not found"),
            ], 404);
        }

        $crew->work()->associate($work);
        $crew->save();

        return response()->json([
            'success'   => true,
            'data'      => $crew,
        ]);
    }

    public function unassign(Crew $crew)
    {
        $crew->work()->disassociate();
        $crew->save();

        return response()->json([
            'success'   => true,
            'data'      => $crew,
        ]);
    }
}
