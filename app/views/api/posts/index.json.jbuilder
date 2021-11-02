@posts.each do |post|
    json.set! post.id do
        json.extract! post, :id, :body, :poster_id, :created_at, :comments
        json.extract! post.poster, :first_name, :last_name
        json.avatarUrl url_for(post.poster.avatar) if post.poster.avatar.attached?
        json.photoUrl url_for(post.photo) if post.photo.attached?

        json.commenters do
            post.comments.each do |comment|
                json.set! comment.commenter.id do
                    json.extract! comment.commenter, :first_name, :last_name
                    json.avatarUrl url_for(comment.commenter.avatar) if comment.commenter.avatar.attached?

                end
            end
        end
    end
end