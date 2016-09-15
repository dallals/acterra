class CreateOrgAwards < ActiveRecord::Migration
  def change
    create_table :org_awards do |t|
      t.references :organization, index: true, foreign_key: true
      t.references :award, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
