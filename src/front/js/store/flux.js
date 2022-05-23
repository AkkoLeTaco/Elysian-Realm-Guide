const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      list: [],
      message: null,
      CharacterCards: [],
      CharacterDescription: {},
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
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
          .then((result) => setStore({ CharacterDescription: result }))
          .catch((error) => console.log("error", error));
      },

      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
