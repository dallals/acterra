class AppController < ApplicationController
	skip_before_action :authenticate_user!, only: [:index] 

    def index
    	# @org = Organization.joins(:county).select("organizations.id", "organizations.name AS org_name", "counties.name AS county_name")
        @org = Organization.all
        # @org = County.find(2).organizations
        # @org = County.all
        # org2 = @org
        # @org = County.find(2).organizations.all
        # @orgCounty = Organization.where(county_id: 1)
        # render json: @org
        respond_to do |format|
          format.html
          format.json { render json: @org }
        end
    end

    def show
        @organization = Organization.find(params[:id])
        respond_to do |format|
          format.html
          format.json { render json: @organization }
        end
    end

end
