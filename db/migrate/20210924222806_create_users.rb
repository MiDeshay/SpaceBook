class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.string :email, null: false
      t.string :bio
      t.date :birthday
      t.string :location
      t.string :work
      t.string :school
      t.string :gender
      t.string :birthplace
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.timestamps
    end
    add_index :users, :first_name
    add_index :users, :last_name
    add_index :users, :session_token, unique: true
    add_index :users, :email, unique: true
  end
end
