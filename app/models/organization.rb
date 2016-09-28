
class Organization < ActiveRecord::Base
  belongs_to :county
  has_many :images, dependent: :destroy
  # has_many :org_awards #, :dependent => :delete_all
  # has_many :awards, through: :org_awards
  has_many :award_years
  has_many :awards, -> { uniq }, :through => :award_years
  validates :name, presence: true 
  validates :county_id, presence: true
  validates :organization_type, presence: true
  before_save { |organization| organization.organization_type = organization.organization_type.titleize }
  before_save { |organization| organization.name = organization.name.titleize }
end
