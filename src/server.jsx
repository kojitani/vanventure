import { createServer, Model, Response } from 'miragejs';

createServer({
  models: {
    vans: Model,
    users: Model,
  },

  seeds(server) {
    server.create('van', {
      id: '1',
      name: 'Modest Explorer',
      price: 60,
      description:
        'The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!',
      class: '2020 Class B · 19ft',
      imageUrl: [
        'https://i.imgur.com/Nr5i56Y.jpg',
        'https://i.imgur.com/TCzrOe0.png',
        'https://i.imgur.com/8I1iTdm.png',
        'https://i.imgur.com/8U1qd9w.png',
        'https://i.imgur.com/Sn6QHVM.png',
        'https://i.imgur.com/UOj5yWk.png',
        'https://i.imgur.com/zTJEVD1.png',
      ],
      type: 'simple',
      seat: 'Seats 2',
      rating: 4.6,
      reviews: 20,
      host: {
        name: 'dustin',
        id: 123,
        message: `Hello my name is Dustin. I am happily married to my wife Christina. We have 4 kids(three boys and a girl). We love to do tons of outdoor activities. We try to get out and camp as much as possible as that is how I grew up. It's one of our favorite things to do. We hope that you can enjoy our home away from home as much as we do!`,
      },

      features: [
        { beds: 4 },
        { fuel: '25 gal' },
        { water: '21 gal' },
        { propane: '8 gal' },
      ],
      amenities: [
        'shower',
        'heater',
        'toilet',
        'refrigerator',
        'dining-table',
        'stove',
        'kitchen-sink',
        'television',
      ],
      rules: [
        'pet-friendly',
        'no-music-festivals',
        'no-tailgating',
        'no-smoking',
      ],
    });
    server.create('van', {
      id: '2',
      name: 'Beach Bum',
      price: 80,
      description:
        "Beach Bum is a van inspired by surfers and travelers. It was created to be a portable home away from home, but with some cool features in it you won't find in an ordinary camper.",
      class: '2015 Class B · 21ft',
      imageUrl: [
        'https://i.imgur.com/RfjKmmc.jpg',
        'https://i.imgur.com/YeHeYeV.jpg',
        'https://i.imgur.com/fjOVgzD.jpg',
        'https://i.imgur.com/KoOdi0g.jpg',
        'https://i.imgur.com/NGYOy2M.jpg',
        'https://i.imgur.com/QjMBgSY.jpg',
      ],
      type: 'rugged',
      seat: 'Seats 4',
      rating: 4.7,
      reviews: 35,
      host: {
        name: 'dustin',
        id: 456,
        message: `Hello my name is Dustin. I am happily married to my wife Christina. We have 4 kids(three boys and a girl). We love to do tons of outdoor activities. We try to get out and camp as much as possible as that is how I grew up. It's one of our favorite things to do. We hope that you can enjoy our home away from home as much as we do!`,
      },
      features: [
        { beds: 4 },
        { fuel: '25 gal' },
        { water: '21 gal' },
        { propane: '6 gal' },
      ],
      amenities: [
        'shower',
        'heater',
        'toilet',
        'refrigerator',
        'dining-table',
        'stove',
        'kitchen-sink',
        'television',
      ],
      rules: [
        'pet-friendly',
        'no-music-festivals',
        'no-tailgating',
        'no-smoking',
      ],
    });
    server.create('van', {
      id: '3',
      name: 'Reliable Red',
      price: 100,
      description:
        "Reliable Red is a van that was made for travelling. The inside is comfortable and cozy, with plenty of space to stretch out in. There's a small kitchen, so you can cook if you need to. You'll feel like home as soon as you step out of it.",
      class: '2022 Class B · 21ft',
      imageUrl: [
        'https://i.imgur.com/vvFUB68.jpg',
        'https://i.imgur.com/nt2nRfI.jpg',
        'https://i.imgur.com/H5Go4SN.png',
        'https://i.imgur.com/SaUO95z.png',
        'https://i.imgur.com/llDboNn.png',
        'https://i.imgur.com/mqCpmuM.jpg',
        'https://i.imgur.com/03vksDT.jpg',
        'https://i.imgur.com/7mLwPTv.png',
        'https://i.imgur.com/MLNR6Ee.png',
      ],
      type: 'luxury',
      seat: 'Seats 4',
      rating: 4.9,
      reviews: 12,
      host: {
        name: 'dustin',
        id: 456,
        message: `Hello my name is Dustin. I am happily married to my wife Christina. We have 4 kids(three boys and a girl). We love to do tons of outdoor activities. We try to get out and camp as much as possible as that is how I grew up. It's one of our favorite things to do. We hope that you can enjoy our home away from home as much as we do!`,
      },
      features: [
        { beds: 4 },
        { fuel: '25 gal' },
        { water: '21 gal' },
        { propane: '6 gal' },
      ],
      amenities: [
        'shower',
        'heater',
        'toilet',
        'refrigerator',
        'dining-table',
        'stove',
        'kitchen-sink',
        'television',
      ],
      rules: [
        'pet-friendly',
        'no-music-festivals',
        'no-tailgating',
        'no-smoking',
      ],
    });
    server.create('van', {
      id: '4',
      name: 'Dreamfinder',
      price: 65,
      description:
        'Dreamfinder is the perfect van to travel in and experience. With a ceiling height of 2.1m, you can stand up in this van and there is great head room. The floor is a beautiful glass-reinforced plastic (GRP) which is easy to clean and very hard wearing. A large rear window and large side windows make it really light inside and keep it well ventilated.',
      class: '2009 Class B · 18ft',
      imageUrl: [
        'https://i.imgur.com/FBxmiAG.jpg',
        'https://i.imgur.com/Z8IAom9.jpg',
        'https://i.imgur.com/Z9gnv98.jpg',
        'https://i.imgur.com/DegxXjL.jpg',
        'https://i.imgur.com/PYmLSqP.jpg',
        'https://i.imgur.com/2hCcnyX.jpg',
      ],
      type: 'simple',
      seat: 'Seats 2',
      rating: 4.8,
      reviews: 23,
      host: {
        name: 'dustin',
        id: 456,
        message: `Hello my name is Dustin. I am happily married to my wife Christina. We have 4 kids(three boys and a girl). We love to do tons of outdoor activities. We try to get out and camp as much as possible as that is how I grew up. It's one of our favorite things to do. We hope that you can enjoy our home away from home as much as we do!`,
      },
      features: [
        { beds: 4 },
        { fuel: '25 gal' },
        { water: '21 gal' },
        { propane: '6 gal' },
      ],
      amenities: [
        'shower',
        'heater',
        'toilet',
        'refrigerator',
        'dining-table',
        'stove',
        'kitchen-sink',
        'television',
      ],
      rules: [
        'pet-friendly',
        'no-music-festivals',
        'no-tailgating',
        'no-smoking',
      ],
    });
    server.create('van', {
      id: '5',
      name: 'The Cruiser',
      price: 120,
      description:
        'The Cruiser is a van for those who love to travel in comfort and luxury. With its many windows, spacious interior and ample storage space, the Cruiser offers a beautiful view wherever you go.',
      class: '2021 Class B · 19ft',
      imageUrl: [
        'https://i.imgur.com/YtrA1EY.jpg',
        'https://i.imgur.com/Cl0GwGu.png',
        'https://i.imgur.com/XO6OyP2.png',
        'https://i.imgur.com/Dy0jJ9t.png',
        'https://i.imgur.com/YYQIyP9.png',
      ],
      type: 'luxury',
      seat: 'Seats 2',
      rating: 5,
      reviews: 19,
      host: {
        name: 'dustin',
        id: 123,
        message: `Hello my name is Dustin. I am happily married to my wife Christina. We have 4 kids(three boys and a girl). We love to do tons of outdoor activities. We try to get out and camp as much as possible as that is how I grew up. It's one of our favorite things to do. We hope that you can enjoy our home away from home as much as we do!`,
      },
      features: [
        { beds: 4 },
        { fuel: '25 gal' },
        { water: '21 gal' },
        { propane: '6 gal' },
      ],
      amenities: [
        'shower',
        'heater',
        'toilet',
        'refrigerator',
        'dining-table',
        'stove',
        'kitchen-sink',
        'television',
      ],
      rules: [
        'pet-friendly',
        'no-music-festivals',
        'no-tailgating',
        'no-smoking',
      ],
    });
    server.create('van', {
      id: '6',
      name: 'Green Wonder',
      price: 70,
      description:
        "With this van, you can take your travel life to the next level. The Green Wonder is a sustainable vehicle that's perfect for people who are looking for a stylish, eco-friendly mode of transport that can go anywhere.",
      class: '2018 Class B · 20ft',
      imageUrl: [
        'https://i.imgur.com/5BXTC8y.jpg',
        'https://i.imgur.com/4UHIWxz.jpg',
        'https://i.imgur.com/sXcQXAK.jpg',
        'https://i.imgur.com/zubhZF1.jpg',
        'https://i.imgur.com/VPTp3vq.jpg',
      ],
      type: 'rugged',
      seat: 'Seats 2',
      rating: 4.6,
      reviews: 35,
      host: {
        name: 'dustin',
        id: 123,
        message: `Hello my name is Dustin. I am happily married to my wife Christina. We have 4 kids(three boys and a girl). We love to do tons of outdoor activities. We try to get out and camp as much as possible as that is how I grew up. It's one of our favorite things to do. We hope that you can enjoy our home away from home as much as we do!`,
      },
      features: [
        { beds: 4 },
        { fuel: '25 gal' },
        { water: '21 gal' },
        { propane: '6 gal' },
      ],
      amenities: [
        'shower',
        'heater',
        'toilet',
        'refrigerator',
        'dining-table',
        'stove',
        'kitchen-sink',
        'television',
      ],
      rules: [
        'pet-friendly',
        'no-music-festivals',
        'no-tailgating',
        'no-smoking',
      ],
    });
    server.create('user', {
      id: '123',
      email: 'b@b.com',
      password: 'p123',
      name: 'Bob',
    });
  },

  routes() {
    this.namespace = 'api';
    this.logging = false;
    // this.timing = 2000

    this.get('/vans', (schema, request) => {
      // return new Response(400, {}, {error: "Error fetching data"})
      return schema.vans.all();
    });

    this.get('/vans/:id', (schema, request) => {
      const id = request.params.id;
      return schema.vans.find(id);
    });

    this.get('/host/vans', (schema, request) => {
      // Hard-code the
      return schema.vans.where({});
    });

    this.get('/host/vans/:id', (schema, request) => {
      // Hard-code the
      const id = request.params.id;
      return schema.vans.findBy({ id });
    });

    this.post(
      '/login',
      (schema, request) => {
        const { email, password } = JSON.parse(request.requestBody);
        // This is an extremely naive version of authentication. Please don't
        // do this in the real world, and never save raw text passwords
        // in your database 😇
        const foundUser = schema.users.findBy({ email, password });
        if (!foundUser) {
          return new Response(
            401,
            {},
            { message: 'No user with those credentials found!' }
          );
        }

        // At the very least, don't send the password back to the client 😅
        foundUser.password = undefined;
        return {
          user: foundUser,
          token: "Enjoy your pizza, here's your tokens.",
        };
      },
      { timing: 2000 }
    );
  },
});
