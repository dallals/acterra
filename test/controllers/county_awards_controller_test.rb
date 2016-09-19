require 'test_helper'

class CountyAwardsControllerTest < ActionController::TestCase
  setup do
    @county_award = county_awards(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:county_awards)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create county_award" do
    assert_difference('CountyAward.count') do
      post :create, county_award: { award_id: @county_award.award_id, county_id: @county_award.county_id }
    end

    assert_redirected_to county_award_path(assigns(:county_award))
  end

  test "should show county_award" do
    get :show, id: @county_award
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @county_award
    assert_response :success
  end

  test "should update county_award" do
    patch :update, id: @county_award, county_award: { award_id: @county_award.award_id, county_id: @county_award.county_id }
    assert_redirected_to county_award_path(assigns(:county_award))
  end

  test "should destroy county_award" do
    assert_difference('CountyAward.count', -1) do
      delete :destroy, id: @county_award
    end

    assert_redirected_to county_awards_path
  end
end
