Rails.application.routes.draw do
# For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
	match "/api/exercises",
  		controller: "exercises",
  		action: "options",
  		via: [:options]

	get 'home/index'

  # in home_controller.rb
  	def options_for_mopd
    		render :nothing => true, :status => 200
	end

	resources	:exercises
	scope "/api" , as: "user" do
	   resources :exercises
	end
	root 'home#index'
end
