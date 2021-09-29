json.array! @posts do |post|
    json.partial! "api/posts/post.json.jbuilder", post: post
end