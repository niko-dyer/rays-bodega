class Api::ClothingsController < ApplicationController
  before_action :set_clothing, only: [:show]

  def index
    render json: Clothing.all
  end

  def show
    render json: @clothing
  end

  private
    def set_clothing
      @clothing = Clothing.find(params[:id])
    end
end
