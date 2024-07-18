const AbstractSeeder = require("./AbstractSeeder");

class TravelJournalSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "travel_memories", truncate: true });
  }

  run() {
    const travelJournals = [
      {
        title: "",
        cover_image: "/house.jpg",
        theme: "",
        qr_code: "",
      },
      {
        title: "",
        cover_image: "/yoga.jpg",
        theme: "",
        qr_code: "",
      },
      {
        title: "",
        cover_image: "/path-montagne-water.jpeg",
        theme: "",
        qr_code: "",
      },
      {
        title: "",
        cover_image: "/jungle-bridge.jpeg",
        theme: "",
        qr_code: "",
      },
      {
        title: "",
        cover_image: "/italie.jpg",
        theme: "",
        qr_code: "",
      },
      {
        title: "",
        cover_image: "/car-woman.jpeg",
        theme: "",
        qr_code: "",
      },
      {
        title: "",
        cover_image: "/hamac.jpg",
        theme: "",
        qr_code: "",
      },
      {
        title: "",
        cover_image: "/Femme-falaise-Norvège.jpg",
        theme: "",
        qr_code: "",
      },
      {
        title: "",
        cover_image: "/campincar.jpg",
        theme: "",
        qr_code: "",
      },
      {
        title: "",
        cover_image: "/lila.jpg",
        theme: "",
        qr_code: "",
      },
      {
        title: "",
        cover_image: "/pise-ice-cream.jpg",
        theme: "",
        qr_code: "",
      },
      {
        title: "",
        cover_image: "/stars.jpg",
        theme: "",
        qr_code: "",
      },
      {
        title: "",
        cover_image: "/Bâtiment-desert.jpg",
        theme: "",
        qr_code: "",
      },
      {
        title: "",
        cover_image: "/baloon-montagne.jpeg",
        theme: "",
        qr_code: "",
      },
      {
        title: "",
        cover_image: "/aurore-blue.jpg",
        theme: "",
        qr_code: "",
      },
    ];

    travelJournals.forEach((travelJournal) => {
      this.insert(travelJournal);
    });
  }
}

module.exports = TravelJournalSeeder;
