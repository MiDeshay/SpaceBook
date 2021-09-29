@posts.each do |post|
    json.set! post.id do
        json.extract! post, :id, :body, :poster_id
    end
end