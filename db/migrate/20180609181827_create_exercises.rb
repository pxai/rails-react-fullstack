class CreateExercises < ActiveRecord::Migration[5.1]
  def change
    create_table :exercises do |t|
      t.string :name
      t.string :description
      t.string :icon
      t.integer :repeat
      t.float :calories

      t.timestamps
    end
  end
end
