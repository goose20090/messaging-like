# config/initializers/active_model_serializers.rb
Rails.application.config.to_prepare do
    ActiveModel::Serializer.config.default_scope = :current_user
  end
  