require 'test_helper'

class OrgAwardsControllerTest < ActionController::TestCase
  setup do
    @org_award = org_awards(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:org_awards)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create org_award" do
    assert_difference('OrgAward.count') do
      post :create, org_award: { award_id: @org_award.award_id, organization_id: @org_award.organization_id }
    end

    assert_redirected_to org_award_path(assigns(:org_award))
  end

  test "should show org_award" do
    get :show, id: @org_award
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @org_award
    assert_response :success
  end

  test "should update org_award" do
    patch :update, id: @org_award, org_award: { award_id: @org_award.award_id, organization_id: @org_award.organization_id }
    assert_redirected_to org_award_path(assigns(:org_award))
  end

  test "should destroy org_award" do
    assert_difference('OrgAward.count', -1) do
      delete :destroy, id: @org_award
    end

    assert_redirected_to org_awards_path
  end
end
