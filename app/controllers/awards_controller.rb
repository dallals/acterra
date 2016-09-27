class AwardsController < ApplicationController
  before_action :set_award, only: [:show, :edit, :update, :destroy]
  skip_before_action :authenticate_user!, only: [:index] 

  # GET /awards
  # GET /awards.json
  def index
    # @awards2 = Organization.joins(:awards).where(:awards => {:name => 'Heather Award 2000'})
    @org = Organization.joins(:awards, :counties, :award_years).select("organizations.id", 
      "organizations.name AS org_name", "award_years.name AS award_year", 
          "awards.name AS award_name", "counties.name AS county_name").distinct
    # @org = Award.joins(:award_years, :counties, :organizations).select("organizations.id", "organizations.name AS org_name", "award_years.name AS award_year", "awards.name AS award_name", "counties.name AS county_name" )
    @county = County.all
    respond_to do |format|
      format.html 
      format.json { render json: @org}
      # format.json { render :json => {:awards => @awards, :awards2 => @awards2}}
      # format.json { render json: {organizations: @org, county: @county }}
    end
  end


  def show
    respond_to do |format|
      format.html
      format.json { render json: @award }
    end
  end

  def new
    @award = Award.new
  end

 
  def edit
  end


  def create
    @award = Award.new(award_params)

    respond_to do |format|
      if @award.save
        format.html { redirect_to @award, notice: 'Award was successfully created.' }
        format.json { render :show, status: :created, location: @award }
      else
        format.html { render :new }
        format.json { render json: @award.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    respond_to do |format|
      if @award.update(award_params)
        format.html { redirect_to @award, notice: 'Award was successfully updated.' }
        format.json { render :show, status: :ok, location: @award }
      else
        format.html { render :edit }
        format.json { render json: @award.errors, status: :unprocessable_entity }
      end
    end
  end


  def destroy
    @award.destroy
    respond_to do |format|
      format.html { redirect_to awards_url, notice: 'Award was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_award
      @award = Award.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def award_params
      params.require(:award).permit(:name, :description)
    end
end
