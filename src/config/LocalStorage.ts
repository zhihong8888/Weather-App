import secureLocalStorage from 'react-secure-storage'


export const STORAGE_KEYS = {
  SEARCH_HISTORY: 'SHVVQ98IU',
}

export interface ISearchHistory {
  city: string
  country: string
  dateTime: string
}

export const getSearchHistoryFromLocal = () => {
  return secureLocalStorage.getItem(STORAGE_KEYS.SEARCH_HISTORY)
}

export const setSearchHistoryToLocal = (time: ISearchHistory[]) => {
  secureLocalStorage.setItem(STORAGE_KEYS.SEARCH_HISTORY, JSON.stringify(time))
}

export const removeLSearchHistoryFromLocal = () => {
  secureLocalStorage.removeItem(STORAGE_KEYS.SEARCH_HISTORY)
}
