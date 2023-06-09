class CreateMessages < ActiveRecord::Migration[6.1]
  def change
    create_table :messages do |t|
      t.string :content
      t.boolean :read
      t.boolean :deleted
      t.integer :user_id
      t.integer :conversation_id

      t.timestamps
    end
  end
end
