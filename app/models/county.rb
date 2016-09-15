class County < ActiveRecord::Base
	has_many :organizations
	has_many :county_awards
	has_many :awards, through: :county_awards
end
