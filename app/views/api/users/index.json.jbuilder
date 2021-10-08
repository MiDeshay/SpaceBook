@users.each do |user|
 json.set! user.id do
        json.extract! user, :id, :first_name, :last_name, :email, :bio, :school, :location, :birthplace, :friends
        json.avatarUrl url_for(user.avatar) if user.avatar.attached?
        json.backgroundUrl url_for(user.background) if user.background.attached?
        
    end
end