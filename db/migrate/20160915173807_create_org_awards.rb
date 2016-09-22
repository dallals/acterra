class CreateOrgAwards < ActiveRecord::Migration
  def change
    create_table :org_awards do |t|
      t.references :organization, index: true
      t.references :award, index: true

      t.timestamps null: false
    end
  end
end
