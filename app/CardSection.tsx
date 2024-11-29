import React from "react";

const CardSection = () => {
  const cards = [
    {
      icon: "🌟",
      title: "Card 1",
      description:
        "Streamline your data imports with our intuitive interface..",
    },
    { icon: "🚀", title: "Card 2", description: "This is the second card." },
    { icon: "💡", title: "Card 3", description: "This is the third card." },
  ];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        padding: "20px",
      }}
    >
      {cards.map((card, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "20px",
            width: "150px",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: "40px" }}>{card.icon}</div>
          <h3>{card.title}</h3>
          <p>{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CardSection;
