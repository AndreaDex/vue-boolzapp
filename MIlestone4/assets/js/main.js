const app = new Vue({
  el: "#app",
  data: {
    personal_profile: {
      name: "Andrea",
      avatar: "./assets/img/avatar_io.jpg",
    },
    contacts: [
      {
        name: "Michele",
        avatar: "./assets/img/avatar_1.jpg",
        visible: true,
        messages: [
          {
            date: "10/01/2020 15:30:55",
            text: "Hai portato a spasso il cane?",
            status: "sent",
          },
          {
            date: "10/01/2020 15:50:00",
            text: "Ricordati di dargli da mangiare",
            status: "sent",
          },
          {
            date: "10/01/2020 16:15:22",
            text: "Tutto fatto!",
            status: "received",
          },
        ],
      },
      {
        name: "Fabio",
        avatar: "./assets/img/avatar_2.jpg",
        visible: true,
        messages: [
          {
            date: "20/03/2020 16:30:00",
            text: "Ciao come stai?",
            status: "sent",
          },
          {
            date: "20/03/2020 16:30:55",
            text: "Bene grazie! Stasera ci vediamo?",
            status: "received",
          },
          {
            date: "20/03/2020 16:35:00",
            text: "Mi piacerebbe ma devo andare a fare la spesa.",
            status: "sent",
          },
        ],
      },
      {
        name: "Samuele",
        avatar: "./assets/img/avatar_3.jpg",
        visible: true,
        messages: [
          {
            date: "28/03/2020 10:10:40",
            text: "La Marianna va in campagna",
            status: "received",
          },
          {
            date: "28/03/2020 10:20:10",
            text: "Sicuro di non aver sbagliato chat?",
            status: "sent",
          },
          {
            date: "28/03/2020 16:15:22",
            text: "Ah scusa!",
            status: "received",
          },
        ],
      },
      {
        name: "Luisa",
        avatar: "./assets/img/avatar_6.jpg",
        visible: true,
        messages: [
          {
            date: "10/01/2020 15:30:55",
            text: "Lo sai che ha aperto una nuova pizzeria?",
            status: "sent",
          },
          {
            date: "10/01/2020 15:50:00",
            text: "Si, ma preferirei andare al cinema",
            status: "received",
          },
        ],
      },
      {
        name: "Earl",
        avatar: "./assets/img/avatar_4.jpg",
        visible: true,
        messages: [],
      },
    ],
    contatoreContatto: 0,
    contattoSelezionato: {},
    nuovoMessaggio: {
      date: new Date().toLocaleString(),
      text: "",
      status: "sent",
    },
    rispostaAutomatica: {
      date: new Date().toLocaleString(),
      text: "Ehilà gamberone",
      status: "received",
    },
    ricerca: "",
  },
  methods: {
    selezionaContatto(item, index) {
      this.contatoreContatto = index;
      this.contattoSelezionato = item;
    },
    setData() {},
    inviaMessaggio() {
      this.contattoSelezionato.messages.push(this.nuovoMessaggio);
      this.nuovoMessaggio = {
        date: "",
        text: "",
        status: "sent",
      };
      setTimeout(() => {
        this.contattoSelezionato.messages.push(this.rispostaAutomatica);
      }, 1000);
    },
    cercaContatto() {
      this.contacts.forEach((element) => {
        if (element.name.toLowerCase().includes(this.ricerca.toLowerCase())) {
          element.visible = true;
        } else {
          element.visible = false;
        }
      });
    },
  },
  computed: {},
  created() {
    this.contattoSelezionato = this.contacts[0];
  },
});
