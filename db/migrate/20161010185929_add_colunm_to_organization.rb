class AddColunmToOrganization < ActiveRecord::Migration
  def change
  	add_column :organizations, :organization_type_id, :string, references: :organization_type, index: true
  end
end

