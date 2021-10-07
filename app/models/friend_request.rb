# == Schema Information
#
# Table name: friend_requests
#
#  id           :bigint           not null, primary key
#  accepted     :boolean
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  requested_id :integer          not null
#  user_id      :integer          not null
#
# Indexes
#
#  index_friend_requests_on_requested_id  (requested_id)
#  index_friend_requests_on_user_id       (user_id)
#
class FriendRequest < ApplicationRecord
    validates :user_id, :requested_id, presence: true

    belongs_to :receiver,
    foreign_key: :requested_id,
    class_name: :User

    belongs_to :sender,
    foreign_key: :user_id,
    class_name: :User
end
