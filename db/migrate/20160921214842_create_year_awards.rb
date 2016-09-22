class CreateYearAwards < ActiveRecord::Migration
  def change
    create_table :year_awards do |t|
      t.references :award, index: true
      t.references :award_year, index: true
      t.references :organization, index: true
      t.references :county, index: true
      t.timestamps null: false
    end
  end
end
