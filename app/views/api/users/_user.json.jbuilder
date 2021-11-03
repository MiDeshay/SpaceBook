json.extract! user, :id, :first_name, :last_name, :email, :birthday, :gender, :pronouns, :posts, :bio, :school, :location, :birthplace, :work
json.avatarUrl url_for(user.avatar) if user.avatar.attached?
json.backgroundUrl url_for(user.background) if user.background.attached?

json.friends do
    user.friends_they_added.each do |friend|
        json.set! friend.id do
            json.extract! friend, :id, :first_name, :last_name
            json.avatarUrl url_for(friend.avatar) if friend.avatar.attached?
        end
    end
    user.friends_who_added_them.each do |friend|
        json.set! friend.id do
            json.extract! friend, :id, :first_name, :last_name
            json.avatarUrl url_for(friend.avatar) if friend.avatar.attached?
        end
    end
end
