<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Work;

class WorkController extends Controller
{
    public function browse(Request $request)
    {
        $page = $request->get('page', 1);
        $perPage = $request->get('perPage', 10);

        $works = Work::paginate($perPage, ['*'], 'works', $page);

        return response()->json($works);
    }

    public function read(Work $work)
    {
        $work->load([
            'duties',
        ]);

        return response()->json([
            'success'   => true,
            'data'      => $work,
        ]);
    }

    public function add(Request $request)
    {
        $rules = [
            'title'         => ['required'],
            'description'   => ['required'],
        ];

        $inputs = $request->validate($rules);

        $work = Work::create($inputs);

        return response()->json([
            'success'   => true,
            'data'      => $work,
        ]);
    }

    public function edit(Request $request, Work $work)
    {
        $rules = [
            'title'         => ['required'],
            'description'   => ['required'],
        ];

        $inputs = $request->validate($rules);

        $work->update($inputs);

        return response()->json([
            'success'   => true,
            'data'      => $work,
        ]);
    }
}
