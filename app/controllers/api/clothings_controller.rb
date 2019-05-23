class Api::ClothingsController < ApplicationController
  before_action :set_clothing, only: [:show, :update, :destroy]

  def index
    render json: Clothing.all
  end

  def show
    render json: @clothing
  end

  def update
    if @clothing.update(clothing_params)
      render json: @clothing
    else
      render json: @clothing.errors, status: 422
    end
  end

  def create
    clothing = Clothing.new(clothing_params)

    if clothing.save
      render json: clothing
    else
      render json: clothing.errors, status: 422
    end
  end

  def destroy
    @clothing.destroy
  end

  private
    def set_clothing
      @clothing = Clothing.find(params[:id])
    end

    def clothing_params
      params.require(:clothing).permit(:name, :price, :description, :material, :size)
    end
end
