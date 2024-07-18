const AbstractSeeder = require("./AbstractSeeder");

class TravelJournalSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "travelJournal", truncate: true });
  }

  run() {
    const travelJournals = [
      {
        title: "Journal 1",
        cover_image: "/house.jpg",
        theme: "Adventure",
        qr_code: "",
        user_id: 1, 
      },
      {
        title: "Journal 2",
        cover_image: "/yoga.jpg",
        theme: "Wellness",
        qr_code: "",
        user_id: 2, 
      },
      {
        title: "Journal 3",
        cover_image: "/path-montagne-water.jpeg",
        theme: "Nature",
        qr_code: "",
        user_id: 1, 
      },
      {
        title: "Journal 4",
        cover_image: "/jungle-bridge.jpeg",
        theme: "Adventure",
        qr_code: "",
        user_id: 3, // Remplacez par l'ID de l'utilisateur approprié
      },
      {
        title: "Journal 5",
        cover_image: "/italie.jpg",
        theme: "Culture",
        qr_code: "",
        user_id: 2, // Exemple d'un autre journal associé à un utilisateur différent
      },
      {
        title: "Journal 6",
        cover_image: "/car-woman.jpeg",
        theme: "Road Trip",
        qr_code: "",
        user_id: 1, // Remplacez par l'ID de l'utilisateur approprié
      },
      {
        title: "Journal 7",
        cover_image: "/hamac.jpg",
        theme: "Relaxation",
        qr_code: "",
        user_id: 3, // Remplacez par l'ID de l'utilisateur approprié
      },
      {
        title: "Journal 8",
        cover_image: "/Femme-falaise-Norvège.jpg",
        theme: "Adventure",
        qr_code: "",
        user_id: 2, // Remplacez par l'ID de l'utilisateur approprié
      },
      {
        title: "Journal 9",
        cover_image: "/campincar.jpg",
        theme: "Outdoor",
        qr_code: "",
        user_id: 1, // Remplacez par l'ID de l'utilisateur approprié
      },
      {
        title: "Journal 10",
        cover_image: "/lila.jpg",
        theme: "Nature",
        qr_code: "",
        user_id: 3, // Remplacez par l'ID de l'utilisateur approprié
      },
      {
        title: "Journal 11",
        cover_image: "/pise-ice-cream.jpg",
        theme: "Food",
        qr_code: "",
        user_id: 1, // Remplacez par l'ID de l'utilisateur approprié
      },
      {
        title: "Journal 12",
        cover_image: "/stars.jpg",
        theme: "Stargazing",
        qr_code: "",
        user_id: 2, // Remplacez par l'ID de l'utilisateur approprié
      },
      {
        title: "Journal 13",
        cover_image: "/Bâtiment-desert.jpg",
        theme: "Desert",
        qr_code: "",
        user_id: 3, // Remplacez par l'ID de l'utilisateur approprié
      },
      {
        title: "Journal 14",
        cover_image: "/baloon-montagne.jpeg",
        theme: "Adventure",
        qr_code: "",
        user_id: 1, // Remplacez par l'ID de l'utilisateur approprié
      },
      {
        title: "Journal 15",
        cover_image: "/aurore-blue.jpg",
        theme: "Nature",
        qr_code: "",
        user_id: 2, // Remplacez par l'ID de l'utilisateur approprié
      },
    ];

    travelJournals.forEach((travelJournal) => {
      this.insert(travelJournal);
    });
  }
}

module.exports = TravelJournalSeeder;
