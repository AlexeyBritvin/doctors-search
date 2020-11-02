export type FilterFn<T> = (item: T, filter?: MainFilter) => boolean

export interface Filter {
  [key: string]: boolean
}

export interface Availability extends Filter {
  today: boolean
  nextThreeDays: boolean
  nextTwoWeeks: boolean

  telehealth: boolean
  acceptNew: boolean
}

export interface MainFilter {
  availability: Availability
  specialities: string[]
  insurance: string[]
}

export interface AvailabilityFns<T> extends FilterFns<T> {
  today: FilterFn<T>
  nextThreeDays: FilterFn<T>
  nextTwoWeeks: FilterFn<T>

  telehealth: FilterFn<T>
  acceptNew: FilterFn<T>
}

export interface MainFilterFns<T> extends FilterFns<T> {
  availability: AvailabilityFns<T>
  specialities: FilterFn<T>
  insurance: FilterFn<T>
}

export interface FilterFns<T> {
  [key: string]: FilterFn<T> | FilterFns<T>
}
