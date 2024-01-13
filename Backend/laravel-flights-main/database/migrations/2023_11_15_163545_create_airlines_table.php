<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('airlines', function (Blueprint $table) {
            $table->id();
            $table->string('name', 32);
            $table->string('country');
            $table->string('from_country');
            $table->date('ind_datum');
            $table->date('erk_datum');
            $table->integer('szabad_hely');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('airlines');
    }

    public function destroy($id)
{
    $airline = Airline::find($id);

    if (!$airline) {
        return response()->json(['message' => 'A keresett légitársaság nem található.'], 404);
    }

    $airline->delete();

    return response()->json(['message' => 'A légitársaság sikeresen törölve lett.']);
}

    
};
