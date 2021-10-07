json.extract! @comment, :id, :body, :commenter_id, :post_id
json.extract! @comment.commenter, :first_name, :last_name
json.avatarUrl url_for(@comment.commenter.avatar)  if @comment.commenter.avatar.attached?