class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  validates :first_name, presence: true
  validates :last_name, presence: true 
  validates :username, presence: true  
  validates :username, uniqueness: true 
  validates :email, presence: true   
  before_save { |user| user.first_name = user.first_name.capitalize }
  before_save { |user| user.last_name = user.last_name.capitalize }


  def full_name
    "#{first_name} #{last_name}"
  end 

end
