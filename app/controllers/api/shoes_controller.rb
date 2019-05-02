class Api::ShoesController < ApplicationController
  before_action :set_shoe, only: [:show]

  def index
    render json: Shoe.all
  end

  def show
    render json: @shoe
  end

  private
    def set_shoe
      @shoe = Shoe.find(params[:id])
    end
end
