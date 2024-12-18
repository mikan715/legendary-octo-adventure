import { defineStore } from "pinia";
import axios from "axios";

const apiEndpoint = import.meta.env.VITE_API;

export const useDataStore = defineStore({
  id: "dataStore",
  state: () => ({
    data: [],
    betlist: {},
    showModal: false,
    kontostand: 100,
    oddValue: "",
    oddQuote: 0,
    wettgeld: 0,
    userName: "",
    newUser: "",
    userData: "",
    item: [],
  }),

  actions: {
    async fetchData() {
      const result = await axios.get(`${apiEndpoint}dashboard`);
      this.data = result.data;
    },

    async fetchBetlist() {
      const result = await axios.get(`${apiEndpoint}betlist`);
      this.betlist = result.data;
    },

    async addNewUser(name) {
      try {
        const response = await axios.post(`${apiEndpoint}addnewuser`, {
          name: name,
          balance: 100.0,
          bets: [],
        });
        console.log("User created with ID:", response.data.user_id);
      } catch (error) {
        console.error("Error creating user:", error);
      }
    },

    async login() {
      try {
        const response = await axios.get(`${apiEndpoint}login`, {
          params: { username: this.userName },
        });
        console.log(this.userName);
        this.userData = response.data;
        console.log("User created with ID:", this.userData);
      } catch (error) {
        console.error("Error creating user:", error);
      }
    },
    async addBet() {
      console.log(this.userData.name);
      console.log(this.item.fixture.id);
      console.log(this.wettgeld);
      console.log(this.oddQuote);
      console.log(this.oddValue);
      try {
        const response = await axios.post(`${apiEndpoint}add_bet`, {
          user_id: this.userData.name,
          fixture: this.item.fixture.id,
          wettgeld: this.wettgeld,
          odd: this.oddQuote,
          value: this.oddValue,
        });
        this.message = response.data.message;
        this.fetchData();
      } catch (err) {
        if (err.response && err.response.data) {
          this.message = err.response.data.error; // Fehlermeldung anzeigen
        } else {
          this.message = "Ein Fehler ist aufgetreten";
        }
      }
    },
  },
});
