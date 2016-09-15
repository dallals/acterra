class CreateCountyAwards < ActiveRecord::Migration
  def change
    create_table :county_awards do |t|
      t.references :county, index: true, foreign_key: true
      t.references :award, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
