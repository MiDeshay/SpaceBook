class Api::NewsFeedsController < ApplicationController
    def index
       user_posts = Post.where(poster_id: current_user.id)
       friend_posts = current_user.friends_posts
       @all_posts = user_posts + friend_posts

        @all_posts.sort_by &:created_at
        render :index
    end
end
