require 'test_helper'

class Api::ClothesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_clothes_index_url
    assert_response :success
  end

  test "should get show" do
    get api_clothes_show_url
    assert_response :success
  end

end
