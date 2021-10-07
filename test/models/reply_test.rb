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
require 'test_helper'

class ReplyTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
