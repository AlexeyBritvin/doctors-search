import { useEffect, useState } from 'react'
import { CheckboxView } from '../models/checkbox-view.model'

function useGenerateCheckboxes(checkboxData: string[] = [], search: string) {
  const [checkboxes, setCheckboxes] = useState<CheckboxView[]>([])

  useEffect(() => {
    const filterData = (arr: string[], value = '') => {
      if (value.length) {
        return arr.filter((item) => item.toLowerCase().indexOf(value.toLowerCase()) >= 0)
      }

      return arr
    }

    const generateCheckboxes = (arr: string[]): CheckboxView[] => {
      return filterData(arr, search).map((item) => ({
        name: item.split(' ').join('-'),
        label: item,
      }))
    }

    const newCheckboxes = generateCheckboxes(checkboxData)
    setCheckboxes(newCheckboxes)
  }, [checkboxData, search])

  return checkboxes
}

export default useGenerateCheckboxes
