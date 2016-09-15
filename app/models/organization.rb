class Organization < ActiveRecord::Base
  belongs_to :county
  has_many :images
  has_many :org_awards
  has_many :awards, through: :org_awards
end
