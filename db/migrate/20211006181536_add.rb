class Add < ActiveRecord::Migration[5.2]
  def change
    add_column :replies, :body, :string, null: false
    add_column :replies, :user_id, :integer, null: false
    add_column :replies, :comment_id, :integer, null: false
    add_column :replies, :parent_reply_id, :integer
  end
end
