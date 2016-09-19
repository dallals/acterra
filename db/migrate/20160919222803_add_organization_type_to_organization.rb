class AddOrganizationTypeToOrganization < ActiveRecord::Migration
  def change
    add_column :organizations, :organization_type, :string
  end
end
