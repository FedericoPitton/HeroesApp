import { HeroList } from '../components'
import { PaginationButtons } from '../components/PaginationButtons'

export const MarvelPage = () => {
  return (
    <>
    <h1>Marvel</h1>
    <hr/>
    <HeroList publisher={'Marvel Comics'}/>

    </>
  )
}
