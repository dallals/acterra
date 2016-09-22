class CreateAwardYears < ActiveRecord::Migration
  def change
    create_table :award_years do |t|
      t.string :name
      t.integer :organization_id
      t.integer :award_id

      t.timestamps null: false
    end
  end
end
