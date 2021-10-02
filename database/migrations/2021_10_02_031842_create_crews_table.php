<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCrewsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('crews', function (Blueprint $table) {
            $table->increments('id');
            $table->string('first_name');
            $table->string('last_name');
            $table->integer('work_id')->unsigned()->nullable();
            $table->integer('ship_id')->unsigned()->nullable();
            $table->timestamps();

            $table->foreign('work_id')
                ->references('id')
                ->on('works')
                ->onUpdate('NO ACTION')
                ->onDelete('SET NULL');

            $table->foreign('ship_id')
                ->references('id')
                ->on('ships')
                ->onUpdate('NO ACTION')
                ->onDelete('SET NULL');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('crews');
    }
}
