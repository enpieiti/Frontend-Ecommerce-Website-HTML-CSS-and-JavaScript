const urlServices = `http://localhost:8080`;
const urlImage = `http://localhost:8080`;

const getAPI = (endPoint) => {
  return new Promise((resolve, reject) => {
    let http = new XMLHttpRequest();
    http.onload = () => {
      let Doi_tuong_Kq = JSON.parse(http.responseText);
      resolve(Doi_tuong_Kq);
    };
    let apiServices = `${urlServices}/${endPoint}`;
    http.open("GET", apiServices);
    http.send();
  });
};
