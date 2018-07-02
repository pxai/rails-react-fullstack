class ExercisesController < ApplicationController
 before_action :set_exercise, only: [:show, :update, :destroy]
 skip_before_action :verify_authenticity_token
# GET /exercises
  def index
    @exercises = Exercise.all
    json_response(@exercises)
  end

  def options
  	head :ok
  end
  # POST /exercises
  def new
  	@exercise = Exercise.new
  end

  def create
    @exercise = Exercise.create!(exercise_params)
    json_response(@exercise, :created)
  end

  # GET /exercises/:id
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
    # whitelist params
    params.permit(:name, :description)
  end

  def set_exercise
    @exercise = Exercise.find(params[:id])
  end

  def json_response(object, status= :ok)
  	render json: object, status: status
  end
end
