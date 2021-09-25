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
require 'test_helper'

class FriendTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
