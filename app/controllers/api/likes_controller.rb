class Api::LikesController < ApplicationController
    def create 
        like = Like.new(like_params)
        if like.save
            if(like_params[:likeable_type] == "Post")
                @post = Post.find_by(id: like_params[:likeable_id])
                render :show
            else
                @comment = Comment.find_by(id: like_params[:likeable_id])
                render :show
            end
        else
            render json: like.errors.full_messages, status: 404
        end


    end

    def destroy
        like = Like.find_by(id: params[:id])
        if like.destroy
            if(like.likeable_type == "Post")
                @post = Post.find_by(id: like.likeable_id)
                 render :show
            else
                @comment = Comment.find_by(id: like.likeable_id)
                render :show
            end
        else
            render json: like.errors.full_messages, status: :unprocessable_entity
        end


    end

    private

  def like_params
    params.require(:like).permit(:likeable_type, :likeable_id, :user_id)
  end

end
