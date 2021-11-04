@comments.each do |comment|
    json.set! comment.id do
        json.extract! comment, :id, :body, :commenter_id, :post_id, :likes
        json.extract! comment.commenter, :first_name, :last_name
        json.avatarUrl url_for(comment.commenter.avatar)  if comment.commenter.avatar.attached?
    end
end
            