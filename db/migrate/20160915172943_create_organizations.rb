class CreateOrganizations < ActiveRecord::Migration
  def change
    create_table :organizations do |t|
      t.string :name
      t.string :description
      t.string :video
      t.string :website
      t.integer :phone
      t.string :email
      t.references :county, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
