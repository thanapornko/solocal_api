const {
  User,
  Guide,
  Destination,
  sequelize
} = require("./src/models");
const bcrypt = require("bcryptjs");

const user = [
  {
    name: "Admin",
    email: "admin@gmail.com",
    password: bcrypt.hashSync("111111", 10),
    isAdmin: "true"
  },
  {
    name: "Natasha Romanoff",
    email: "a@gmail.com",
    password: bcrypt.hashSync("111111", 10),
    isAdmin: "false"
  },
  {
    name: "Arya Stark",
    email: "b@gmail.com",
    password: bcrypt.hashSync("111111", 10),
    isAdmin: "false"
  },
  {
    name: "Princess Elsa",
    email: "c@gmail.com",
    password: bcrypt.hashSync("111111", 10),
    isAdmin: "false"
  },
  {
    name: "Iam Groot",
    email: "d@gmail.com",
    password: bcrypt.hashSync("111111", 10),
    isAdmin: "false"
  }
];

const destination = [
  {
    name: "Bangkok",
    description:
      "Bangkok is a city that truly has something for everyone. Whether you're looking for history, culture, food, or nightlife, Bangkok has it all. With its stunning temples, vibrant street markets, and world-famous street food.",
    price: "2,500",
    activity:
      "Take a boat tour along the Chao Phraya River / Visit Wat Arun (The Temple of Dawn) / Have lunch / Take a tuk-tuk ride / Try Muay Thai boxing / End the day with a traditional Thai massage."
  },
  {
    name: "Tao Island",
    description:
      "Koh Tao, also known as Turtle Island, is a small island located in the Gulf of Thailand and is a popular destination for travelers looking for a tropical paradise. With its crystal-clear waters, pristine beaches, and lush jungle landscapes.",
    price: "3,500",
    activity:
      "Explore Sairee Beach / Visit John-Suwan Viewpoint - a great place to catch a sunrise or sunset. / Have lunch / Go snorkeling / Watch sunset over the Gulf of Thailand on a romantic boat tour."
  },
  {
    name: "Chiangmai",
    description:
      "Chiang Mai is a city located in northern Thailand that is known for its rich cultural heritage, stunning natural beauty, and vibrant food and nightlife scenes. Chiang Mai is a city that truly has something for everyone.",
    price: "3,000",
    activity:
      "Visit Wat Phra That Doi Suthep  / Explore the Old City / Have lunch - Try local Thai cuisine / Visit elephant sanctuaries / Visit the Chiang Mai Night Bazaar"
  }
];

const guide = [
  {
    name: "Tatum",
    description:
      "kind and funny guy who will ensure you have an incredible trip",
    destination_id: 1
  },
  {
    name: "Uncle Erk",
    description:
      "talkative and generous guy who can entertain you throughout the trip",
    destination_id: 1
  },
  {
    name: "Dr.Yok",
    description:
      "part-time doctor and full-time guide, he is smart and can answer any question",
    destination_id: 1
  },
  {
    name: "Pinkie",
    description:
      "smart girl who and can answer any question throughout the trip",
    destination_id: 2
  },
  {
    name: "Uncle Dum",
    description:
      "funny and interesting man who will ensure you have an incredible trip",
    destination_id: 2
  },
  {
    name: "P'Somsri",
    description:
      "kind and funny man who can entertain you throughout the trip",
    destination_id: 2
  },
  {
    name: "Auntie Kai",
    description:
      "kind auntie who can entertain you throughout the trip",
    destination_id: 3
  },
  {
    name: "Bowie",
    description:
      "talkative and generous sister who can entertain you throughout the trip",
    destination_id: 3
  },
  {
    name: "Lert",
    description:
      "funny and interesting man who will ensure you have an incredible trip",
    destination_id: 3
  }
];

const seedData = async () => {
  try {
    await sequelize.sync({ force: true });
    const user_res = await User.bulkCreate(user);
    const guide_res = await Guide.bulkCreate(guide);
    const destination_res = await Destination.bulkCreate(
      destination
    );
  } catch (err) {
    console.log(err);
  }
};

seedData();
