export const SectionTwo: React.FC = () => {
  // Example data for the cards
  const cards = [
    { title: "Card Title 1", points: ["Point 1", "Point 2", "Point 3"] },
    { title: "Card Title 2", points: ["Point 1", "Point 2", "Point 3"] },
    { title: "Card Title 3", points: ["Point 1", "Point 2", "Point 3"] },
    { title: "Card Title 4", points: ["Point 1", "Point 2", "Point 3"] },
  ];

  return (
    <div
      id="SectionTwo"
      className="flex flex-wrap items-center justify-center gap-20 lg:grid lg:grid-cols-2 lg:gap-20"
    >
      {cards.map((card, index) => (
        <GlossyCard key={index} title={card.title} points={card.points} />
      ))}
    </div>
  );
};

const GlossyCard: React.FC<{
  title: string;
  points: string[];
}> = ({ title, points }) => {
  return (
    <div className="flex flex-col bg-white/30 border border-gray-300 rounded-lg p-4 shadow-lg backdrop-blur-md hover:backdrop-blur-sm transition-all">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <ul>
        {points.map((point, index) => (
          <li key={index} className="text-sm mb-1">
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
};
