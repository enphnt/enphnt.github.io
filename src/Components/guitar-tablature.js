import React, { useEffect, useState } from 'react';
import TabbedContent from './tabbed-content';

const GuitarTablature = ({ tabs, title }) => {
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth <= 768 : false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsMobile(window.innerWidth <= 768);
    });
  }, []);

  const styles = {
    container: {
      fontFamily: "Courier New, monospace",
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      alignContent: "center",
      justifyContent: "center",
      padding: 16,
      marginTop: 8,
      borderRadius: 2,
      // inset shadow:
      boxShadow: "inset 0 0 25px rgb(232, 232, 232)",
      backgroundColor: "white",
      overflowY: "hidden",
    }
  };

  const renderTabs = () => tabs.map(tab => {
    return {
      label: tab.label,
      content: (
        <pre style={styles.container}>
          {tab.content}
        </pre>
      ),
    };
  });

  return (
    <div style={{ padding: 8 }}>
      <br />
      <TabbedContent tabs={renderTabs()} title={title} />
    </div>
  );
};

export default GuitarTablature;
