# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.delete_all
User.create(email: "GuestUser@guest.com", first_name: "Guest", last_name: "User",  password: "password")
User.create(email: "User@guest.com", first_name: "Me", last_name: "Who?", password: "faster")