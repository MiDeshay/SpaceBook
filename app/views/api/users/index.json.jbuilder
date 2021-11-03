@users.each do |user|
 json.set! user.id do
        json.extract! user, :id, :first_name, :last_name, :email, :bio, :school, :location, :birthplace
        json.avatarUrl url_for(user.avatar) if user.avatar.attached?
        json.backgroundUrl url_for(user.background) if user.background.attached?
        
        json.friends do
            user.friends_they_added.each do |friend1|
                json.set! friend1.id do
                    json.extract! friend1, :id, :first_name, :last_name
                    json.avatarUrl url_for(friend1.avatar) if friend1.avatar.attached?
                end
            end
            user.friends_who_added_them.each do |friend2|
                json.set! friend2.id do
                    json.extract! friend2, :id, :first_name, :last_name
                    json.avatarUrl url_for(friend2.avatar) if friend2.avatar.attached?
                end
            end
        end
    
    end
end