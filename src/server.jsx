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
      reviews: [
        {
          author: 'Ryan H.',
          body: 'The camper was great but it was not cleaned thoroughly before we arrived. We swept up and wiped the inside down. Other than that it was awesome. Zant was very helpful and communicated back and forth very well.',
          rating: 4,
          postedAt: 'Nov 2022',
        },
        {
          author: 'Kevin B.',
          body: 'Exellent experience. Would definitely use again. Very easy to work with',
          rating: 5,
          postedAt: 'Nov 2022',
        },
        {
          author: 'Grady F.',
          body: 'This was our 2nd time renting from Zant & we had another great experience. Very gracious & helpful host. Easy to communicate with before, during & after trip. Camper is clean & well stocked. Perfect option for family time!',
          rating: 5,
          postedAt: 'Oct 2022',
        },
        {
          author: 'Kristy M.',
          body: 'We’ve used this camper two years in a row now and Zant has been super great to work with. He goes above and beyond to make sure we have a pleasant and easy stay. This camper has every possible feature to make us feel we’ve hardly left home (large fridge, stove, oven, greystone, awning, 4 beds, etc) Zant responds immediately to any questions. Cannot recommend highly enough!          ',
          rating: 5,
          postedAt: 'Sep 2022',
        },
      ],
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
      reviews: [
        {
          author: 'Dawn F.',
          body: 'I was camping at Coneross campground with my daughter and my husband. Great friendly service. Trailer was delivered on time. Just a note to renters to bring your own plates, cups bowls and pillows. Overall we had a great stay!          ',
          rating: 4,
          postedAt: 'Dec 2022',
        },
        {
          author: 'Keith W.',
          body: 'Great camper that fit our needs and delivery was on time and convenient.          ',
          rating: 5,
          postedAt: 'Nov 2022',
        },
        {
          author: 'Josh G.',
          body: 'This whole experience was great. From the start communication with the camper owner was amazing and that carried through until the very end when they picked up the camper. The camper was exactly as advertised and served our purposes well. We would definitely rent from them again.          ',
          rating: 5,
          postedAt: 'Oct 2022',
        },
        {
          author: 'Sarah C.',
          body: 'Great experience and would definitely recommend! Would rent again!!          ',
          rating: 5,
          postedAt: 'Oct 2022',
        },
        {
          author: 'Heather C.',
          body: 'Wonderful camper! All the comforts we needed for a great trip. Zant was a pleasure to work w/, and he was graciously accommodating when we arrived late for check-in and such. We highly recommend Zant and his camper for your next trip!',
          rating: 5,
          postedAt: 'June 2022',
        },
        {
          author: 'Scott C.',
          body: 'Zant was a great host! He did everything he promised and more. Setup trailer exactly where we wanted and provided everything we needed. He was very responsive before, during and after our trip and made sure we never went without knowing how to operate all the RV features. It was a great experience all the way around',
          rating: 5,
          postedAt: 'March 2022',
        },
      ],
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
        'https://res.cloudinary.com/dxwwpwlqc/image/upload/v1678474079/van-3/roeafcyetebq7il3ymhe_kgo4bq.webp',
      ],
      type: 'luxury',
      seat: 'Seats 4',
      reviews: [
        {
          author: 'William C.',
          body: 'Alex has a great camper RV here. It had everything we required for a road trip from Atlanta to Savannah and back via the Blue Ridge Mountains. Alex was there when we picked the RV up to show us how it all worked. Everything worked well, , the camper layout had been very well designed and was very comfortable for the two of us.',
          rating: 5,
          postedAt: 'Dec 2022',
        },
        {
          author: 'Adam H.',
          body: `My wife and I (from Brighton, UK) rented Alex's camper for a 3 week tour of the deep south of the USA and had an absolutely brilliant time. The camper is comfy, homely and well equipped - lots of fun to use - and the truck drives great.We had quite a varied trip, staying at times in remote rural areas, and in busy cities at other times, and the camper served us well in both.`,
          rating: 5,
          postedAt: 'Nov 2022',
        },
        {
          author: 'Chad S.',
          body: 'We rented the truck camper for a two week trip to GA to visit family and friends. The camper is great, and Alex really does keep it well stocked. We had a fluke mechanical issue at the end of the trip, and Alex bent over backwards, even meeting with us on New Year’s Eve to make sure everything was taken care of and we got to our hotel at the airport on time. Good rig, but great owner!',
          rating: 5,
          postedAt: 'Oct 2022',
        },
        {
          author: 'Chris J.',
          body: 'Alex just gave us the best rental experience we’ve ever had on Outdoorsy!Alex was Super Fast to answer messages, with thoughtful and considerate answers to our (admittedly sometimes silly) questions.Camper is well equipped throughout, very clean, and reliable. Camp Chairs are comfy, and the table was a lovely addition. The leveling blocks were clutch!',
          rating: 5,
          postedAt: 'Jun 2022',
        },
        {
          author: 'Michael L.',
          body: 'I rented this rig to get around in and have a easy place to overnight while visiting friends and family around Georgia and Florida. I could easily park this rig on the driveway or in front of the house. This was the perfect size and is very dependable. Can transport up to 6 people in the spacious cab of the truck. Alex was always available for any questions I had. Will rent from Alex again for my trip next year.',
          rating: 5,
          postedAt: 'Oct 2021',
        },
      ],
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
      reviews: [
        {
          author: 'Daniel L.',
          body: 'We had an amazing trip in Alex’s truck camper! The truck is fairly old as described in the listing and it had a few quirks I had to get used to, but I imagine anyone who has driven a diesel truck before knows what to expect. Communication with Alex was easy and he was always responsive with any questions I had. The camper itself makes great use of its space and was quite comfortable, especially because of the propane heater. Expect to empty the tanks a few times and to manage your water and you’ll be happy with this rental.',
          rating: 5,
          postedAt: 'Nov 2022',
        },
        {
          author: 'Nicholas H.',
          body: 'Alex was very helpful with all the information I needed and questions I had. He went above and beyond to make sure I had great experience. I would definitely rent from him again.',
          rating: 5,
          postedAt: 'Nov 2022',
        },
        {
          author: 'Scott T.',
          body: 'Easy pickup and drop off. We didn’t use many of the entertainment items onboard, but the van was as described and we enjoyed it.',
          rating: 5,
          postedAt: 'Oct 2022',
        },
        {
          author: 'Nikki B.',
          body: 'We love this sprinter for road trips! Drives great and is in excellent condition. Very spacious with all the fun upgrades.!          ',
          rating: 5,
          postedAt: 'Sep 2022',
        },
      ],
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
      reviews: [
        {
          author: 'Marissa M',
          body: 'Dan was awesome. He answered questions and texts very quickly and was waiting for us when we got to the camp ground. Everything was set up, and he showed us around. The camper was clean and ready to go. The camp ground had told him to choose whatever spot for us he thought would be good, and he did a great and thoughtful job. Really good to work with overall. A pleasure.',
          rating: 5,
          postedAt: 'Nov 2022',
        },
        {
          author: 'Mark C.',
          body: 'Took this trailer on a trip to the Rocky Mountains, had a tire blow and Dan was great in communicating and resolving the issue. Camper was great!',
          rating: 5,
          postedAt: 'Nov 2022',
        },
        {
          author: 'Julie H.',
          body: 'The camper was very nice and just as described. We requested delivery and setup and when we arrived, it was setup and ready for us to move in for our weekend getaway. It had adequate space for of our supplies we brought during our stay. The air conditioner works very well and stayed very cool and pleasant throughout the day and night. The beds are a little harder than I’m use to, so may want to bring some form of memory foam mattress for personal comfort. Dan contacted us the day we arrived to be sure everything was to our liking and made sure we knew he was available if any issues were to arise with the camper. Overall, we had an excellent time and so enjoyed the use of the pop-up camper. I would definitely reach out to Dan again for another trip down the road.',
          rating: 5,
          postedAt: 'Oct 2022',
        },
        {
          author: 'Courtney H.',
          body: 'Dan was wonderful! He met with us to explain how to use the pop up camper and was always available if we needed him. The toy hauler pop up camper is so cute and it was such a fun experience. We would definitely rent it again!          ',
          rating: 5,
          postedAt: 'Sep 2022',
        },
      ],
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
      reviews: [
        {
          author: 'Andrew L.',
          body: 'Leslie was great and a very gracious host. The camper was pretty good but needs some maintenance.',
          rating: 3,
          postedAt: 'Nov 2022',
        },
        {
          author: 'Stacie V.',
          body: 'Leslie was great! This was an easy process. She was very responsive and she answered all of my questions accurately and quickly! We had delivery and she was on time. The camper was set up and she showed us how to use everything. This was an awesome experience and we will be going again soon! Thank you!',
          rating: 5,
          postedAt: 'Nov 2022',
        },
        {
          author: 'Misti D.',
          body: 'This camper was perfect for our family’s first camper experience! Everything was delivered, set up, cleaned, and ready for us to use. I was excited about all the “extras” that were already provided. Communication was also prompt with any questions that we had. We will definitely recommend to anyone and will use in the future!',
          rating: 5,
          postedAt: 'Oct 2022',
        },
        {
          author: 'Sheena B.',
          body: 'Leslie was fantastic to communicate with. We were so thankful to be nice & dry in the RV as each day of our trip had a ton of rain. All details of the listing were accurate.          ',
          rating: 4,
          postedAt: 'Sep 2022',
        },
        {
          author: 'Bethany H.',
          body: 'Everything was perfect except for some missing amenities',
          rating: 4,
          postedAt: 'Jun 2022',
        },
      ],
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
