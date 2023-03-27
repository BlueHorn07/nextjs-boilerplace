import axios from "axios";
import {useEffect, useState} from "react";

const YesNoAxiosExample = () => {
  const [yesOrNo, setYesOrNo] = useState('Not Fetched');

  useEffect(() => {
    const url = "https://yesno.wtf/api";
    axios.get(`${url}`)
      .then((res) => {
        const ret = res.data;
        setYesOrNo(ret.answer);
      })
      .catch((err) => {
        const errMsg = err.response.data.message;
        alert(`Load Failed!\n${errMsg}`);
      })
  }, [])

  return (
    <p>
      {yesOrNo}
    </p>
  )
}

export default YesNoAxiosExample;
