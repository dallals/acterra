class WelcomeController < ApplicationController
<<<<<<< HEAD
	skip_before_action :authenticate_user!, only:[:index]
=======
	skip_before_action :authenticate_user!, only: [:index] 
	before_action :set_organization
	
>>>>>>> 45625bcf13ea2115a3438dd560a2cebaf1d60c4e
	def index
		counties = County.all
		orgs = Organization.all 
		# county = County.where(organization_id: org.id).first
		respond_to do |format|
			format.html
			format.json { render json: orgs }
		end
	end
<<<<<<< HEAD
end
=======

	  private
    # Use callbacks to share common setup or constraints between actions.
    def set_organization
      # @org = Organization.find(params[:id])
    end

end
>>>>>>> 45625bcf13ea2115a3438dd560a2cebaf1d60c4e
