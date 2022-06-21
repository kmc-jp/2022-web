class AddConstraintToSessions < ActiveRecord::Migration[7.0]
  def change
    add_foreign_key :sessions, :users, column: :user_id, primary_key: "user_id"
    add_index :sessions, [:user_id, :session]
  end
end
