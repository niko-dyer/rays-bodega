require 'test_helper'

class Api::ShoesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_shoes_index_url
    assert_response :success
  end

  test "should get show" do
    get api_shoes_show_url
    assert_response :success
  end

end
