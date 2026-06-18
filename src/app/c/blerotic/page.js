"use client"
import CatPage from "@/components/CatPage/cat-page";
import data from "@/data/cz_blerotic.json" with { type: 'json' }

export default function Page() {
  return <CatPage show_cats={true} values={data.list} />
}