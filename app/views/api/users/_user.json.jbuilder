json.extract! user, :id, :first_name, :last_name, :email, :birthday, :gender, :pronouns, :posts, :bio, :school, :location, :birthplace, :work
json.avatarUrl url_for(user.avatar) if user.avatar.attached?
json.backgroundUrl url_for(user.background) if user.background.attached?
