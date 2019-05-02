class CreateShoes < ActiveRecord::Migration[5.2]
  def change
    create_table :shoes do |t|
      t.integer :price
      t.string :description
      t.string :name
      t.string :size
      t.string :material

      t.timestamps
    end
  end
end
