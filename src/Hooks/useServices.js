import { useEffect, useState } from "react";
const useServices = () => {
  const [services, setServices] = useState([]);

//   console.log("tui to kaj kor")

  useEffect(() => {
    //   fetching fake data
    fetch("./fakeServicesData.json")
      .then((res) => res.json())
      .then((data) => {
        setServices(data.services);
        // console.log(data.services, "from custom hooks");
        // console.log(data.courses,"from custom hooks")
      });
  }, []);
  return [services, setServices];
};
export default useServices;
