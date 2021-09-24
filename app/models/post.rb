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
end
