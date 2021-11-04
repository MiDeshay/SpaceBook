class Api::PostsController < ApplicationController
    def index
        ownPosts = Post.where(poster_id: current_user.id)
        messages = Post.where(messaged_user_id: current_user.id)
        @posts = ownPosts + messages
        @posts.sort_by &:created_at
        render :index
    end

    def show
        ownPosts = Post.where(poster_id: params[:id])
        messages = Post.where(messaged_user_id: params[:id])
        @posts = ownPosts + messages
        @posts.sort_by &:created_at
        render :index
    end

    def create
        @post = Post.new(post_params)
        if @post.save
          render :show
        else
          render json: @post.errors.full_messages, status: 404
       
        end
    end

    def update
        @post = Post.find_by(id: params[:id])
        if @post.update(post_params)
            render :show
        else
            render json: @post.errors.full_messages, status: :unprocessable_entity
        end


    end

    def destroy
        @post = Post.find_by(id: params[:id])
        if @post.destroy
            render :show
        else
            render json: @post.errors.full_messages, status: :unprocessable_entity
        end
    end

    private

    def post_params
        params.require(:post).permit(:body, :poster_id, :photo, :remove_photo, :messaged_user_id)
      end
end
