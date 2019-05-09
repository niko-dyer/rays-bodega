require 'test_helper'

class Api::ClothingsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_clothings_index_url
    assert_response :success
  end

  test "should get show" do
    get api_clothings_show_url
    assert_response :success
  end

end
