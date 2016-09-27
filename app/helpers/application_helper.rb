module ApplicationHelper

	def devise_error_messages!
		return '' if resource.errors.empty?

		messages = resource.errors.full_messages.map {
			|msg| content_tage(:li, msg) }.join
		html = <<-HTML 
		<div class="alert alert-error alert-danger">
		<a href="#" class="close" data-dismiss="alert" aria-label="close" >&#215;</a>
		<%= content_tag :div, msg if msg.is_a?(String) %>	
		</div>
		HTML
			html.html_safe
	end

	# def resource_name
	# 	:user
	# end

	# def resource
	# 	@resource ||= User.new
	# end
	
	# def devise_mapping
	# 	@devise_mapping ||= Devise.mappings[:user]
	# end

end
