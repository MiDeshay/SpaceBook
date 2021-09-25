# == Schema Information
#
# Table name: news_feeds
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  post_id    :integer          not null
#  user_id    :integer          not null
#
# Indexes
#
#  index_news_feeds_on_post_id  (post_id)
#  index_news_feeds_on_user_id  (user_id)
#
class NewsFeed < ApplicationRecord
    validates :post_id, :user_id, presence: true
    belongs_to :user

    has_many :own_posts,
    through: :user,
    source: :posts
end
