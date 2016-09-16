class County < ActiveRecord::Base
	has_many :organizations #, :dependent => :delete_all
	has_many :county_awards #, :dependent => :delete_all
	has_many :awards, through: :county_awards
end
