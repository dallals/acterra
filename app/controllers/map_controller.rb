class MapController < ApplicationController
  def index
  	@map = JSON.parse(File.read('app/assets/javascripts/bayarea.geojson'))

  	render json: @map
  end
end
