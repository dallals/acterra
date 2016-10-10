class OrganizationType < ActiveRecord::Base
  has_many :organizations
  before_validation { |county| county.name = county.name.titleize } 
  validates :name, uniqueness: true
  validates :name, presence: true
end
