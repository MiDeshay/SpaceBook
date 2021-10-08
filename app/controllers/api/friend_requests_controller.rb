class Api::FriendRequestsController < ApplicationController
    #create a friend request
    def create
        request = FriendRequest.new(friend_request_params)
        if request.save
            @requests = FriendRequest.where(requested_id: current_user.id)
            render :index
        else
            render json: request.errors.full_messages, status: 404
        end
    end

    def index
        @requests = FriendRequest.where(requested_id: current_user.id)
        render :index
    end
    
    def show
       request = FriendRequest.find_by(params.id)
       if request
            if Friend.create(user_id: request.user_id, friend_id: request.friend_id)
                if(request.destroy)
                    @friend = User.find_by(id: friend_id)
                    render :show
                else
                    render json: request.errors.full_messages, status: 404
                end
            else
                render json: ["ERROR: friendship could ne be created"]
            end
       else
        render json: request.errors.full_messages, status: 404
       end
    end

    def destroy
        @request = FriendRequest.find_by(params.id)
        if(@request.destroy)
            render :show
        else
            render json: @request.errors.full_messages, status: 404
        end
    end


    private

    def friend_request_params
        params.require(:friend_request).permit(:user_id, :requested_id, :accepted)
    end

end
