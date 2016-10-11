class OrganizationTypesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:index] 
  def index
    @types = OrganizationType.all.order(:name)
    respond_to do |format|
      format.html
      format.json { render json: @types }
    end
  end
end
