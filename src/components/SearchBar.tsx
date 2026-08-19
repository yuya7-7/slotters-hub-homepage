import React from 'react'

interface SearchBarProps {
  searchTerm: string
  onSearchChange: (term: string) => void
}

export const SearchBar: React.FC<SearchBarProps> = ({
  searchTerm,
  onSearchChange
}) => {
  return (
    <div className="search-section">
      <div className="search-bar-container">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          className="search-input"
          placeholder="機種名・ひらがなで検索...（例: 北斗, モンキー, かぐや様）"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
        {searchTerm && (
          <button className="search-clear-btn" onClick={() => onSearchChange('')}>
            ✕
          </button>
        )}
      </div>
    </div>
  )
}
