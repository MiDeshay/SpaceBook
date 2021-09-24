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
require 'test_helper'

class NewsFeedTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
