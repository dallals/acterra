class OrganizationType < ActiveRecord::Base
  has_many :organizations
  before_save { |county| county.name = county.name.titleize } 
end
