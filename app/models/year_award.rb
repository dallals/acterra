class YearAward < ActiveRecord::Base
	belongs_to :award
	belongs_to :award_year
	belongs_to :organization
	belongs_to :county
end
