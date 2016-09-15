class Image < ActiveRecord::Base
  belongs_to :organization
  belongs_to :award
end
