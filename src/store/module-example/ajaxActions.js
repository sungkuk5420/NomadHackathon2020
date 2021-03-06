import axios from "axios";

// const apiURL = "http://localhost:5000";
const apiURL = "https://devkim.dev/hackathon";

export const ajaxActions = {
  addTeamCard(params, cSuccess, cError) {
    // console.log(params);
    let options = {
      url() {
        return `${apiURL}/addTeamCard`;
      }
    };
    let api = axios.create();
    // console.log("url= ", options.url());

    const formData = new FormData();
    formData.append("mainImage", params.addTeamCard.mainImage);
    formData.append("firstPeopleImage", params.addTeamCard.firstPeopleImage);
    formData.append("secondPeopleImage", params.addTeamCard.secondPeopleImage);
    formData.append("addTeamCard", JSON.stringify(params.addTeamCard));
    axios
      .all([
        api.post(options.url(), formData, {
          headers: {
            "content-type": "multipart/form-data"
          }
        })
      ])
      .then(responses => {
        let errors = responses.filter(res => {
          return res.status !== 200;
        });
        if (errors.length < 1) {
          // console.log("200 response= ", responses[0]);
          cSuccess(responses[0]);
        } else {
          let errmsgs = errors.reduce((memo = "", res) => {
            return memo + `${res.status} : ${res.message} \n`;
          }, "");
          console.warn(errmsgs);
        }
      });
  },
  getTeamCards(cSuccess, cError) {
    let options = {
      url() {
        return `${apiURL}/getTeamCards`;
      }
    };
    let api = axios.create();
    // console.log("url= ", options.url());
    axios.all([api.get(options.url())]).then(responses => {
      let errors = responses.filter(res => {
        return res.status !== 200;
      });
      if (errors.length < 1) {
        // console.log("200 response= ", responses[0]);
        cSuccess(responses[0]);
      } else {
        let errmsgs = errors.reduce((memo = "", res) => {
          return memo + `${res.status} : ${res.message} \n`;
        }, "");
        console.warn(errmsgs);
      }
    });
  },

  checkPassword(params, cSuccess, cError) {
    // console.log(params);
    let options = {
      url() {
        return `${apiURL}/checkPassword`;
      }
    };
    let api = axios.create();
    // console.log("url= ", options.url());

    axios
      .all([
        api.post(options.url(), {
          params
        })
      ])
      .then(responses => {
        let errors = responses.filter(res => {
          return res.status !== 200;
        });
        if (errors.length < 1) {
          // console.log("200 response= ", responses[0]);
          cSuccess(responses[0]);
        } else {
          let errmsgs = errors.reduce((memo = "", res) => {
            return memo + `${res.status} : ${res.message} \n`;
          }, "");
          console.warn(errmsgs);
        }
      });
  },
  updateTeamCard(params, cSuccess, cError) {
    let options = {
      url() {
        return `${apiURL}/updateTeamCard`;
      }
    };
    let api = axios.create();
    // console.log("url= ", options.url());

    const formData = new FormData();
    formData.append("mainImage", params.updateTeamCard.mainImage);
    formData.append("firstPeopleImage", params.updateTeamCard.firstPeopleImage);
    formData.append(
      "secondPeopleImage",
      params.updateTeamCard.secondPeopleImage
    );
    formData.append("updateTeamCard", JSON.stringify(params.updateTeamCard));
    axios
      .all([
        api.post(options.url(), formData, {
          headers: {
            "content-type": "multipart/form-data"
          }
        })
      ])
      .then(responses => {
        let errors = responses.filter(res => {
          return res.status !== 200;
        });
        if (errors.length < 1) {
          // console.log("200 response= ", responses[0]);
          cSuccess(responses[0]);
        } else {
          let errmsgs = errors.reduce((memo = "", res) => {
            return memo + `${res.status} : ${res.message} \n`;
          }, "");
          console.warn(errmsgs);
        }
      });
  }
};
