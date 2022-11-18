import { useEffect, useState } from 'react'

import useAccountStore from '../../store'

export default function usePoster() {
  const [postsPerPage, setPostsPerPage] = useState(5)
  const currentPage = useAccountStore((state) => state.currentPage)
  const accounts = useAccountStore((state) => state.accounts)
  const howManyPages = Math.ceil(accounts.length / postsPerPage)

  useEffect(() => {
    if (currentPage > 1) setPostsPerPage(4)
    if (currentPage >= howManyPages) setPostsPerPage(5)
    if (currentPage === 1) setPostsPerPage(5)
  }, [currentPage])

  return {
    postsPerPage,
    setPostsPerPage
  }
}
