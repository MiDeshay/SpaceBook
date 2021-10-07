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

    attr_accessor :remove_photo

    after_save :purge_photo, if: :remove_photo
    private def purge_photo
        photo.purge
    end

    has_many :comments

    has_many :likes, as: :likeable

    has_many :users_who_liked,
    through: :likes,
    source: :user

    has_one_attached :photo

    belongs_to :poster,
    foreign_key: :poster_id,
    class_name: :User
end
