Rails.application.routes.draw do
  namespace :api do 
    resources :woodworks 

    resources :shoes

    resources :clothings
  end
end
