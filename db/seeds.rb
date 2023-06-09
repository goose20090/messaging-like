# Clear all existing data
User.destroy_all
Conversation.destroy_all
Message.destroy_all

# Create 10 users
5.times do
  User.create(
    username: Faker::Internet.unique.username,
    password: 'abc'
  )
end

# Create 5 conversations and associate them with random users
5.times do |i|
  conversation = Conversation.new(
    title: Faker::Lorem.words(number: 3).join(' ')
  )

  # Add 2 random users to each conversation
  users = User.order(Arel.sql('RANDOM()')).limit(2)

  # Create 3 messages for each conversation
  3.times do
    message = Message.new(
      content: Faker::Lorem.sentence(word_count: 5),
      read: false,
      deleted: false,
      initialiser: false,
    )
    message.user = users.sample
    message.conversation = conversation
    message.save!
  end
  conversation.save!
end