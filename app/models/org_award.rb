class OrgAward < ActiveRecord::Base
  belongs_to :organization
  belongs_to :award
end
