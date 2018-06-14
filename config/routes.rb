Rails.application.routes.draw do
# For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
	get 'home/index'
	scope "/api", as: "user" do
		resources :exercises
	end
	root 'home#index'
end
