class AddsharedUserId < ActiveRecord::Migration[5.2]
  def change
    add_column :posts, :messaged_user_id, :integer
  end
end
