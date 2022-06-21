class CreateSessions < ActiveRecord::Migration[7.0]
  def change
    create_table :sessions do |t|
      t.string :user_id
      t.string :session

      t.timestamps
    end
  end
end
