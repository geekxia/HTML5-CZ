import { useContext } from 'react'
import ThemeContext from '@/styles/theme'

function useTheme() {
  return useContext(ThemeContext)
}

export default useTheme
