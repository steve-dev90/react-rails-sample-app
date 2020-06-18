Rails.application.routes.draw do

  resources :users

  root 'react_app#index'

  resources :posts

  namespace :api do
    namespace :v1 do
      resources :posts, only: [:index, :create, :show, :update, :destroy]
    end
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
