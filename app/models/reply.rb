# == Schema Information
#
# Table name: replies
#
#  id              :bigint           not null, primary key
#  body            :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  comment_id      :integer          not null
#  parent_reply_id :integer
#  user_id         :integer          not null
#
class Reply < ApplicationRecord

    validates :body, :user_id, :comment_id, presence: true

    belongs_to :comment

    belongs_to :user
    
    has_many :likes, as: :likeable
    
    has_many :users_who_liked,
    through: :likes,
    source: :user
    
    has_many :child_replies,
    foreign_key: :parent_reply_id,
    class_name: :Reply
end
