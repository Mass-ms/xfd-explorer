import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import supabase from "../lib/supabaseClient";
import XfdCard from "../components/XfdCard";

interface Tag {
  id: number;
  name: string;
}

interface XfdTagRelation {
  tags: Tag;
}

interface XfdContent {
  id: number;
  title: string;
  url: string;
  platform: string;
  description?: string;
  user_id: string;
  created_at: string;
  xfd_tags: XfdTagRelation[];
}

const Home: React.FC = () => {
  const [xfdContents, setXfdContents] = useState<XfdContent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchXfdContents = async () => {
      setLoading(true);
      setError(null);
      try {
        const { data, error } = await supabase
          .from<XfdContent>("xfd_contents")
          .select("*, xfd_tags(tags(*))")
          .order("created_at", { ascending: false })
          .range(0, 9);
        if (error) {
          throw error;
        }
        setXfdContents(data || []);
      } catch (err: any) {
        console.error("Error fetching XFD contents:", err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchXfdContents();
  }, []);

  const xfdListStyle: React.CSSProperties = {
    display: "flex",
    flexWrap: "wrap",
    gap: "16px",
    justifyContent: "center",
  };

  const xfdItemStyle: React.CSSProperties = {
    flex: "1 1 calc(33.333% - 16px)",
    boxSizing: "border-box",
    maxWidth: "100%",
  };

  return (
    <div className="container">
      <h1>最近登録されたXFD</h1>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {!loading && !error && (
        <div style={xfdListStyle}>
          {xfdContents.length === 0 && <p>No XFD contents available.</p>}
          {xfdContents.map((xfd) => (
            <div key={xfd.id} style={xfdItemStyle}>
              <XfdCard content={xfd} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;