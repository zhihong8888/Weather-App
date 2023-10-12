import SecureLS from 'secure-ls';

export const STORAGE_KEYS = {
  SEARCH_HISTORY: 'SHVVQ98IU',
}

const ls = new SecureLS({encodingType: 'aes', isCompression: false});

export interface ISearchHistory {
  city: string
  country: string
  dateTime: string
}

export const getSearchHistoryFromLocal = () => {
  return localStorage.getItem(STORAGE_KEYS.SEARCH_HISTORY)
}

export const setSearchHistoryToLocal = (time: ISearchHistory[]) => {
  localStorage.setItem(STORAGE_KEYS.SEARCH_HISTORY, JSON.stringify(time))
}

export const removeLSearchHistoryFromLocal = () => {
  localStorage.removeItem(STORAGE_KEYS.SEARCH_HISTORY)
}
