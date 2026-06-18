import CatPage from "../CatPage";
import data from '../../data/cz_danmei.json' with { type: 'json' }

export default function Danmei({show_cats}) {
  return <CatPage values={data.list} show_cats={show_cats} />
}