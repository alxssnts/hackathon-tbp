<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CrewController;
use App\Http\Controllers\DutyController;
use App\Http\Controllers\RouteController;
use App\Http\Controllers\ShipController;
use App\Http\Controllers\WorkController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::prefix('crews')->group(function () {
    Route::get('/',                 [CrewController::class, 'browse'])->name('crews.browse');
    Route::post('/add',             [CrewController::class, 'add'])->name('crews.add');
    Route::get('/{crew}',           [CrewController::class, 'read'])->name('crews.read');
    Route::post('/{crew}/edit',     [CrewController::class, 'edit'])->name('crews.edit');
    Route::post('/{crew}/assign',   [CrewController::class, 'assign'])->name('crews.assign');
    Route::post('/{crew}/unassign', [CrewController::class, 'unassign'])->name('crews.unassign');
});

Route::prefix('works')->group(function () {
    Route::get('/',             [WorkController::class, 'browse'])->name('works.browse');
    Route::post('/add',         [WorkController::class, 'add'])->name('works.add');
    Route::get('/{work}',       [WorkController::class, 'read'])->name('works.read');
    Route::post('/{work}/edit', [WorkController::class, 'edit'])->name('works.edit');
});

Route::prefix('duties')->group(function () {
    Route::get('/',                 [DutyController::class, 'browse'])->name('duties.browse');
    Route::post('/add',             [DutyController::class, 'add'])->name('duties.add');
    Route::get('/{duty}',           [DutyController::class, 'read'])->name('duties.read');
    Route::post('/{duty}/edit',     [DutyController::class, 'edit'])->name('duties.edit');
    Route::post('/{duty}/assign',   [DutyController::class, 'assign'])->name('duties.assign');
    Route::post('/{duty}/unassign', [DutyController::class, 'unassign'])->name('duties.unassign');
});

Route::prefix('ships')->group(function () {
    Route::get('/',                 [ShipController::class, 'browse'])->name('ships.browse');
    Route::post('/add',             [ShipController::class, 'add'])->name('ships.add');
    Route::get('/{ship}',           [ShipController::class, 'read'])->name('ships.read');
    Route::post('/{ship}/edit',     [ShipController::class, 'edit'])->name('ships.edit');
    Route::post('/{ship}/assign',   [ShipController::class, 'assign'])->name('ships.assign');
    Route::post('/{ship}/unassign', [ShipController::class, 'unassign'])->name('ships.unassign');
});

Route::prefix('routes')->group(function () {
    Route::get('/',                 [RouteController::class, 'browse'])->name('routes.browse');
    Route::post('/add',             [RouteController::class, 'add'])->name('routes.add');
    Route::get('/{route}',          [RouteController::class, 'read'])->name('routes.read');
    Route::post('/{route}/edit',    [RouteController::class, 'edit'])->name('routes.edit');
});