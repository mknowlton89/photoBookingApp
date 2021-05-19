import axios from "axios";

export default {

  getAddress: function (options) {


    // state: appointmentData.state,
    //   zip_code: appointmentData.zip,
    //     address: appointmentData.street,
    //       city: appointmentData.city



    return axios.request(options)
  }
}

// https://mashvisor-api.p.rapidapi.com/property?state=Ga&zip_code=30082&address=4107+Winding+Valley+Dr+Se&city=Smyrna
// https://mashvisor-api.p.rapidapi.com/property?state=Ga&zip_code=30082&address=4107+Winding+Valley+Dr+Se&city=Smyrna
// https://mashvisor-api.p.rapidapi.com/property?state=Ga&zip_code=30082&address=4107+Winding+Valley+Dr+Se&city=Smyrna