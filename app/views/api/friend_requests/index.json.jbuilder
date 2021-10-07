@requests.each do |request|
    json.set! request.id do
        json.extract! request, :id, :user_id, :created_at
        json.extract! request.sender, :first_name, :last_name
        json.avatarUrl url_for(request.sender.avatar) if request.sender.avatar.attached?
        
    end
end