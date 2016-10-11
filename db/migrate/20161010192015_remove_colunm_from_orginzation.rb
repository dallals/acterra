class RemoveColunmFromOrginzation < ActiveRecord::Migration
  def up
  	remove_column :organizations, :organization_type
  end

  def down
  	add_column :organizations, :organization_type
  end
end
