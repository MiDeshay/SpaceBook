class Api::FriendsController < ApplicationController

    def index
        @friends = Friend.where(user_id: current_user.id)
        if @friends
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