class Organization < ActiveRecord::Base
  belongs_to :county
 
  has_many :images #, :dependent => :delete_all
  has_many :org_awards #, :dependent => :delete_all
  has_many :awards, through: :org_awards
  validates :name, presence: true 
end
