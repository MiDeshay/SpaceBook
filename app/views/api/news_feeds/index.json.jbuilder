
@all_posts.each do |post|
        json.set! post.id do
                json.extract! post, :id, :body, :poster_id, :created_at
                json.extract! post.poster, :first_name, :last_name
                json.avatarUrl url_for(post.poster.avatar) if post.poster.avatar.attached?
                json.photoUrl url_for(post.photo) if post.photo.attached?
        end
end