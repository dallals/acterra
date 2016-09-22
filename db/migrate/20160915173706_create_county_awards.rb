class CreateCountyAwards < ActiveRecord::Migration
  def change
    create_table :county_awards do |t|
      t.references :county, index: true
      t.references :award, index: true

      t.timestamps null: false
    end
  end
end
