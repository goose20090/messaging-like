# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
5.times do
    User.create!(
      username: Faker::Internet.username,
      password: Faker::Internet.password,
      avatar_url: Faker::Avatar.image
    )
  end
  
  # create 2 conversations
  2.times do
    Conversation.create!
  end
  
  # create messages for each conversation
  Conversation.all.each do |conversation|
    # create 10 messages for each conversation
    10.times do
      Message.create!(
        content: Faker::Lorem.sentence,
        user_id: User.all.sample.id,
        conversation_id: conversation.id
      )
    end
  end