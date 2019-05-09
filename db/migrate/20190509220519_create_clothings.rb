class CreateClothings < ActiveRecord::Migration[5.2]
  def change
    create_table :clothings do |t|
      t.string :name
      t.integer :price
      t.string :description
      t.string :material
      t.string :size

      t.timestamps
    end
  end
end
