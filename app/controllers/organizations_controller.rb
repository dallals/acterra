class OrganizationsController < ApplicationController
  before_action :set_organization, only: [:show, :edit, :update, :destroy]
  skip_before_action :authenticate_user!, only: [:index, :show] 

  # GET /organizations
  # GET /organizations.json
  def index
    # @org = Organization.joins(:county).select("organizations.id", "organizations.name AS org_name", "counties.name AS county_name")
    # @org = Organization.joins(:county, :awards).select("organizations.id", "organizations.name AS org_name", "organizations.organization_type AS org_type", "counties.name AS county_name", "award_years.name AS award_year", "awards.name AS award_name")
    @org = AwardYear.includes({organization: [:county]}, :award)
    # if @org == []
    #   @org = Organization.all
    # end  
    respond_to do |format|
      format.html
      format.json { render json: @org.to_json( include: {organization: {include: {county: { only: [:name]}}, only: [:name, :description, :organization_type]} , award: { only: [:name]} } )}
    end
  end


  # GET /organizations/1
  # GET /organizations/1.json
  def show
    # @image = Image.where(organization_id: @organization)
    # @org = Organization.joins(:images).select("organizations.id", "organizations.name AS org_name", "images.name AS image_name", "images.picture AS ImageURL")
    # @organization = Image.joins(:organization).where("images.organization_id = ?", @organization.id)
    # @organization = Image.joins(:organization).where(organization: {id: = :image})
    # @organization = Image.joins(:organization).select("organization.id", "organization.name AS org_name", "image.picture AS URL")
    # if @organization == []
    #   @organization = Organization.find(params[:id])
    # end
    # @organization = Organization.joins(:county, :awards).select("organizations.id","organizations.name AS org_name","counties.name AS county_name","award_years.name AS award_year", "awards.name AS award_name","*").where(id: params[:id])
    @organization = Organization.includes(:county, :awards, :images).where(id: params[:id])
    respond_to do |format|
      format.html
      format.json { render json: @organization.to_json( :include => {:county => {:only => [:name]}, :award_years =>{:include => {:award => {:only => [:name, :description]}}, :only => [:name]}, :images => {}}, :except => [:created_at, :updated_at]) }
    end
  end

  # GET /organizations/new
  def new
    @organization = Organization.new
  end

  # GET /organizations/1/edit
  def edit
  end

  # POST /organizations
  # POST /organizations.json
  def create
    @organization = Organization.new(organization_params)
    # @organization.image_id = Image.where(organization_id: @organization)

    respond_to do |format|
      if @organization.save
        format.html { redirect_to @organization, notice: 'Organization was successfully created.' }
        format.json { render :show, status: :created, location: @organization }
      else
        format.html { render :new }
        format.json { render json: @organization.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /organizations/1
  # PATCH/PUT /organizations/1.json
  def update
    respond_to do |format|
      if @organization.update(organization_params)
        format.html { redirect_to @organization, notice: 'Organization was successfully updated.' }
        format.json { render :show, status: :ok, location: @organization }
      else
        format.html { render :edit }
        format.json { render json: @organization.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /organizations/1
  # DELETE /organizations/1.json
  def destroy
    @organization.destroy
    respond_to do |format|
      format.html { redirect_to organizations_url, notice: 'Organization was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_organization
      @organization = Organization.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def organization_params
      params.require(:organization).permit(:name, :description, :video, :website, :phone, :email, :county_id, :image_id [])
    end
end