class CreateFriends < ActiveRecord::Migration[5.2]
  def change
    create_table :session do |t|
      t.integer :user_id, null: false
      t.integer :friend_id, null: false
      t.timestamps
    end

    add_index :session, :user_id
    add_index :session, :friend_id
  end
end
