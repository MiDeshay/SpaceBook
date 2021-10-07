class Api::NewsFeedsController < ApplicationController
    def index
    user_posts = Post.where(poster_id: current_user.id)
    allfriends = current_user.friends_they_added + current_user.friends_who_added_them
    friend_posts = []
    allfriends.each do |friend|
        friend.posts.each do |post|
            friend_posts << post
        end
    end
    @all_posts = user_posts + friend_posts
        @all_posts.sort_by &:created_at
        render :index
    end
end
