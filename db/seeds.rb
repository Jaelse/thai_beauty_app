# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

category = ['spa and massage', 'nails', 'hair removal','barbershop']

for i in 0..1000
    lat =  rand(6000..9000) * 0.0001
    lat = lat + 13.000001
    lat = lat.round(6)
    
    lng =  rand(3000..7000) * 0.0001
    lng = lng + 100.000001
    lng = lng.round(6)

    rand_name_suffix = rand(100..500).to_s
    name = 'Randon Beauty Shop ' + rand_name_suffix
    
    Shop.create(name: name, latitude: lat, longitude:lng, category: category.sample)
end
