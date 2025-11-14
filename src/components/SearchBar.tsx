import React from "react";

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  sortOrder: "latest" | "oldest";
  onSortToggle: () => void;
  isMobile: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchQuery,
  onSearchChange,
  sortOrder,
  onSortToggle,
  isMobile,
}) => {
  return (
    <div
      style={{
        width: "100%",
        marginBottom: "20px",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        gap: "15px",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {/* Search Field */}
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Search articles..."
        style={{
          flex: 1,
          padding: "10px 15px",
          borderRadius: "12px",
          border: "1px solid #043222",
          fontFamily: "EB Garamond",
          fontSize: "16px",
        }}
      />

      {/* Sort Button */}
      <button
        onClick={onSortToggle}
        style={{
          padding: "10px 20px",
          backgroundColor: "#043222",
          color: "#FFEEAD",
          border: "none",
          borderRadius: "12px",
          cursor: "pointer",
          fontFamily: "EB Garamond",
          fontSize: "16px",
          minWidth: "140px",
        }}
      >
        Sort: {sortOrder === "latest" ? "Latest → Oldest" : "Oldest → Latest"}
      </button>
    </div>
  );
};

export default SearchBar;
