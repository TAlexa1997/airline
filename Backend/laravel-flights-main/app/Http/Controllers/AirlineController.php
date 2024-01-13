<?php

namespace App\Http\Controllers;

use App\Models\Airline;
use App\Models\Flight;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class AirlineController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Airline::with('flight:id,date,limit,airline_id')->get();

        //return Airline::with('flight:date,flight:limitlimit,flight:id')->get();

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $airline = new Airline();
        $airline->name = $request->input('name');
        $airline->country = $request->input('country');
        $airline->from_country = $request->input('from_country');
        $airline->ind_datum = $request->input('ind_datum');
        $airline->erk_datum = $request->input('erk_datum');
        $airline->szabad_hely = $request->input('szabad_hely');
        $airline->save();
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        return Airline::findOrFail($id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
{
    $airline = Airline::findOrFail($id);
    $airline->name = $request->input('name');
    $airline->country = $request->input('country');
    $airline->from_country = $request->input('from_country'); 
    $airline->ind_datum = $request->input('ind_datum');
    $airline->erk_datum = $request->input('erk_datum');
    $airline->szabad_hely = $request->input('szabad_hely');
    $airline->save();
}


    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
{
    try {
        DB::beginTransaction();
        Flight::where('airline_id', $id)->delete();
        $airline = Airline::findOrFail($id);
        $airline->delete();
        DB::commit();
        return response()->json(['message' => 'Légitársaság sikeresen törölve']);
    } catch (\Exception $e) {
        DB::rollback();
        return response()->json(['message' => 'Hiba történt a törlés során'], 500);
    }
}

}
