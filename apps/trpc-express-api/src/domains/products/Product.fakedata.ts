import { ProductEntity } from "./Product.entity";

// Helper function to generate random prices between min and max
const randomPrice = (min: number, max: number): number => {
  return Number((Math.random() * (max - min) + min).toFixed(2));
};

// Generate 100 pet store products
export const fakeProducts: ProductEntity[] = [
  // Food & Treats (25 products)
  new ProductEntity({
    id: 1,
    name: "Premium Puppy Kibble",
    description:
      "Nutrient-rich dry food for growing puppies. Made with real chicken and brown rice.",
    price: randomPrice(29.99, 49.99),
    imageUrl: "https://example.com/puppy-kibble.jpg",
  }),
  new ProductEntity({
    id: 2,
    name: "Gourmet Cat Treats",
    description:
      "Crunchy salmon-flavored treats that'll have your cat purring for more!",
    price: randomPrice(4.99, 8.99),
    imageUrl: "https://example.com/cat-treats.jpg",
  }),
  new ProductEntity({
    id: 3,
    name: "Senior Cat Formula",
    description:
      "Specially formulated dry food for cats 7+ years. Rich in omega-3 and glucosamine.",
    price: randomPrice(24.99, 39.99),
    imageUrl: "https://example.com/senior-cat-food.jpg",
  }),
  new ProductEntity({
    id: 4,
    name: "Dental Chew Sticks",
    description:
      "Mint-flavored dental treats that help reduce tartar and freshen breath.",
    price: randomPrice(8.99, 15.99),
    imageUrl: "https://example.com/dental-chews.jpg",
  }),
  new ProductEntity({
    id: 5,
    name: "Grain-Free Duck Bites",
    description: "Premium grain-free training treats made with real duck meat.",
    price: randomPrice(7.99, 12.99),
    imageUrl: "https://example.com/duck-bites.jpg",
  }),
  // Continue Food & Treats section (6-25)
  new ProductEntity({
    id: 6,
    name: "Large Breed Adult Dog Food",
    description:
      "Complete nutrition for large breed dogs with joint support formula.",
    price: randomPrice(34.99, 54.99),
    imageUrl: "https://example.com/large-breed-food.jpg",
  }),
  new ProductEntity({
    id: 7,
    name: "Fish Flakes Supreme",
    description: "Color-enhancing tropical fish flakes with probiotics.",
    price: randomPrice(5.99, 12.99),
    imageUrl: "https://example.com/fish-flakes.jpg",
  }),
  new ProductEntity({
    id: 8,
    name: "Small Animal Food Mix",
    description:
      "Premium blend for hamsters, gerbils, and mice with added vitamins.",
    price: randomPrice(8.99, 15.99),
    imageUrl: "https://example.com/small-animal-food.jpg",
  }),
  new ProductEntity({
    id: 9,
    name: "Rabbit Food Pellets",
    description: "Timothy hay-based pellets with garden vegetables.",
    price: randomPrice(14.99, 24.99),
    imageUrl: "https://example.com/rabbit-food.jpg",
  }),
  new ProductEntity({
    id: 10,
    name: "Bird Seed Mix",
    description:
      "Gourmet blend of seeds and dried fruits for parakeets and finches.",
    price: randomPrice(9.99, 19.99),
    imageUrl: "https://example.com/bird-seed.jpg",
  }),
  new ProductEntity({
    id: 11,
    name: "Weight Management Dog Food",
    description:
      "Low-calorie formula with high protein to help maintain healthy weight.",
    price: randomPrice(32.99, 48.99),
    imageUrl: "https://example.com/diet-dog-food.jpg",
  }),
  new ProductEntity({
    id: 12,
    name: "Freeze-Dried Chicken Treats",
    description:
      "100% pure chicken breast chunks, perfect for training rewards.",
    price: randomPrice(14.99, 22.99),
    imageUrl: "https://example.com/chicken-treats.jpg",
  }),
  new ProductEntity({
    id: 13,
    name: "Premium Reptile Pellets",
    description: "Complete nutrition for bearded dragons and other reptiles.",
    price: randomPrice(11.99, 19.99),
    imageUrl: "https://example.com/reptile-food.jpg",
  }),
  new ProductEntity({
    id: 14,
    name: "Sensitive Stomach Cat Food",
    description:
      "Easy-to-digest formula with prebiotics for cats with delicate digestion.",
    price: randomPrice(28.99, 42.99),
    imageUrl: "https://example.com/sensitive-cat-food.jpg",
  }),
  new ProductEntity({
    id: 15,
    name: "Organic Guinea Pig Food",
    description: "Natural blend with timothy hay and garden vegetables.",
    price: randomPrice(12.99, 18.99),
    imageUrl: "https://example.com/guinea-pig-food.jpg",
  }),
  new ProductEntity({
    id: 16,
    name: "Puppy Training Treats",
    description:
      "Small, soft treats perfect for training sessions. Low calorie.",
    price: randomPrice(7.99, 13.99),
    imageUrl: "https://example.com/puppy-treats.jpg",
  }),
  new ProductEntity({
    id: 17,
    name: "Premium Koi Fish Food",
    description: "Floating pellets with color enhancers for vibrant koi.",
    price: randomPrice(19.99, 34.99),
    imageUrl: "https://example.com/koi-food.jpg",
  }),
  new ProductEntity({
    id: 18,
    name: "Joint Health Supplement Chews",
    description:
      "Glucosamine and chondroitin supplements in tasty chewable form.",
    price: randomPrice(24.99, 39.99),
    imageUrl: "https://example.com/joint-supplements.jpg",
  }),
  new ProductEntity({
    id: 19,
    name: "Gourmet Hamster Mix",
    description: "Premium seed blend with dried fruits and vegetables.",
    price: randomPrice(8.99, 14.99),
    imageUrl: "https://example.com/hamster-mix.jpg",
  }),
  new ProductEntity({
    id: 20,
    name: "Calming Aid Treats",
    description: "Natural calming treats with chamomile and L-tryptophan.",
    price: randomPrice(16.99, 25.99),
    imageUrl: "https://example.com/calming-treats.jpg",
  }),
  new ProductEntity({
    id: 21,
    name: "Indoor Cat Formula",
    description: "Specialized nutrition for indoor cats with hairball control.",
    price: randomPrice(26.99, 38.99),
    imageUrl: "https://example.com/indoor-cat-food.jpg",
  }),
  new ProductEntity({
    id: 22,
    name: "Exotic Bird Seed Supreme",
    description:
      "Premium blend for parrots and macaws with nuts and dried fruit.",
    price: randomPrice(22.99, 36.99),
    imageUrl: "https://example.com/parrot-food.jpg",
  }),
  new ProductEntity({
    id: 23,
    name: "Urinary Health Cat Treats",
    description: "Specialized treats supporting urinary tract health in cats.",
    price: randomPrice(11.99, 17.99),
    imageUrl: "https://example.com/urinary-treats.jpg",
  }),
  new ProductEntity({
    id: 24,
    name: "Fresh Breath Dental Treats",
    description:
      "Triple-action dental treats that clean teeth and freshen breath.",
    price: randomPrice(13.99, 19.99),
    imageUrl: "https://example.com/dental-treats.jpg",
  }),
  new ProductEntity({
    id: 25,
    name: "Protein Boost Dog Food Topper",
    description: "Freeze-dried raw meat topper to enhance your dog's meal.",
    price: randomPrice(18.99, 27.99),
    imageUrl: "https://example.com/food-topper.jpg",
  }),

  // Toys section (26-50)
  new ProductEntity({
    id: 26,
    name: "Indestructible Squeaky Bone",
    description:
      "Heavy-duty rubber bone that can withstand even the most enthusiastic chewers.",
    price: randomPrice(12.99, 19.99),
    imageUrl: "https://example.com/squeaky-bone.jpg",
  }),
  new ProductEntity({
    id: 27,
    name: "Catnip Mouse Bundle",
    description:
      "Pack of 3 plush mice filled with premium catnip. Hours of entertainment guaranteed!",
    price: randomPrice(6.99, 11.99),
    imageUrl: "https://example.com/catnip-mouse.jpg",
  }),
  new ProductEntity({
    id: 28,
    name: "Interactive Puzzle Feeder",
    description:
      "Mental stimulation toy that dispenses treats as your pet solves the puzzle.",
    price: randomPrice(15.99, 24.99),
    imageUrl: "https://example.com/puzzle-feeder.jpg",
  }),
  new ProductEntity({
    id: 29,
    name: "Laser Pointer Toy",
    description:
      "USB rechargeable laser pointer with random movement patterns for cats.",
    price: randomPrice(12.99, 19.99),
    imageUrl: "https://example.com/laser-toy.jpg",
  }),
  new ProductEntity({
    id: 30,
    name: "Rope Tug Bundle",
    description:
      "Set of 3 durable rope toys in various sizes for interactive play.",
    price: randomPrice(16.99, 24.99),
    imageUrl: "https://example.com/rope-toys.jpg",
  }),
  new ProductEntity({
    id: 31,
    name: "Bird Activity Center",
    description: "Multi-level play gym with bells, mirrors, and perches.",
    price: randomPrice(24.99, 39.99),
    imageUrl: "https://example.com/bird-gym.jpg",
  }),
  new ProductEntity({
    id: 32,
    name: "Hamster Exercise Ball",
    description:
      "Safe exploration ball with ventilation slots and secure closure.",
    price: randomPrice(7.99, 12.99),
    imageUrl: "https://example.com/hamster-ball.jpg",
  }),
  new ProductEntity({
    id: 33,
    name: "Cat Scratching Tower",
    description:
      "Three-tier scratching post with sisal rope and dangling toys.",
    price: randomPrice(39.99, 69.99),
    imageUrl: "https://example.com/cat-tower.jpg",
  }),
  new ProductEntity({
    id: 34,
    name: "Floating Pool Toys",
    description: "Water-safe dog toys perfect for pool or beach play.",
    price: randomPrice(9.99, 16.99),
    imageUrl: "https://example.com/pool-toys.jpg",
  }),
  new ProductEntity({
    id: 35,
    name: "Treat Dispensing Ball",
    description:
      "Adjustable difficulty level treat-dispensing toy for mental stimulation.",
    price: randomPrice(11.99, 18.99),
    imageUrl: "https://example.com/treat-ball.jpg",
  }),
  new ProductEntity({
    id: 36,
    name: "Crinkle Cat Tunnel",
    description: "Collapsible tunnel with crinkle material and peek holes.",
    price: randomPrice(14.99, 24.99),
    imageUrl: "https://example.com/cat-tunnel.jpg",
  }),
  new ProductEntity({
    id: 37,
    name: "Plush Squeaky Duck",
    description:
      "Soft plush duck with multiple squeakers and reinforced seams.",
    price: randomPrice(8.99, 15.99),
    imageUrl: "https://example.com/duck-toy.jpg",
  }),
  new ProductEntity({
    id: 38,
    name: "Interactive Fish Tank Toy",
    description: "Battery-operated swimming fish toy for cats.",
    price: randomPrice(19.99, 29.99),
    imageUrl: "https://example.com/fish-toy.jpg",
  }),
  new ProductEntity({
    id: 39,
    name: "Dental Chew Rope",
    description: "Rope toy with dental cleaning nodules for oral health.",
    price: randomPrice(10.99, 17.99),
    imageUrl: "https://example.com/dental-rope.jpg",
  }),
  new ProductEntity({
    id: 40,
    name: "Small Animal Playground",
    description: "Wooden climbing structure for hamsters and gerbils.",
    price: randomPrice(22.99, 34.99),
    imageUrl: "https://example.com/small-playground.jpg",
  }),
  new ProductEntity({
    id: 41,
    name: "Fetch Ball Set",
    description: "Set of 6 tennis balls designed for dog play and training.",
    price: randomPrice(8.99, 14.99),
    imageUrl: "https://example.com/fetch-balls.jpg",
  }),
  new ProductEntity({
    id: 42,
    name: "Bird Swing Set",
    description: "Natural wood swing with bells and colorful beads.",
    price: randomPrice(11.99, 19.99),
    imageUrl: "https://example.com/bird-swing.jpg",
  }),
  new ProductEntity({
    id: 43,
    name: "Hide and Seek Plush Set",
    description:
      "Plush tree trunk with 3 squeaky squirrels for interactive play.",
    price: randomPrice(15.99, 24.99),
    imageUrl: "https://example.com/hide-seek.jpg",
  }),
  new ProductEntity({
    id: 44,
    name: "Rabbit Chew Toys Bundle",
    description: "Assorted natural wood chew toys for dental health.",
    price: randomPrice(12.99, 21.99),
    imageUrl: "https://example.com/rabbit-chews.jpg",
  }),
  new ProductEntity({
    id: 45,
    name: "Cat Wand Teaser",
    description:
      "Retractable wand with interchangeable feather and string attachments.",
    price: randomPrice(9.99, 16.99),
    imageUrl: "https://example.com/cat-wand.jpg",
  }),
  new ProductEntity({
    id: 46,
    name: "Tough Chewer Kong",
    description: "Extra-durable rubber toy for aggressive chewers.",
    price: randomPrice(13.99, 22.99),
    imageUrl: "https://example.com/kong-toy.jpg",
  }),
  new ProductEntity({
    id: 47,
    name: "Puzzle Treat Slider",
    description: "Advanced puzzle toy with sliding compartments for treats.",
    price: randomPrice(17.99, 27.99),
    imageUrl: "https://example.com/puzzle-slider.jpg",
  }),
  new ProductEntity({
    id: 48,
    name: "Ferret Play Tubes",
    description: "Connectable tube system for ferret exploration and play.",
    price: randomPrice(24.99, 39.99),
    imageUrl: "https://example.com/ferret-tubes.jpg",
  }),
  new ProductEntity({
    id: 49,
    name: "Automatic Laser Play System",
    description: "Motion-activated laser toy with random patterns.",
    price: randomPrice(29.99, 44.99),
    imageUrl: "https://example.com/auto-laser.jpg",
  }),
  new ProductEntity({
    id: 50,
    name: "Puppy Teething Set",
    description:
      "Variety pack of puppy-safe teething toys with different textures.",
    price: randomPrice(16.99, 25.99),
    imageUrl: "https://example.com/teething-set.jpg",
  }),

  // Accessories section (51-75)
  new ProductEntity({
    id: 51,
    name: "Deluxe Pet Carrier",
    description:
      "Airline-approved carrier with comfortable padding and excellent ventilation.",
    price: randomPrice(39.99, 79.99),
    imageUrl: "https://example.com/pet-carrier.jpg",
  }),
  new ProductEntity({
    id: 52,
    name: "Reflective Dog Collar",
    description:
      "Safety first! Adjustable collar with reflective strips for nighttime walks.",
    price: randomPrice(14.99, 24.99),
    imageUrl: "https://example.com/dog-collar.jpg",
  }),
  new ProductEntity({
    id: 53,
    name: "Heated Pet Bed",
    description:
      "Thermostat-controlled heated bed perfect for older pets or cold nights.",
    price: randomPrice(45.99, 89.99),
    imageUrl: "https://example.com/heated-bed.jpg",
  }),
  new ProductEntity({
    id: 54,
    name: "Automatic Water Fountain",
    description:
      "3L filtered water fountain that encourages pets to stay hydrated.",
    price: randomPrice(29.99, 49.99),
    imageUrl: "https://example.com/pet-fountain.jpg",
  }),
  new ProductEntity({
    id: 55,
    name: "GPS Smart Collar",
    description:
      "Track your pet's location and activity levels with this smart device.",
    price: randomPrice(79.99, 129.99),
    imageUrl: "https://example.com/smart-collar.jpg",
  }),
  new ProductEntity({
    id: 56,
    name: "Travel Water Bowl",
    description: "Collapsible silicone bowl perfect for walks and trips.",
    price: randomPrice(8.99, 14.99),
    imageUrl: "https://example.com/travel-bowl.jpg",
  }),
  new ProductEntity({
    id: 57,
    name: "Pet First Aid Kit",
    description: "Comprehensive emergency kit with pet-specific supplies.",
    price: randomPrice(29.99, 44.99),
    imageUrl: "https://example.com/first-aid.jpg",
  }),
  new ProductEntity({
    id: 58,
    name: "Aquarium Decor Set",
    description: "Natural-looking rocks and plants for aquarium landscaping.",
    price: randomPrice(19.99, 34.99),
    imageUrl: "https://example.com/aquarium-decor.jpg",
  }),
  new ProductEntity({
    id: 59,
    name: "Premium Dog Harness",
    description:
      "No-pull harness with padded chest plate and multiple attachment points.",
    price: randomPrice(24.99, 39.99),
    imageUrl: "https://example.com/dog-harness.jpg",
  }),
  new ProductEntity({
    id: 60,
    name: "Cat Litter Box System",
    description: "Top-entry litter box with tracking pad and odor control.",
    price: randomPrice(34.99, 54.99),
    imageUrl: "https://example.com/litter-box.jpg",
  }),
  new ProductEntity({
    id: 61,
    name: "Bird Cage Cover",
    description: "Breathable fabric cover with adjustable viewing window.",
    price: randomPrice(19.99, 29.99),
    imageUrl: "https://example.com/cage-cover.jpg",
  }),
  new ProductEntity({
    id: 62,
    name: "Reptile Heat Lamp Kit",
    description: "Complete heating system with thermostat and ceramic bulb.",
    price: randomPrice(44.99, 69.99),
    imageUrl: "https://example.com/heat-lamp.jpg",
  }),
  new ProductEntity({
    id: 63,
    name: "Small Pet Exercise Pen",
    description:
      "Configurable playpen for rabbits, guinea pigs, and other small pets.",
    price: randomPrice(32.99, 54.99),
    imageUrl: "https://example.com/exercise-pen.jpg",
  }),
  new ProductEntity({
    id: 64,
    name: "Aquarium Filter System",
    description: "3-stage filtration system for crystal clear water.",
    price: randomPrice(39.99, 69.99),
    imageUrl: "https://example.com/aquarium-filter.jpg",
  }),
  new ProductEntity({
    id: 65,
    name: "Pet Stroller",
    description:
      "All-terrain pet stroller with weather cover and storage basket.",
    price: randomPrice(89.99, 149.99),
    imageUrl: "https://example.com/pet-stroller.jpg",
  }),
  new ProductEntity({
    id: 66,
    name: "Dog Backpack",
    description: "Adjustable saddlebag-style backpack for hiking and camping.",
    price: randomPrice(29.99, 49.99),
    imageUrl: "https://example.com/dog-backpack.jpg",
  }),
  new ProductEntity({
    id: 67,
    name: "Cat Window Perch",
    description: "Sturdy window-mounted bed with suction cup support.",
    price: randomPrice(24.99, 39.99),
    imageUrl: "https://example.com/window-perch.jpg",
  }),
  new ProductEntity({
    id: 68,
    name: "Hamster House",
    description: "Multi-chamber wooden house with removable roof.",
    price: randomPrice(14.99, 24.99),
    imageUrl: "https://example.com/hamster-house.jpg",
  }),
  new ProductEntity({
    id: 69,
    name: "Dog Life Jacket",
    description: "Buoyant safety vest with rescue handle and reflective trim.",
    price: randomPrice(29.99, 44.99),
    imageUrl: "https://example.com/life-jacket.jpg",
  }),
  new ProductEntity({
    id: 70,
    name: "Pet Gate",
    description: "Pressure-mounted gate with small pet door.",
    price: randomPrice(39.99, 69.99),
    imageUrl: "https://example.com/pet-gate.jpg",
  }),
  new ProductEntity({
    id: 71,
    name: "Bird Travel Cage",
    description: "Compact cage with secure perches and feeding cups.",
    price: randomPrice(34.99, 54.99),
    imageUrl: "https://example.com/travel-cage.jpg",
  }),
  new ProductEntity({
    id: 72,
    name: "Reptile Thermometer",
    description: "Digital thermometer/hygrometer with remote sensor.",
    price: randomPrice(12.99, 24.99),
    imageUrl: "https://example.com/thermometer.jpg",
  }),
  new ProductEntity({
    id: 73,
    name: "Pet Feeding Station",
    description: "Elevated double bowl stand with splash guard.",
    price: randomPrice(29.99, 49.99),
    imageUrl: "https://example.com/feeding-station.jpg",
  }),
  new ProductEntity({
    id: 74,
    name: "Cat ID Tag Silencer",
    description: "Rubber tag silencer with glow-in-the-dark feature.",
    price: randomPrice(4.99, 9.99),
    imageUrl: "https://example.com/tag-silencer.jpg",
  }),
  new ProductEntity({
    id: 75,
    name: "Small Animal Water Bottle",
    description: "Leak-proof bottle with metal ball bearing tip.",
    price: randomPrice(8.99, 15.99),
    imageUrl: "https://example.com/water-bottle.jpg",
  }),

  // Grooming & Care section (76-100)
  new ProductEntity({
    id: 76,
    name: "Professional Pet Grooming Kit",
    description:
      "Complete set of grooming tools including clippers, brushes, and nail trimmers.",
    price: randomPrice(49.99, 89.99),
    imageUrl: "https://example.com/grooming-kit.jpg",
  }),
  new ProductEntity({
    id: 77,
    name: "Gentle Pet Shampoo",
    description:
      "Tearless formula with natural ingredients for sensitive skin.",
    price: randomPrice(9.99, 16.99),
    imageUrl: "https://example.com/pet-shampoo.jpg",
  }),
  new ProductEntity({
    id: 78,
    name: "Self-Cleaning Litter Box",
    description:
      "Automatic scooping litter box with odor-control carbon filters.",
    price: randomPrice(129.99, 199.99),
    imageUrl: "https://example.com/auto-litterbox.jpg",
  }),
  new ProductEntity({
    id: 79,
    name: "Paw Balm",
    description:
      "All-natural balm to protect and heal rough or cracked paw pads.",
    price: randomPrice(9.99, 14.99),
    imageUrl: "https://example.com/paw-balm.jpg",
  }),
  new ProductEntity({
    id: 80,
    name: "Deshedding Tool",
    description: "Professional-grade brush that reduces shedding by up to 90%.",
    price: randomPrice(24.99, 34.99),
    imageUrl: "https://example.com/deshedding-tool.jpg",
  }),
  new ProductEntity({
    id: 81,
    name: "Pet Tooth Brushing Kit",
    description: "Complete dental care set with enzymatic toothpaste.",
    price: randomPrice(12.99, 19.99),
    imageUrl: "https://example.com/tooth-kit.jpg",
  }),
  new ProductEntity({
    id: 82,
    name: "Ear Cleaning Solution",
    description: "Gentle formula to prevent ear infections and remove wax.",
    price: randomPrice(9.99, 15.99),
    imageUrl: "https://example.com/ear-cleaner.jpg",
  }),
  new ProductEntity({
    id: 83,
    name: "Professional Nail Grinder",
    description: "Quiet electric nail trimmer with safety guard and LED light.",
    price: randomPrice(24.99, 39.99),
    imageUrl: "https://example.com/nail-grinder.jpg",
  }),
  new ProductEntity({
    id: 84,
    name: "Flea and Tick Spray",
    description: "Natural pest control spray safe for all pets.",
    price: randomPrice(14.99, 24.99),
    imageUrl: "https://example.com/flea-spray.jpg",
  }),
  new ProductEntity({
    id: 85,
    name: "Pet Wipes",
    description: "Hypoallergenic grooming wipes for quick clean-ups.",
    price: randomPrice(7.99, 12.99),
    imageUrl: "https://example.com/pet-wipes.jpg",
  }),
  new ProductEntity({
    id: 86,
    name: "Coat Detangling Spray",
    description: "Leave-in conditioner that prevents matting and tangles.",
    price: randomPrice(11.99, 18.99),
    imageUrl: "https://example.com/detangler.jpg",
  }),
  new ProductEntity({
    id: 87,
    name: "Pet Hair Vacuum Attachment",
    description: "Specialized vacuum tool for pet hair removal.",
    price: randomPrice(19.99, 29.99),
    imageUrl: "https://example.com/vacuum-tool.jpg",
  }),
  new ProductEntity({
    id: 88,
    name: "Grooming Table",
    description: "Portable grooming table with adjustable arm and noose.",
    price: randomPrice(89.99, 149.99),
    imageUrl: "https://example.com/grooming-table.jpg",
  }),
  new ProductEntity({
    id: 89,
    name: "Pet Cologne",
    description: "Long-lasting fresh scent specially formulated for pets.",
    price: randomPrice(8.99, 14.99),
    imageUrl: "https://example.com/pet-cologne.jpg",
  }),
  new ProductEntity({
    id: 90,
    name: "Medicated Shampoo",
    description: "Anti-fungal and anti-bacterial pet shampoo.",
    price: randomPrice(15.99, 24.99),
    imageUrl: "https://example.com/medicated-shampoo.jpg",
  }),
  new ProductEntity({
    id: 91,
    name: "Grooming Scissors Set",
    description: "Professional-grade scissors set for detailed grooming.",
    price: randomPrice(29.99, 49.99),
    imageUrl: "https://example.com/scissors-set.jpg",
  }),
  new ProductEntity({
    id: 92,
    name: "Pet Hair Roller",
    description: "Reusable roller for removing pet hair from furniture.",
    price: randomPrice(12.99, 19.99),
    imageUrl: "https://example.com/hair-roller.jpg",
  }),
  new ProductEntity({
    id: 93,
    name: "Paw Washer",
    description: "Portable paw cleaning cup with soft silicone bristles.",
    price: randomPrice(14.99, 22.99),
    imageUrl: "https://example.com/paw-washer.jpg",
  }),
  new ProductEntity({
    id: 94,
    name: "Pet Dryer",
    description: "Professional-grade pet hair dryer with variable speed.",
    price: randomPrice(69.99, 119.99),
    imageUrl: "https://example.com/pet-dryer.jpg",
  }),
  new ProductEntity({
    id: 95,
    name: "Grooming Gloves",
    description: "Dual-purpose bathing and deshedding gloves.",
    price: randomPrice(14.99, 24.99),
    imageUrl: "https://example.com/grooming-gloves.jpg",
  }),
  new ProductEntity({
    id: 96,
    name: "Tear Stain Remover",
    description: "Gentle solution for removing tear stains from fur.",
    price: randomPrice(11.99, 18.99),
    imageUrl: "https://example.com/tear-remover.jpg",
  }),
  new ProductEntity({
    id: 97,
    name: "Pet Grooming Apron",
    description: "Waterproof apron with multiple tool pockets.",
    price: randomPrice(19.99, 29.99),
    imageUrl: "https://example.com/grooming-apron.jpg",
  }),
  new ProductEntity({
    id: 98,
    name: "Nail File Kit",
    description: "Professional nail filing system for gentle nail maintenance.",
    price: randomPrice(16.99, 26.99),
    imageUrl: "https://example.com/nail-file.jpg",
  }),
  new ProductEntity({
    id: 99,
    name: "Mat Removing Comb",
    description: "Specialized comb for removing tough mats and tangles.",
    price: randomPrice(13.99, 21.99),
    imageUrl: "https://example.com/mat-comb.jpg",
  }),
  new ProductEntity({
    id: 100,
    name: "Pet Cleaning Kit",
    description: "Complete cleaning kit for pet accidents and odor control.",
    price: randomPrice(34.99, 54.99),
    imageUrl: "https://example.com/cleaning-kit.jpg",
  }),
];
