Rails.application.routes.draw do
  # resources :sessions
  resources :users
  delete "/users", to: "users#destroy"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
