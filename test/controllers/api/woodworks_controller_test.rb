require 'test_helper'

class Api::WoodworksControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_woodworks_index_url
    assert_response :success
  end

  test "should get show" do
    get api_woodworks_show_url
    assert_response :success
  end

end
