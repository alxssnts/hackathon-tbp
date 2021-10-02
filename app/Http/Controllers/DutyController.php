<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Duty;
use App\Models\Work;

class DutyController extends Controller
{
    public function browse(Request $request)
    {
        $page = $request->get('page', 1);
        $perPage = $request->get('perPage', 10);

        $duties = Duty::paginate($perPage, ['*'], 'duties', $page);

        return response()->json($duties);
    }

    public function read(Duty $duty)
    {
        return response()->json([
            'success'   => true,
            'data'      => $duty,
        ]);
    }

    public function add(Request $request)
    {
        $rules = [
            'title'         => ['required'],
            'description'   => ['required'],
        ];

        $inputs = $request->validate($rules);

        $duty = Duty::create($inputs);

        return response()->json([
            'success'   => true,
            'data'      => $duty,
        ]);
    }

    public function edit(Request $request, Duty $duty)
    {
        $rules = [
            'title'         => ['required'],
            'description'   => ['required'],
        ];

        $inputs = $request->validate($rules);

        $duty->update($inputs);

        return response()->json([
            'success'   => true,
            'data'      => $duty,
        ]);
    }

    public function assign(Request $request, Duty $duty)
    {
        $rules = [
            'work'  => ['required'],
        ];

        $inputs = $request->validate($rules);

        $work = Work::find($inputs['work']);

        if (!$work) {
            return response()->json([
                'succes'    => false,
                'message'   => __("Assigned work not found"),
            ], 404);
        }

        $duty->work()->associate($work);
        $duty->save();

        return response()->json([
            'success'   => true,
            'data'      => $duty,
        ]);
    }

    public function unassign(Duty $duty)
    {
        $duty->work()->dissociate();
        $duty->save();

        return response()->json([
            'success'   => true,
            'data'      => $duty,
        ]);
    }
}
