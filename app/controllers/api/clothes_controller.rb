class Api::ClothesController < ApplicationController
  before_action :set_cloth, only: [:show]

  def index
    render json: Cloth.all
  end

  def show
    render json: @cloth
  end

  private
    def set_cloth
      @cloth = Cloth.find(params[:id])
    end
end
