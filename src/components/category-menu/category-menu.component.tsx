import { Key } from 'react'
import { CategoryMenuContainer } from './category-menu.styles'
import DirectoryItem from '../directory-item/directory-item.component'


export type DirectoryCategory = {
  id: Key,
  title: string,
  imageurl: string,
  route: string,
}

const categories = [
  {
    "id": 1,
    "title": "hats",
    "imageurl": "https://i.ibb.co/cvpntL1/hats.png",
    route: 'shop/hats'
  },
  {
    "id": 2,
    "title": "jackets",
    "imageurl": "https://i.ibb.co/px2tCc3/jackets.png",
    route: 'shop/jackets'
  },
  {
    "id": 3,
    "title": "sneakers",
    "imageurl": "https://i.ibb.co/0jqHpnp/sneakers.png",
    route: 'shop/sneakers'
  },
  {
    "id": 4,
    "title": "womens",
    "imageurl": "https://i.ibb.co/GCCdy8t/womens.png",
    route: 'shop/womens'
  },
  {
    "id": 5,
    "title": "mens",
    "imageurl": "https://i.ibb.co/R70vBrQ/men.png",
    route: 'shop/mens'
  }
]
const CategoryMenu = () => {
    
    return (
        <CategoryMenuContainer>
        {categories.map((category) => (
            <DirectoryItem key={category.id}  category={category} />
        ))}
        </CategoryMenuContainer>
    )
}

export default CategoryMenu