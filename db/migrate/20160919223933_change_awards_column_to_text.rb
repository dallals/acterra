class ChangeAwardsColumnToText < ActiveRecord::Migration
	def up
		change_column :awards, :description, :text
	end

	def down
		change_column :awards, :description, :string
	end
end
