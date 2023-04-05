class UsersController < ApplicationController
    include SessionHandler
  
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    before_action :authorize, except: [:create]
    before_action :handle_remember_me, only: [:show]
  
    def index
      users = User.all
      render json: users
    end
  
    def show
      user = User.find_by(id: session[:user_id])
      render json: user, include: ['conversations.messages', 'conversations.users', 'conversations.messages.user']
    end
  
    def create
      user = User.create!(user_params)
      set_session(user, params[:remember_me])
      render json: user, status: :created
    end
  
    private
  
    def user_params
      params.permit(:username, :password, :password_confirmation, :remember_me)
    end
  
    def authorize
      return render json: {errors: ["Not authorized"]}, status: :unauthorized unless session.include? :user_id
    end
  
    def handle_remember_me
      if !session[:remember_me]
        clear_session
        return render json: {errors: ["Not authorized"]}, status: :unauthorized
      end
    end
  
    def render_not_found_response
      render json: {errors: "User not in session"}, status: :not_found
    end
  
    def render_unprocessable_entity_response(invalid)
      render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end
  end
