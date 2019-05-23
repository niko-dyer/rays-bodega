class Api::WoodworksController < ApplicationController
  before_action :set_woodwork, only: [:show, :update, :destroy]

  def index
    render json: Woodwork.all
  end

  def show
    render json: @woodwork
  end

  def update
    if @woodwork.update(woodwork_params)
      render json: @woodwork
    else
      render json: @woodwork.errors, status: 422
    end
  end

  def create
    woodwork = Woodwork.new(woodwork_params)

    if woodwork.save
      render json: woodwork
    else
      render json: woodwork.errors, status: 422
    end
  end

  def destroy
    @woodwork.destroy
  end

  private
    def set_woodwork
      @woodwork = Woodwork.find(params[:id])
    end

    def woodwork_params
      params.require(:woodwork).permit(:name, :price, :description, :wood_type, :size)
    end
end
