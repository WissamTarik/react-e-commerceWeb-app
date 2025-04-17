import { Helmet } from "react-helmet-async";
interface Props {
  metaTitle: string;
}
const MetaHelmet = ({metaTitle}:Props) => {
  return (
    <Helmet>
        <title>{metaTitle||"Fresh Cart"}</title>


    </Helmet>
  )
}

export default MetaHelmet