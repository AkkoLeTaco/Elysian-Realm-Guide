const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      message: null,
      index: null,
      user: false,
      list: [],
      message: null,
      characterCards: [],
      characterDescription: {},
    },
    actions: {
      // Use getActions to call a function within a fuction

      getData: () => {
        fetch(process.env.BACKEND_URL + "/api/character", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => response.json())
          .then((result) => setStore({ list: result }))
          .catch((error) => console.log("error", error));
      },
      loadDetails: (num) => {
        fetch(process.env.BACKEND_URL + `/api/character/${num}`, {
          method: "GET",
          redirect: "follow",
        })
          .then((response) => response.json())
          .then((result) => setStore({ characterDescription: result }))
          .catch((error) => console.log("error", error));
      },
      create: (email, password, firstname, lastname, dob) => {
        fetch(process.env.BACKEND_URL + "/api/signup", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: email,
            password: password,
            first_name: firstname,
            last_name: lastname,
            dob: dob,
          }),
          redirect: "follow",
        })
          .then((result) => console.log(result))
          .catch((error) => console.log("error", error));
      },

      logId: (email, password) => {
        const user = {
          email: email,
          password: password,
        };
        fetch(process.env.BACKEND_URL + "/api/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(user),
          redirect: "follow",
        })
          .then((response) => response.json())
          .then((result) => getActions().protect(result.access_token))
          .catch((error) => console.log("error", error));
      },

      protect: (token) => {
        fetch(process.env.BACKEND_URL + "/api/protected", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          redirect: "follow",
        })
          .then((response) => response.json())
          .then((result) => setStore({ user: true }))
          .catch((error) => console.log("error", error));
      },

      logout: () => {
        setStore({ user: false });
      },
    },
  };
};

export default getState;
