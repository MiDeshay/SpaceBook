@users.each do |user|
    json.set! user.id do
        json.extract! user, :id, :first_name, :last_name
        json.avatarUrl url_for(user.avatar) if user.avatar.attached?

        # json.set! :mutual_friends   do
        #     user.friendships.each do |friend|
        #         friend.friendships.each do |friends_friend|
        #             if (friend.id == friends_friend.id)
        #                 json.set! friend.id do
        #                     json.extract! friend, :first_name, :last_name
        #                 end
        #             end
        #         end
        #     end
        # end
        
        
    end
end