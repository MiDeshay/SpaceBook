class Api::CommentsController < ApplicationController
    def create
        @comment = Comment.new(comment_params)
        if @comment.save
          render :show
        else
          render json: @comment.errors.full_messages, status: 404
       
        end
    end

    def show
        @comments = Comment.all
        if @comments
            render :index
        else
            render json: @comments.errors.full_messages, status: :unprocessable_entity
        end
    end

    def update
        @comment = Comment.find_by(id: params[:id])
        if @comment.update(comment_params)
            render :show
        else
            render json: @comment.errors.full_messages, status: :unprocessable_entity
        end


    end

    def destroy
        @comment = Comment.find_by(id: params[:id])
        if @comment.destroy
            render :show
        else
            render json: @comment.errors.full_messages, status: :unprocessable_entity
        end
    end

    private

    def comment_params
        params.require(:comment).permit(:body, :post_id, :parent_comment_id, :commenter_id)
    end
end
