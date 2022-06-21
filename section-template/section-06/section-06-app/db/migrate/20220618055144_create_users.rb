class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :user_id, null: false, unique: true
      t.string :email, null: false, unique: true
      t.string :password, null: false

      t.timestamps
    end
  end
end
