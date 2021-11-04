# == Schema Information
#
# Table name: posts
#
#  id               :bigint           not null, primary key
#  body             :string           not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  messaged_user_id :integer
#  poster_id        :integer          not null
#
# Indexes
#
#  index_posts_on_poster_id  (poster_id)
#
require 'test_helper'

class PostTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
