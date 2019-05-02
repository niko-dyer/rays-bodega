class CreateWoodworks < ActiveRecord::Migration[5.2]
  def change
    create_table :woodworks do |t|
      t.string :name
      t.integer :price
      t.string :description
      t.string :wood_type
      t.string :size

      t.timestamps
    end
  end
end
