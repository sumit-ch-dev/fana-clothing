import { useState, useEffect, Fragment } from 'react'
import { selectCategoriesMap, selectIsCategoryLoading } from '../../store/categories/category.selector'
import { useParams } from 'react-router-dom'
import ProductCard from '../../components/product-card/product-card.component'
import { CategoryContainer, CategoryTitle } from './category.styles'
import { useSelector } from 'react-redux'
import Spinner from '../../components/spinner/spinner.component'


type CategoryRouteParams = {
    category: string
}

const Category = () => {
    const { category } = useParams<keyof CategoryRouteParams>() as CategoryRouteParams
    //console.log("render/rerender category component")
    const categoriesMap = useSelector(selectCategoriesMap)
    const isLoading = useSelector(selectIsCategoryLoading)
    const [products, setProducts] = useState(categoriesMap[category])


    useEffect(() => {
        //console.log("effect fired calling setproducts")
        setProducts(categoriesMap[category])
    }, [category, categoriesMap])

    return (
        <Fragment>
            <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
            {
                isLoading ? <Spinner /> :
                    <CategoryContainer>
                        {
                            products && products.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))
                        }
                    </CategoryContainer>
            }

        </Fragment>
    )
}

export default Category