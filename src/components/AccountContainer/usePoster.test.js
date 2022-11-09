import { act, renderHook } from '@testing-library/react'
import usePoster from './hook'

describe('usePoster', () => {
  it('should change post per page value', () => {
    const { result } = renderHook(() => usePoster())
    act(() => {
      result.current.setPostsPerPage(4)
    })
    expect(result.current.postsPerPage).toBe(4)
  })
})
