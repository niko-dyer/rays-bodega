Rails.application.routes.draw do
  namespace :api do 
    resources :woodworks 

    resources :shoes

    resources :cloths
  end
end
