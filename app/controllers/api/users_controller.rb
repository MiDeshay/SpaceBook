class Api::UsersController < ApplicationController
  
    def create
        @user = User.new(user_params)
        if @user.save
          login!(@user)
          render :show
        else
          render json: @user.errors.full_messages, status: 404
       
        end
    end

    def index
      @users = User.all
      render :index
    end

    def show
        @user = User.find_by(id: params[:id])
        if @user
          render :show
        else
          render json: ['User not found'], status: 401
        end
      end


    

private

  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :password, :birthday, :gender, :pronouns)
  end
end
