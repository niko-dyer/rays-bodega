class Api::ShoesController < ApplicationController
  before_action :set_shoe, only: [:show, :update, :destroy]

  def index
    render json: Shoe.all
  end

  def show
    render json: @shoe
  end

  def update
    if @shoe.update(shoe_params)
      render json: @shoe
    else
      render json: @shoe.errors, status: 422
    end
  end

  def create
    shoe = Shoe.new(shoe_params)

    if shoe.save 
      render json: shoe
    else 
      render json: shoe.errors, status: 422
    end
  end

  def destroy
    @shoe.destroy
  end

  private
    def set_shoe
      @shoe = Shoe.find(params[:id])
    end

    def shoe_params
      params.require(:shoe).permit(:name, :price, :size, :description, :material)
    end
end
