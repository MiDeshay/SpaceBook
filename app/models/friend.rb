# == Schema Information
#
# Table name: friends
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  friend_id  :integer          not null
#  user_id    :integer          not null
#
# Indexes
#
#  index_friends_on_friend_id  (friend_id)
#  index_friends_on_user_id    (user_id)
#
class Friend < ApplicationRecord
    validates :friend_id, :user_id, presence: true

    belongs_to :user,
    foreign_key: :user_id,
    class_name: :User


    belongs_to :friendship,
    foreign_key: :friend_id,
    class_name: :User

    has_many :posts_of_friends,
    through: :friendship,
    source: :posts
end
