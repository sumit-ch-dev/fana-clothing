import { createSelector } from 'reselect'

const selectCategoriesReducer = (state) => state.categories

//memoization of categories
//does not trigger a re-render if the state.categories.categories is the same
export const selectCategories = createSelector(
    [selectCategoriesReducer],
    (categoriesSlice) => categoriesSlice.categories
)

export const selectCategoriesMap = createSelector(
    [selectCategories],
    (categories) => categories.reduce((accumulator, {title, items}) => {
        accumulator[title.toLowerCase()] = items
        return accumulator
    }, {})
)

