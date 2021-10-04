# == Schema Information
#
# Table name: posts
#
#  id         :bigint           not null, primary key
#  body       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  poster_id  :integer          not null
#
# Indexes
#
#  index_posts_on_poster_id  (poster_id)
#
class Post < ApplicationRecord
    validates :body, :poster_id, presence: true
    has_many :comments

    has_many :likes, as: :likeable

    has_one_attached :photo

    belongs_to :poster,
    foreign_key: :poster_id,
    class_name: :User
end
