class AddDurationToExercise < ActiveRecord::Migration[5.1]
  def change
  	add_column :exercises, :duration, :float
	add_index :exercises, :name
	# remove_column
  end
end
