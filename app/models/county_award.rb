class CountyAward < ActiveRecord::Base
  belongs_to :county
  belongs_to :award
end
