import React, { useState } from 'react';

const DevelopmentBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div style={styles.bannerContainer}>
      <div style={styles.content}>
        <span style={styles.pulseDot}></span>
        <strong style={styles.warningText}>⚠️ UNDER DEVELOPMENT:</strong>
        <span style={styles.messageText}>
          This app is a prototype. Do not use for actual purchases or real financial transactions.
        </span>
      </div>
      <button 
        onClick={() => setIsVisible(false)} 
        style={styles.closeButton}
        aria-label="Close warning banner"
      >
        &times;
      </button>
    </div>
  );
};

// Clean inline styles to avoid needing extra CSS files
const styles = {
  bannerContainer: {
    backgroundColor: '#fff3cd', // Soft warning yellow
    borderBottom: '2px solid #ffeeba',
    color: '#856404', // Dark amber text for readability
    padding: '10px 20px',
    textAlign: 'center',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999, // Ensures it sits on top of navbars
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    fontSize: '14px',
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '8px',
    paddingRight: '30px', // Prevents text from hitting the close button
  },
  pulseDot: {
    width: '8px',
    height: '8px',
    backgroundColor: '#dc3545', // Red pulse
    borderRadius: '50%',
    display: 'inline-block',
    animation: 'pulse 1.5s infinite ease-in-out',
  },
  warningText: {
    fontWeight: 'bold',
  },
  messageText: {
    fontWeight: '500',
  },
  closeButton: {
    position: 'absolute',
    right: '20px',
    background: 'none',
    border: 'none',
    color: '#856404',
    fontSize: '20px',
    cursor: 'pointer',
    lineHeight: '1',
    padding: '0',
    opacity: '0.7',
    transition: 'opacity 0.2s',
  }
};

// Adding the pulse keyframes directly to the document head
if (typeof document !== 'undefined') {
  const styleSheet = document.styleSheets[0] || document.head.appendChild(document.createElement('style')).sheet;
  try {
    styleSheet.insertRule('@keyframes pulse { 0% { opacity: 0.4; } 50% { opacity: 1; } 100% { opacity: 0.4; } }', 0);
  } catch (e) {
    // Fallback if sheet compilation encounters issues environment-wise
  }
}

export default DevelopmentBanner;