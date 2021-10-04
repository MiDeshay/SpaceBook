@posts.each do |post|
    json.set! post.id do
        json.extract! post, :id, :body, :poster_id, :created_at
        json.photoUrl url_for(post.photo) if post.photo.attached?
    end
end