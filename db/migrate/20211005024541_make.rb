class Make < ActiveRecord::Migration[5.2]
  def change
    remove_column :comments, :commeter_id

    add_column :comments, :commenter_id, :integer, null: false

  end
end
