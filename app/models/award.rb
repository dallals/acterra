class Award < ActiveRecord::Base
	has_many :images
	has_many :county_awards
	has_many :counties, through: :county_awards
	#has_many :org_awards
	#has_many :organizations, through: :org_awards
	has_many :award_years
	has_many :organizations, through: :award_years
	
	validates :name, presence: true 
end
