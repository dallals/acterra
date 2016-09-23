class Organization < ActiveRecord::Base
  belongs_to :county
  has_many :images #, :dependent => :delete_all
  has_many :org_awards #, :dependent => :delete_all
  # has_many :awards, through: :org_awards
  has_many :award_years 
  has_many :year_awards
  has_many :awards, through: :year_awards
  has_many :award_years, through: :year_awards
  # has_one :county
  has_many :counties, through: :year_awards

  # has_many :awards, through: :year_awards
  validates :name, presence: true 
end
