# == Schema Information
#
# Table name: comments
#
#  id           :bigint           not null, primary key
#  body         :text             not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  commenter_id :integer          not null
#  parent_id    :integer
#  post_id      :integer          not null
#
# Indexes
#
#  index_comments_on_post_id  (post_id)
#
class Comment < ApplicationRecord
    validates :body, :commenter_id, :post_id, presence: true

    belongs_to :post

    has_many :replies

    has_many :likes, as: :likeable

    has_many :users_who_liked,
    through: :likes,
    source: :user

    belongs_to :commenter,
    foreign_key: :commenter_id,
    class_name: :User

    has_many :replies,
    foreign_key: :parent_id,
    class_name: :Comment
end
