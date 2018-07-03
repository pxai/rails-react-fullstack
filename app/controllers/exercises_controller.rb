class ExercisesController < ApplicationController
 before_action :set_exercise, only: [:show, :update, :destroy]
 skip_before_action :verify_authenticity_token
  
  def index
    @exercises = Exercise.all
    json_response(@exercises)
  end

  def options
  	head :ok
  end

  def admin
  	@exercises = Exercise.all
  end
 
  def new
  	@exercise = Exercise.new
  end

  def create
    @exercise = Exercise.new(exercise_params)
	if @exercise.save
		format.html { redirect_to @exercise, notice: 'Exercise created' }
	else
		render :new 
	end
  end

  def show
    json_response(@exercise)
  end

  # PUT /exercises/:id
  def update
    @exercise.update(exercise_params)
    head :no_content
  end

  # DELETE /exercises/:id
  def destroy
    @exercise.destroy
    head :no_content
  end

  private

  def exercise_params
    params.require(:exercise).permit(:name, :description, :icon, :calories, :repeat, :duration)
  end

  def set_exercise
    @exercise = Exercise.find(params[:id])
  end

  def json_response(object, status= :ok)
  	render json: object, status: status
  end
end
