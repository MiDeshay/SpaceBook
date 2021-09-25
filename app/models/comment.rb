# == Schema Information
#
# Table name: comments
#
#  id                :bigint           not null, primary key
#  body              :text             not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#  commeter_id       :integer          not null
#  parent_comment_id :integer
#  post_id           :integer          not null
#
# Indexes
#
#  index_comments_on_commeter_id        (commeter_id)
#  index_comments_on_parent_comment_id  (parent_comment_id)
#  index_comments_on_post_id            (post_id)
#
class Comment < ApplicationRecord
    validates :body, :commeter_id, :post_id, presence: true

    belongs_to :post

    has_many :likes, as: :likeable

    belongs_to :commeter,
    foreign_key: :commeter_id,
    class_name: :User

    belongs_to :parent_commet,
    foreign_key: :parent_comment_id,
    class_name: :Comment

    has_many :child_comments,
    foreign_key: :parent_comment_id,
    class_name: :Comment
end
