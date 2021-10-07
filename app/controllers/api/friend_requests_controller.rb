class Api::FriendRequestsController < ApplicationController
    #create a friend request
    def create
        @request = FriendRequest.new(friend_request_params)
        if @request.save
            render :show
        else
            render json: @request.errors.full_messages, status: 404
        end
    end

    #show all friend requests
    # def index
    #     @requests 
    # end
    
    #send this up with user

    #accept friend request creating a new friendship, 
    #then destroys the request
    def update
        @request = FriendRequest,find_by(id: params[:id])
        if @request.update(friend_request_params)
            if @request.accepted
                @friend = Friend.new (user_id: friend_request_params.user_id, friend_request_params.friend_id)
                if @friend.save!
                    render :show
                else
                    render json: @friend.errors.full_messages, status: 404 
                end
            else
                render :show
            end
        else
            render json: @request.errors.full_messages, status: 404 
        end


    end

    private

    def friend_request_params
        params.require(:friend_request).permit(:user_id, :requested_id, :accepted)
    end

end
