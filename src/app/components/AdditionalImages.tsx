import ParagraphImage from "./Image";

const AdditionalImages = () => {
  return (
    <div className="additional-images-container">
      <ParagraphImage
        src="/image4cropped.jpg"
        alt="Dominik Hülshorst spielt leidenschaftlich am Schlagzeug"
        size={`(max-width: 768px) 100vw, (max-width: 1200px) 60vw`}
      />
      <ParagraphImage
        src="/image5.jpg"
        alt="Dominik Hülshorst spielt leidenschaftlich am Schlagzeug"
        size={`(max-width: 768px) 100vw, (max-width: 1200px) 60vw`}
      />
      <ParagraphImage
        src="/image6.jpg"
        alt="Dominik Hülshorst mit zwei anderen Bandmitgliedern"
        size={`(max-width: 768px) 100vw, (max-width: 1200px) 60vw`}
      />
    </div>
  );
};

export default AdditionalImages;
