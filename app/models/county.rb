class County < ActiveRecord::Base
	has_many :organizations #, :dependent => :delete_all
	has_many :county_awards #, :dependent => :delete_all
	# has_many :awards, through: :county_awards
	has_many :year_awards
  # has_many :organizations, through: :year_awards
  has_many :awards, through: :year_awards
  has_many :award_years, through: :year_awards
	validates :name, presence: true 
end
