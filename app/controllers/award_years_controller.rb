class AwardYearsController < ApplicationController

	def index
		awardYear = AwardYear.all 

		respond_to do |format|
      format.html
      format.json { render json: awardYear }
    end
	end

end