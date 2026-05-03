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
        Schema::create('courses', function (Blueprint $table) {
           $table->id();
           $table->string('title');
           $table->foreignId('category_id')->constrained()->cascadeOnDelete();
           $table->string('summary',length:250);
           $table->text('description');
           $table->integer("viewd")->default(0);
           $table->text('conclusion');
           $table->integer('lectures');
           $table->integer('duration'); // minutes
           $table->enum('course_type', ['Beginner', 'Intermediate',"Advanced","All levels"]);
           $table->enum("bundle_type",[
            'Single',
            "Bundle"
        ]);
           $table->string("language");
           $table->date('deadline');
           $table->date('published_at');
           $table->boolean("certificate");
           $table->decimal("price");
           $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('course');
    }
};
