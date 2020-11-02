import { FilterFn, FilterFns, MainFilter } from '../models/main-filter.model';

export const applyMultipleFilters = <T>(data: T[], filter: MainFilter, filterFns: FilterFns<T>): T[] => {
  const filterKeys = Object.keys(filterFns)

    const filtered = data.filter(item => {
      return filterKeys.every((key: string) => {
        if (filter[key] === true) {
          return (filterFns[key] as FilterFn<T>)(item)
        }

        if (typeof filter[key] === 'object' && !Array.isArray(filter[key])) {
          const innerKeys = Object.keys(filter[key])

          return innerKeys.every(innerKey => {
            if (filter[key][innerKey] === true) {
              return (filterFns[key][innerKey] as FilterFn<T>)(item)
            }

            return true
          })
        }

        if (Array.isArray(filter[key]) && filter[key].length) {
          return (filterFns[key] as FilterFn<T>)(item, filter)
        }

        return true
      })
    })

    return filtered
}
