# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  bio             :string
#  birthday        :date
#  birthplace      :string
#  email           :string           not null
#  first_name      :string           not null
#  gender          :string
#  last_name       :string           not null
#  location        :string
#  password_digest :string           not null
#  pronouns        :string
#  school          :string
#  session_token   :string           not null
#  work            :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
# Indexes
#
#  index_users_on_email          (email) UNIQUE
#  index_users_on_first_name     (first_name)
#  index_users_on_last_name      (last_name)
#  index_users_on_session_token  (session_token) UNIQUE
#
class User < ApplicationRecord
        
  attr_reader :password

  validates :first_name, :last_name, :email, :password_digest, :session_token, presence: true
  validates :email, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  after_initialize :ensure_session_token

    has_many :friends

    has_many :replies

    has_many :likes

    has_many :posts,
    foreign_key: :poster_id,
    class_name: :Post

    has_many :sent_friend_requests,
    foreign_key: :user_id,
    class_name: :FriendRequest

    has_many :received_friend_requests,
    foreign_key: :requested_id,
    class_name: :FriendRequest

    has_many :friends_they_added,
    through: :friends,
    source: :friendship
    
    has_many :added_friendships,
    primary_key: :id,
    foreign_key: :friend_id,
    class_name: :Friend

    has_many :friends_who_added_them,
    through: :added_friendships,
    source: :user


    has_many :friends_posts,
    through: :friends,
    source: :posts_of_friends


    has_one_attached :avatar

    has_one_attached :background

    has_many_attached :images
    
    has_one :news_feed


  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    generate_unique_session_token
    save!
    self.session_token
  end

  private

  def ensure_session_token
    generate_unique_session_token unless self.session_token
  end

  def new_session_token
    SecureRandom.urlsafe_base64
  end

  def generate_unique_session_token
    self.session_token = new_session_token
    while User.find_by(session_token: self.session_token)
      self.session_token = new_session_token
    end
    self.session_token
  end
end
