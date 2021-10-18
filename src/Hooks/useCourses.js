import { useEffect, useState } from "react";
const useCourses = () => {
  const [courses, setCourses] = useState([]);

  // console.log("tui to kaj kor")

  useEffect(() => {
    //   fetching fake data
    fetch("./fakedata.json")
      .then((res) => res.json())
      .then((data) => {
        setCourses(data.courses);
        // console.log(data,"from custom hooks")
        // console.log(data.courses,"from custom hooks")
      });
  }, []);
  return [courses, setCourses];
};
export default useCourses;