class Api::WoodworksController < ApplicationController
  before_action :set_woodwork, only: [:show]

  def index
    render json: Woodwork.all
  end

  def show
    render json: @woodwork
  end

  private
    def set_woodwork
      @woodwork = Woodwork.find(params[:id])
    end
end
