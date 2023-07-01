import { useNavigate } from 'react-router-dom'
import { DirectoryCategory } from '../category-menu/category-menu.component'
import {
  DirectoryItemContainer,
  BackgroundImage,
  Body,
} from './directory-item.styles'
import { FC } from 'react'

type DirectoryItemProps = {
  category: DirectoryCategory
}


const DirectoryItem: FC<DirectoryItemProps> = ({category}) => {
  const { title, imageurl, route } = category
  const navigate = useNavigate()

  const onNavigateHandler = () => {
    navigate(route)
  }

  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageurl={imageurl} />
      <Body>
        <h2>{title}</h2>
        <p>shop now</p>
      </Body>
    </DirectoryItemContainer>
  )
}

export default DirectoryItem;