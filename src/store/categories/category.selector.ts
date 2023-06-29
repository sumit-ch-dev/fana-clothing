import { createSelector } from 'reselect'
import { CategoriesState } from './category.reducer'
import { CategoryMap } from './category.types'
import { RootState } from '../store'

const selectCategoriesReducer = (state: RootState): CategoriesState => state.categories



//memoization of categories
//does not trigger a re-render if the state.categories.categories is the same
export const selectCategories = createSelector(
    [selectCategoriesReducer],
    (categoriesSlice) => categoriesSlice.categories
)

export const selectCategoriesMap = createSelector(
    [selectCategories],
    (categories): CategoryMap => categories.reduce((accumulator, {title, items}) => {
        accumulator[title.toLowerCase()] = items
        return accumulator
    }, {} as CategoryMap)
)


export const selectIsCategoryLoading = createSelector(
    [selectCategoriesReducer],
    (categoriesSlice) => categoriesSlice.isLoading
)
