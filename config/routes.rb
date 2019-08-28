Rails.application.routes.draw do
  root to: 'pages#home'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get 'resume', to: 'pages#resume', as: :resume
  get 'aboutme', to: 'pages#aboutme', as: :aboutme
  get 'projects', to: 'pages#projects', as: :projects

end
