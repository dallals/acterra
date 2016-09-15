class ChangeOrganizationPhoneToString < ActiveRecord::Migration
  def change
  	change_column :organizations, :phone, :string
  end
end
