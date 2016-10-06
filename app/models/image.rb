class Image < ActiveRecord::Base
  belongs_to :organization
  belongs_to :award
  mount_uploader :picture, PictureUploader
  validate :picture_size
  validates :name, presence: true 


  private

  def picture_size
		if picture.size > 7.megabytes
			errors.add(:picture, "should be less than 7MB")
		end
	end
end
