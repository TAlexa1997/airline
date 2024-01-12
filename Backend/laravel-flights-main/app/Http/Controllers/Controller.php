<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Response;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, ValidatesRequests;
    public function delete($id)
    {
        // Törlés logika
        $data = json_decode(File::get('adatok.json'), true);

        if (isset($data[$id])) {
            unset($data[$id]);
            File::put('adatok.json', json_encode($data));
            return Response::json(['status' => 'success']);
        } else {
            return Response::json(['status' => 'error', 'message' => 'Not found'], 404);
        }
    }
}
