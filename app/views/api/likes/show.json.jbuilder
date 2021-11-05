json.extract! @post, :id, :body, :poster_id, :created_at, :comments, :likes
json.extract! @post.poster, :first_name, :last_name
json.avatarUrl url_for(@post.poster.avatar) if @post.poster.avatar.attached?
json.photoUrl url_for(@post.photo) if @post.photo.attached?


if(@post.messaged_user)
    json.messaged_user do
            json.extract! @post.messaged_user, :id, :first_name, :last_name
    end
end

json.liked false

current_user.likes.each do |like|
        if (like.likeable_type == "Post" && like.likeable_id == @post.id)
                json.liked like.id
        end
end

json.likers do
    @post.users_who_liked.each do |liker|
        json.set! liker.id do 
            json.extract! liker, :id, :first_name, :last_name
            json.avatarUrl url_for(liker.avatar) if liker.avatar.attached?
        end
    end

end

json.commenters do
    @post.comments.each do |comment|
        json.set! comment.commenter.id do
            json.extract! comment.commenter, :id, :first_name, :last_name
            json.avatarUrl url_for(comment.commenter.avatar) if comment.commenter.avatar.attached?

        end
    end
end
