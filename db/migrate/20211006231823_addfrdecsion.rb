class Addfrdecsion < ActiveRecord::Migration[5.2]
  def change
      add_column :friend_requests, :accepted, :boolean
  end
end
