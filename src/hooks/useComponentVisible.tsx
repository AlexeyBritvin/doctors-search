import { useEffect, useRef, useState } from 'react'

function useComponentVisible(initialIsVisible: boolean, onClose?: () => void) {
  const [isComponentVisible, setIsComponentVisible] = useState(initialIsVisible)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleHideDropdown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsComponentVisible(false)
        onClose && onClose()
      }
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as HTMLDivElement)) {
        setIsComponentVisible(false)
        onClose && onClose()
      }
    }

    document.addEventListener('keydown', handleHideDropdown, true)
    document.addEventListener('click', handleClickOutside, true)
    return () => {
      document.removeEventListener('keydown', handleHideDropdown, true)
      document.removeEventListener('click', handleClickOutside, true)
    }
  }, [isComponentVisible])

  return { ref, isComponentVisible, setIsComponentVisible }
}

export default useComponentVisible
