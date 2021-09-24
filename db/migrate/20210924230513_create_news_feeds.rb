class CreateNewsFeeds < ActiveRecord::Migration[5.2]
  def change
    create_table :news_feeds do |t|
      t.integer :user_id, null: false
      t.integer :post_id, null: false
      t.timestamps
    end

    add_index :news_feeds, :user_id
    add_index :news_feeds, :post_id 
  end
end
