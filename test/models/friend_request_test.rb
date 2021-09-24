# == Schema Information
#
# Table name: friend_requests
#
#  id           :bigint           not null, primary key
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  requested_id :integer          not null
#  user_id      :integer          not null
#
# Indexes
#
#  index_friend_requests_on_requested_id  (requested_id)
#  index_friend_requests_on_user_id       (user_id)
#
require 'test_helper'

class FriendRequestTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
