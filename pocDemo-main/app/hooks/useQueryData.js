
import {useQuery} from '@tanstack/react-query'
import {getUser} from '../services/api'


export const useUserData = (pageIndex) => useQuery({
    queryKey: ['userData' , pageIndex],
    queryFn: () =>
      getUser(pageIndex)
  })