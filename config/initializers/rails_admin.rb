RailsAdmin.config do |config|

  ### Popular gems integration

  ## == Devise ==
  # config.authenticate_with do
  #   warden.authenticate! scope: :user
  # end
  # config.current_user_method(&:current_user)

  ## == Cancan ==
  # config.authorize_with :cancan

  ## == Pundit ==
  # config.authorize_with :pundit

  ## == PaperTrail ==
  # config.audit_with :paper_trail, 'User', 'PaperTrail::Version' # PaperTrail >= 3.0.0

  ### More at https://github.com/sferik/rails_admin/wiki/Base-configuration

    config.model 'Organization' do
      configure :awards do
        hide
        # for list view
        filterable false
        searchable false
      end
      configure :award_years do
        hide
        # for list view
        filterable false
        searchable false
      end
    end

  
  config.main_app_name = ["Acterra Database"]
  # or something more dynamic
  config.main_app_name = Proc.new { |controller| [ "Acterra App", " #{controller.params[:action].try(:titleize)}" ] }
  

  config.authorize_with do
    redirect_to main_app.root_path unless current_user.admin?
  end

  Kaminari.configure do |config|
    config.page_method_name = :per_page_kaminari
  end

  config.actions do
    dashboard                     # mandatory
    index                         # mandatory
    new
    export
    bulk_delete
    show
    edit
    delete
    show_in_app

    ## With an audit adapter, you can add:
    # history_index
    # history_show
  end
end
