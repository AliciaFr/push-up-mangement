import { titleFont, subTitleFont } from "../utils/fonts";

const PageTitle = () => {
  return (
    <div className="page-title-container">
      <h1 className={titleFont.className}>Push Up Management</h1>
      <h2 className={subTitleFont.className}>
        Management für Musiker und Buchautoren
      </h2>
    </div>
  );
};

export default PageTitle;
