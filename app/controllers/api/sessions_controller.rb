class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
        if @user.nil? 
            render json: ['Invalid Email/Password'], status: 401
        else 
            login!(@user)
            render "api/users/show"
        end
    end

    def destroy
        if logged_in?
            logout!
            render json: {}
        else 
            render json: @user.errors.full_messages, status: 404
        end
    end

end
