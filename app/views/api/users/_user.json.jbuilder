json.extract! user, :id, :first_name, :last_name, :email, :birthday, :gender, :pronouns, :posts, :bio, :school, :location, :birthplace, :work

# json.friends do
    # json.array! do
    #     user.friends_who_added_them.map do |friend|
    #         json.set! friend.id do
    #             json.extract! friend, :id, :first_name, :last_name
    #             json.avatarUrl url_for(user.avatar) if user.avatar.attached?
    #         end
    #     end
    #     user.friends_they_added.map do |friend|
    #         json.set! friend.id do
    #             json.extract! friend, :id, :first_name, :last_name
    #             json.avatarUrl url_for(user.avatar) if user.avatar.attached?
    #         end
    #     end
    # end
@allfriends = user.friends_they_added + user.friends_who_added_them
json.friends(@allfriends) do |friend|
    json.first_name friend.first_name
    json.last_name friend.last_name
    json.avatarUrl url_for(friend.avatar) if friend.avatar.attached?
end

# end

json.avatarUrl url_for(user.avatar) if user.avatar.attached?
json.backgroundUrl url_for(user.background) if user.background.attached?
