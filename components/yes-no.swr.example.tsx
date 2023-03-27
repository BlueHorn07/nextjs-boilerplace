import axios from "axios";
import useSWR from "swr";

const YesNoSwrExample = () => {
  const key = "https://yesno.wtf/api";
  const fetcher = (url: string) => axios.get(url).then((res) => res.data);
  const {data, error, mutate} = useSWR(key, fetcher)
  const yesOrNo = data ? data.answer : 'Not Fetched';

  return (
    <p>
      {yesOrNo}
    </p>
  )
}

export default YesNoSwrExample;
