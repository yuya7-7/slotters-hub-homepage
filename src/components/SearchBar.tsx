import React from 'react'

interface SearchBarProps {
  searchTerm: string
  onSearchChange: (term: string) => void
  selectedTag: string
  onTagSelect: (tag: string) => void
  tags: string[]
  totalCount: number
}

export const SearchBar: React.FC<SearchBarProps> = ({
  searchTerm,
  onSearchChange,
  selectedTag,
  onTagSelect,
  tags,
  totalCount
}) => {
  return (
    <div className="search-section">
      <div className="search-bar-container">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          className="search-input"
          placeholder="機種名・ひらがな・メーカー名で爆速検索...（例: 北斗, モンキー, サミー）"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
        {searchTerm && (
          <button className="search-clear-btn" onClick={() => onSearchChange('')}>
            ✕
          </button>
        )}
      </div>

      <div className="filter-tags">
        <button
          className={`filter-btn ${selectedTag === 'all' ? 'active' : ''}`}
          onClick={() => onTagSelect('all')}
        >
          すべて ({totalCount})
        </button>
        {tags.map((tag) => (
          <button
            key={tag}
            className={`filter-btn ${selectedTag === tag ? 'active' : ''}`}
            onClick={() => onTagSelect(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  )
}
