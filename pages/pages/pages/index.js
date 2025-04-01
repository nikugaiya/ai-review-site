import { useState } from "react";

export default function ReviewGenerator() {
  const [selectedKeywords, setSelectedKeywords] = useState([]);
  const [generatedReview, setGeneratedReview] = useState("");

  const keywords = {
    beef: ["Tender and juicy", "Rich texture", "Melts in the mouth"],
    chicken: ["Tender and smooth", "Refreshing taste", "Perfect with sauces"],
    sauces: ["Aromatic", "Rich flavor", "Thick sauce"],
    toppings: ["Enhances flavor", "Smooth texture", "Rich layers of taste"],
    snacks: ["Delicate and refined", "Tender and delicious", "Satisfying"]
  };

  const handleSelectKeyword = (keyword) => {
    setSelectedKeywords((prev) =>
      prev.includes(keyword) ? prev.filter((k) => k !== keyword) : [...prev, keyword]
    );
  };

  const generateReview = () => {
    if (selectedKeywords.length === 0) {
      setGeneratedReview("Please select at least one keyword.");
      return;
    }
    const review = `This restaurant offers ${selectedKeywords.join(", ")}. A must-try experience!`;
    setGeneratedReview(review);
  };

  return (
    <div style={{ padding: 20, maxWidth: 600, margin: "auto" }}>
      <h1>AI Review Generator</h1>
      {Object.entries(keywords).map(([category, words]) => (
        <div key={category} style={{ marginBottom: 10 }}>
          <h2>{category}</h2>
          {words.map((word) => (
            <button
              key={word}
              onClick={() => handleSelectKeyword(word)}
              style={{
                margin: 5,
                padding: 5,
                border: selectedKeywords.includes(word) ? "2px solid black" : "1px solid gray"
              }}
            >
              {word}
            </button>
          ))}
        </div>
      ))}
      <button onClick={generateReview} style={{ display: "block", marginTop: 10 }}>
        Generate Review
      </button>
      <textarea value={generatedReview} readOnly style={{ width: "100%", marginTop: 10 }} />
    </div>
  );
}
