class YearAward < ActiveRecord::Base
	belongs_to :award
	belongs_to :award_year
end
