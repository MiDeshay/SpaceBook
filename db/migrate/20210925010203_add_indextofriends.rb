class AddIndextofriends < ActiveRecord::Migration[5.2]
  def change
    add_index :friends, :user_id
    add_index :friends, :friend_id
  end
end
