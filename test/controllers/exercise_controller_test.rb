require 'test_helper'

class ExerciseControllerTest < ActionDispatch::IntegrationTest
  setup do
 #     @user_stock = user_stocks(:one)
  end

  test "should get index" do
      get user_exercises_url 
      assert_response :success
  end
end
