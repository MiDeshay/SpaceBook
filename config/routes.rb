Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"
  namespace :api, defaults: {format: :json} do
    resources :users, except: [:edit, :new]
    resource :session, only: [:create, :destroy]
    resources :friends, only: [:create, :index, :destroy, :show]
    resources :posts, except: [:edit, :new]
    resources :comments, except: [:edit, :new]
    resources :likes, only: [:create, :destroy]
    resources :friend_requests, only: [:create, :index, :destroy]
    resources :news_feeds, only: [:index]
  end
end
