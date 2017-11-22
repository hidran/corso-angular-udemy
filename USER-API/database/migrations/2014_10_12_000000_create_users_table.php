<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     *   <tr>
    <th>Name</th>
    <td>{{User.name}}</td>
    </tr>
    <tr>
    <th>Lastname</th>
    <td>{{User.lastname}}</td>
    </tr>
    <tr>
    <th>Fiscalcode</th>
    <td>{{User.fiscalcode}}</td>
    </tr>
    <tr>
    <th>Email</th>
    <td>{{User.email}}</td>
    </tr>
    <tr>
    <th>Phone</th>
    <td>{{User.phone}}</td>
    </tr>
    <tr>
    <th>Age</th>
    <td>{{User.age}}</td>
    </tr>
    <tr>
    <th>Province</th>
    <td>{{User.province}}</td>
    </tr>
    <tfoot>
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->string('lastname')->nullable();
            $table->string('fiscalcode',16)->nullable();
            $table->string('phone',24)->nullable();
            $table->integer('age')->nullable();
            $table->string('province',24)->nullable();
            $table->string('email',24)->unique();
            $table->string('password');
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
