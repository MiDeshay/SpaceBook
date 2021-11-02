class Api::PostsController < ApplicationController
    def index
        @posts = Post.where(poster_id: current_user.id)
        render :index
    end

    def show
        @posts = Post.where(poster_id: params[:id])
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
        params.require(:post).permit(:body, :poster_id, :photo, :remove_photo)
      end
end
