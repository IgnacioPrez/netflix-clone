import { useEffect, useState } from "react";
import { getServices } from "../../services/fetchinOfDates";
import { baseUrl, MyKey } from "../../services/movie.service";


export default  function useGetData(addUrl) {
  const [getData, setGetData] = useState([]);
  const getDataforServices = async () => {
    const data = await getServices(baseUrl + addUrl, MyKey);
    setGetData(data);
  };
  useEffect(() => {
    getDataforServices();
  }, []);
  return [getData];
}
