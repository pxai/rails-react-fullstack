require 'test_helper'

class ExerciseTest < ActiveSupport::TestCase
   test "Should not save exercise without name description" do
   	exercise = Exercise.new
	assert_not exercise.save
   end
   
   test "Should save exercise when all data is provided" do
   	exercise = Exercise.new
	exercise.name = 'Foo'
	exercise.description = 'Foo'
	exercise.duration = 10
	exercise.calories = 2.5
	exercise.repeat = 1
	assert exercise.save
   end

   test "Should work with fixture data" do
  	exercise = exercises(:one)
    assert exercise.save
	assert exercise.id
   end
end
