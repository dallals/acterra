
class Organization < ActiveRecord::Base
  belongs_to :county
  has_many :images, dependent: :destroy
  # has_many :org_awards #, :dependent => :delete_all
  # has_many :awards, through: :org_awards
  has_many :award_years
  has_many :awards, -> { uniq }, :through => :award_years
  validates :name, presence: true 
end
