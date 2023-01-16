import React from 'react'

type Props = {
  hook: [string, React.Dispatch<React.SetStateAction<string>>]
}

export default function Search({ hook }: Props) {
  const [searchQuery, setSearchQuery] = hook

  return (
    <input
      type="search"
      id="searchProduct"
      name="searchProduct"
      placeholder="Search"
      className=""
      value={searchQuery}
      onChange={e => setSearchQuery(e.target.value)}
    />
  )
}
