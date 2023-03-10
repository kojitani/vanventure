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
        'https://res.cloudinary.com/dxwwpwlqc/image/upload/v1678472404/van-1/feg4kipnanbadvkqrdni_a4ig3s.webp',
        'https://res.cloudinary.com/dxwwpwlqc/image/upload/v1678472404/van-1/ekikcormfox0xlqygwjd_ous2ly.webp',
        'https://res.cloudinary.com/dxwwpwlqc/image/upload/v1678472402/van-1/a6q3n2jfjdtoa8p4akbd_lahokz.webp',
        'https://res.cloudinary.com/dxwwpwlqc/image/upload/v1678472401/van-1/x67uhtjvavv3t4gmsqvo_zl1zl0.webp',
        'https://res.cloudinary.com/dxwwpwlqc/image/upload/v1678472404/van-1/higseoomh6xogceyiw2e_idacfk.webp',
        'https://res.cloudinary.com/dxwwpwlqc/image/upload/v1678472403/van-1/bipojdfkeh66x5dblz1d_csu8bw.webp',
        'https://res.cloudinary.com/dxwwpwlqc/image/upload/v1678472403/van-1/bctjvsl5p6hp9ryh9fcs_pjl8pn.webp',
        'https://res.cloudinary.com/dxwwpwlqc/image/upload/v1678472403/van-1/avmudhhy55oq608ldkjb_rcjev8.webp',
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
        'https://res.cloudinary.com/dxwwpwlqc/image/upload/v1678473775/van-1/van-2/sxqxjp3vturqii4inlix_hnrd7d.webp',
        'https://res.cloudinary.com/dxwwpwlqc/image/upload/v1678473774/van-1/van-2/qxovhj9fhobj18dkzusb_eldl0c.webp',
        'https://res.cloudinary.com/dxwwpwlqc/image/upload/v1678473774/van-1/van-2/qmctyaode7wanltrmxua_fehfvq.webp',
        'https://res.cloudinary.com/dxwwpwlqc/image/upload/v1678473773/van-1/van-2/l0mzpz0lpptewlush5ng_bwyjtm.webp',
        'https://res.cloudinary.com/dxwwpwlqc/image/upload/v1678473772/van-1/van-2/iwlml5frvhwvzylcswgk_qypyrm.webp',
        'https://res.cloudinary.com/dxwwpwlqc/image/upload/v1678473773/van-1/van-2/nhej6urdrtdu5rglnjls_ybqlgt.webp',
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
        'https://res.cloudinary.com/dxwwpwlqc/image/upload/v1678474077/van-3/deojj7p309mwg8n4ly1o_dlrtk8.webp',
        'https://res.cloudinary.com/dxwwpwlqc/image/upload/v1678474077/van-3/dvowcvtgxvsmswtxancm_p8nkam.webp',
        'https://res.cloudinary.com/dxwwpwlqc/image/upload/v1678474077/van-3/g3pqipemhh6ohjktrgcq_oqg70m.webp',
        'https://res.cloudinary.com/dxwwpwlqc/image/upload/v1678474076/van-3/cwheeu5jwgxrech4yaw0_hgntyz.webp',
        'https://res.cloudinary.com/dxwwpwlqc/image/upload/v1678474077/van-3/ln64tpzcgf2cxakqe0m7_rzz3tc.webp',
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
        'https://res.cloudinary.com/dxwwpwlqc/image/upload/v1678474209/van-4/ee392rx5yc4v1ci5d7sp_c8rsqe.webp',
        'https://res.cloudinary.com/dxwwpwlqc/image/upload/v1678474209/van-4/bsboisz0ialyl0ctagl0_rplwon.webp',
        'https://res.cloudinary.com/dxwwpwlqc/image/upload/v1678474210/van-4/llx2wnjfurvkxq6lswe1_kjunlv.webp',
        'https://res.cloudinary.com/dxwwpwlqc/image/upload/v1678474209/van-4/eahdiplvpcpabhqscsot_rdo50z.webp',
        'https://res.cloudinary.com/dxwwpwlqc/image/upload/v1678474210/van-4/usegmiyhvtegl48cvabt_z7dj4e.webp',
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
        'https://res.cloudinary.com/dxwwpwlqc/image/upload/v1678474625/van-5/xwlsxjhn0buvsnj4jshp_nmnkoy.webp',
        'https://res.cloudinary.com/dxwwpwlqc/image/upload/v1678474625/van-5/avmudhhy55oq608ldkjb_xfnft4.webp',
        'https://res.cloudinary.com/dxwwpwlqc/image/upload/v1678474625/van-5/a6q3n2jfjdtoa8p4akbd_afcgey.webp',
        'https://res.cloudinary.com/dxwwpwlqc/image/upload/v1678474624/van-5/nbmpa423zojwbugguccy_ehwnpn.webp',
        'https://res.cloudinary.com/dxwwpwlqc/image/upload/v1678474624/van-5/qrgfwcfoqkmclh2wh3jl_e87xwv.webp',
        'https://res.cloudinary.com/dxwwpwlqc/image/upload/v1678474624/van-5/mlromc80q7rn7dt9x1o4_r8er21.webp',
        'https://res.cloudinary.com/dxwwpwlqc/image/upload/v1678474625/van-5/bipojdfkeh66x5dblz1d_qxhddz.webp',
        'https://res.cloudinary.com/dxwwpwlqc/image/upload/v1678474626/van-5/gd6lmlbsjw7bvlloj74n_w4zprd.webp',
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
        'https://res.cloudinary.com/dxwwpwlqc/image/upload/v1678474783/van-6/i9zsqahmll1rga1uopo0_o18kjo.webp',
        'https://res.cloudinary.com/dxwwpwlqc/image/upload/v1678474783/van-6/eck31vieien8hrccc52w_q1sgfn.webp',
        'https://res.cloudinary.com/dxwwpwlqc/image/upload/v1678474783/van-6/auecakealmylikwmb54b_n2l6tp.webp',
        'https://res.cloudinary.com/dxwwpwlqc/image/upload/v1678474783/van-6/ly1ehyy1zvnhuog0qt0w_gvgurv.webp',
        'https://res.cloudinary.com/dxwwpwlqc/image/upload/v1678474784/van-6/zgwuc2zwpjszunicsu4w_g2edbu.webp',
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
