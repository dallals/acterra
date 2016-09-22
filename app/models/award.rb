class Award < ActiveRecord::Base
	has_many :images
	has_many :county_awards
	has_many :counties, through: :county_awards
	has_many :org_awards
	has_many :organizations, through: :org_awards
	has_many :year_awards
	has_many :award_years, through: :year_awards
	has_many :counties, through: :year_awards
	# has_one  :award_year
	validates :name, presence: true 
	# validate :only_one_year


	# def picture_size
	# 	if picture.size > 5.megabytes
	# 		errors.add(:picture, "should be less the 5MB")
	# 	end
	# end

	# def only_one_year(self)
	# 	if self.Award.award_years.size > 1
	# 		errors.add(:award, "you can only have one year per award")
	# 	end
	# end
end
