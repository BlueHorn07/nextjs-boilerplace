import axios from "axios";
import {useEffect, useState} from "react";

const YesNoAxiosCall = () => {
  const [yesOrNo, setYesOrNo] = useState('');

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
    <h2>
      {yesOrNo}
    </h2>
  )
}

export default YesNoAxiosCall;
