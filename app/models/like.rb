# == Schema Information
#
# Table name: likes
#
#  id            :bigint           not null, primary key
#  likeable_type :string
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  likeable_id   :bigint
#  user_id       :integer          not null
#
# Indexes
#
#  index_likes_on_likeable_type_and_likeable_id  (likeable_type,likeable_id)
#  index_likes_on_user_id                        (user_id)
#
class Like < ApplicationRecord
    validates :likeable_id, :likeable_type, :user_id, presence: true

    belongs_to :likeable, polymorphic: true 

    belongs_to :user
end
