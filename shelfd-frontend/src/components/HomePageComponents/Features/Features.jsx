import React from 'react';
import './Features.scss';
import { FaBook, FaChartLine, FaUsers, FaBookmark, FaComment } from 'react-icons/fa';

const Features = () => {
  const features = [
    {
      icon: <FaBook />,
      title: "Track Your Books",
      description: "Keep a digital record of your reading history, current books, and future reads."
    },
    {
      icon: <FaChartLine />,
      title: "Analyze Progress",
      description: "View detailed statistics about your reading habits and set personal goals."
    },
    {
      icon: <FaUsers />,
      title: "Join Discussions",
      description: "Connect with other readers, share reviews, and participate in book clubs."
    },
    {
      icon: <FaBookmark />,
      title: "Curate Collections",
      description: "Create and share custom book lists and recommendations with the community."
    }
  ];

  return (
    <section className="features">
      <h2>What can I do with <span className="features__title">bookmarkd.</span>?</h2>
      <div className="features__grid">
        {features.map((feature, index) => (
          <div className="features__card" key={index}>
            <div className="features__icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;