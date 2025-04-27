import React, { useState } from "react";

export interface Tag {
  id: number;
  name: string;
}

export interface XfdTagRelation {
  tags: Tag;
}

export interface XfdContent {
  id: number;
  title: string;
  url: string;
  platform: string;
  description?: string;
  created_at: string;
  xfd_tags: XfdTagRelation[];
}

interface XfdCardProps {
  content: XfdContent;
}

const XfdCard: React.FC<XfdCardProps> = ({ content }) => {
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

  const toggleDescriptionVisibility = () => {
    setIsDescriptionVisible(!isDescriptionVisible);
  };

  const tagList = content.xfd_tags
    .map((relation) => relation.tags.name)
    .join(", ");

  // Extract YouTube video ID from URL
  const getYouTubeVideoId = (url: string) => {
    const urlObj = new URL(url);
    if (urlObj.hostname === "www.youtube.com" || urlObj.hostname === "youtube.com") {
      return urlObj.searchParams.get("v");
    } else if (urlObj.hostname === "youtu.be") {
      return urlObj.pathname.slice(1);
    }
    return null;
  };

  const videoId = getYouTubeVideoId(content.url);
  const thumbnailUrl = videoId
    ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
    : null;

  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "4px",
        padding: "1rem",
        width: "250px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        backgroundColor: "#fff",
      }}
    >
      {thumbnailUrl && (
        <img
          src={thumbnailUrl}
          alt={`${content.title} thumbnail`}
          style={{ width: "100%", borderRadius: "4px", marginBottom: "0.5rem" }}
        />
      )}
      <h3 style={{ margin: "0 0 0.5rem 0" }}>{content.title}</h3>
      <p style={{ margin: "0 0 0.5rem 0", fontSize: "0.8rem", color: "#666" }}>
        {new Date(content.created_at).toLocaleDateString()}
      </p>
      {/* {content.description && (
        <div>
          <button
            onClick={toggleDescriptionVisibility}
            style={{
              marginBottom: "0.5rem",
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              padding: "0.5rem",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            {isDescriptionVisible ? "Hide Description" : "Show Description"}
          </button>
          {isDescriptionVisible && (
            <p style={{ fontSize: "0.9rem", margin: "0 0 0.5rem 0" }}>
              {content.description}
            </p>
          )}
        </div>
      )} */}
      {/* <p style={{ fontSize: "0.9rem", margin: "0 0 0.5rem 0" }}>
        <strong>Platform:</strong> {content.platform}
      </p> */}
      {tagList && (
        <p
          style={{ fontSize: "0.8rem", color: "#555", margin: "0 0 0.5rem 0" }}
        >
          <strong>Tags:</strong> {tagList}
        </p>
      )}
      <a
        href={content.url}
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "#007bff", fontWeight: "bold", textDecoration: "none" }}
      >
        XFDを見る
      </a>
    </div>
  );
};

export default XfdCard;