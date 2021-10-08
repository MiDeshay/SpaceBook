@friends.each do |friend|
    json.set! friend.id do
        json.extract! @friendship, :id, :friend_id, :user_id
    end
end