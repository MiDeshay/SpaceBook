class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.string :body, null: false
      t.integer :poster_id, null: false
      t.timestamps
    end
    add_index :posts, :poster_id
  end
end
