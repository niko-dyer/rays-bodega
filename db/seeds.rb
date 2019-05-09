5.times do
    Woodwork.create(
        name: Faker::Cannabis.cannabinoid,
        price: Faker::Commerce.price,
        description: Faker::Hipster.paragraph,
        wood_type: Faker::Gender.type,
        size: Faker::Coffee.blend_name
    )
    Shoe.create(
        name: Faker::Beer.name,
        size: Faker::Beer.alcohol,
        price: Faker::Commerce.price,
        description: Faker::ChuckNorris.fact,
        material: Faker::Construction.material
    )
    Clothing.create(
        name: Faker::Name.name,
        size: Faker::Superhero.power,
        price: Faker::Commerce.price,
        description: Faker::TvShows::RickAndMorty.quote,
        material: Faker::Creature::Dog.breed
    )
end

puts 'data seeded'