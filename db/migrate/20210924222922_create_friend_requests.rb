class CreateFriendRequests < ActiveRecord::Migration[5.2]
  def change
    create_table :friend_requests do |t|
      t.integer :user_id, null: false
      t.integer :requested_id, null: false
      t.timestamps
    end

    add_index :friend_requests, :user_id
    add_index :friend_requests, :requested_id  
  end
end
