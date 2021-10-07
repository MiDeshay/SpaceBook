class Api::FriendsController < ApplicationController

    def show
        friends1 = User.find_by(id: params[:id]).friends_they_added
        friends2 = User.find_by(id: params[:id]).friends_who_added_them
        @users = friends1 + friends2
        @users.sort_by &:created_at

        if @users
          render :index
        else
          render json: ["You haven't added any friends yet!"], status: 401
        end
    end

    def destroy
        @friendship = Friend.find_by(id: params[:id])
        if @friendship.destroy
            render :show
        else
            render json: @post.errors.full_messages, status: :unprocessable_entity
        end
    end
    

private

  def friend_params
    params.require(:friend).permit(:user_id, :friend_id)
  end
end