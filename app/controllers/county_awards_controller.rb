class CountyAwardsController < ApplicationController
  before_action :set_county_award, only: [:show, :edit, :update, :destroy]

  # GET /county_awards
  # GET /county_awards.json
  def index
    @county_awards = CountyAward.all
  end

  # GET /county_awards/1
  # GET /county_awards/1.json
  def show
  end

  # GET /county_awards/new
  def new
    @county_award = CountyAward.new
  end

  # GET /county_awards/1/edit
  def edit
  end

  # POST /county_awards
  # POST /county_awards.json
  def create
    @county_award = CountyAward.new(county_award_params)

    respond_to do |format|
      if @county_award.save
        format.html { redirect_to @county_award, notice: 'County award was successfully created.' }
        format.json { render :show, status: :created, location: @county_award }
      else
        format.html { render :new }
        format.json { render json: @county_award.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /county_awards/1
  # PATCH/PUT /county_awards/1.json
  def update
    respond_to do |format|
      if @county_award.update(county_award_params)
        format.html { redirect_to @county_award, notice: 'County award was successfully updated.' }
        format.json { render :show, status: :ok, location: @county_award }
      else
        format.html { render :edit }
        format.json { render json: @county_award.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /county_awards/1
  # DELETE /county_awards/1.json
  def destroy
    @county_award.destroy
    respond_to do |format|
      format.html { redirect_to county_awards_url, notice: 'County award was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_county_award
      @county_award = CountyAward.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def county_award_params
      params.require(:county_award).permit(:county_id, :award_id)
    end
end
