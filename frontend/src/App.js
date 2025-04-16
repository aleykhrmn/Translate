import React, { useState } from "react";
import axios from "axios";

function App() {
  const [text, setText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [targetLang, setTargetLang] = useState("en"); // Varsayılan: İngilizce

  const handleTranslate = async () => {
    try {
      const response = await axios.post("http://localhost:8000/translate", {
        text,
        target_lang: targetLang,
      });
      setTranslatedText(response.data.translated_text);
    } catch (error) {
      console.error("Çeviri hatası:", error);
    }
  };

  return (
    <div
      style={{
        padding: "2rem",
        backgroundColor: "#B2C69F",
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        boxSizing: "border-box",
        overflow: "hidden",
      }}
    >
      <h2 style={{ marginTop: "2rem", marginBottom: "1rem", fontSize: "2rem" }}>
        Metin Çevirisi
      </h2>

      <label style={{ marginBottom: "1rem" }}>
        Hedef Dil: 
        <select
          value={targetLang}
          onChange={(e) => setTargetLang(e.target.value)}
        >
          <option value="en">İngilizce</option>
          <option value="tr">Türkçe</option>
        </select>
      </label>

      <textarea
        rows="8"
        cols="60"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Çevirmek istediğin metni yaz..."
      />
      <br />

      <button onClick={handleTranslate}>Çevir</button>

      {translatedText && (
        <textarea
          rows="8"
          cols="60"
          value={translatedText}
          readOnly
          style={{
            marginTop: "1rem",
            padding: "0.5rem",
            border: "1px solid #ccc",
            borderRadius: "4px",
            backgroundColor: "#f9f9f9",
            resize: "none",
          }}
        />
      )}
    </div> // ← bu kapanış eksikti
  );
}

export default App;
