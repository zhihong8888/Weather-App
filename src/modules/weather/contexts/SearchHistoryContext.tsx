import React, { Dispatch, SetStateAction, createContext, useState } from 'react'
import { ISearchHistory } from '../../../config/LocalStorage'

interface SearchContextValue {
  searchHistory: ISearchHistory[]
  setSearchHistory: Dispatch<SetStateAction<ISearchHistory[]>>
  search: string
  setSearch: Dispatch<SetStateAction<string>>
  onDeleteSearchHistory: (city: string) => void
}

const SearchContext = createContext<SearchContextValue>({
  searchHistory: [],
  setSearchHistory: () => {},
  search: '',
  setSearch: () => {},
  onDeleteSearchHistory: (city: string) => {},
})

interface SearchContextProviderProps {
  children: React.ReactNode
}

const SearchContextProvider: React.FC<SearchContextProviderProps> = ({ children }) => {
  const [searchHistory, setSearchHistory] = useState<ISearchHistory[]>([])
  const [search, setSearch] = useState<string>('')

  const onDeleteSearchHistory = (city: string) => {
    setSearchHistory((oldHistories) => {
      const historyToRemove = oldHistories.find((item) => item.city === city)
      return oldHistories.filter((item) => item !== historyToRemove)
    })
  }

  return (
    <SearchContext.Provider
      value={{
        searchHistory,
        setSearchHistory,
        search,
        setSearch,
        onDeleteSearchHistory,
      }}
    >
      {children}
    </SearchContext.Provider>
  )
}
export { SearchContext, SearchContextProvider }
