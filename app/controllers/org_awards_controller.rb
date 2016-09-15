class OrgAwardsController < ApplicationController
  before_action :set_org_award, only: [:show, :edit, :update, :destroy]

  # GET /org_awards
  # GET /org_awards.json
  def index
    @org_awards = OrgAward.all
  end

  # GET /org_awards/1
  # GET /org_awards/1.json
  def show
  end

  # GET /org_awards/new
  def new
    @org_award = OrgAward.new
  end

  # GET /org_awards/1/edit
  def edit
  end

  # POST /org_awards
  # POST /org_awards.json
  def create
    @org_award = OrgAward.new(org_award_params)

    respond_to do |format|
      if @org_award.save
        format.html { redirect_to @org_award, notice: 'Org award was successfully created.' }
        format.json { render :show, status: :created, location: @org_award }
      else
        format.html { render :new }
        format.json { render json: @org_award.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /org_awards/1
  # PATCH/PUT /org_awards/1.json
  def update
    respond_to do |format|
      if @org_award.update(org_award_params)
        format.html { redirect_to @org_award, notice: 'Org award was successfully updated.' }
        format.json { render :show, status: :ok, location: @org_award }
      else
        format.html { render :edit }
        format.json { render json: @org_award.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /org_awards/1
  # DELETE /org_awards/1.json
  def destroy
    @org_award.destroy
    respond_to do |format|
      format.html { redirect_to org_awards_url, notice: 'Org award was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_org_award
      @org_award = OrgAward.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def org_award_params
      params.require(:org_award).permit(:organization_id, :award_id)
    end
end
