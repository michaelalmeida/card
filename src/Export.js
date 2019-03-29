import React from "react";
import domtoimage from 'dom-to-image';

const dowloadCard = async () => {
    const card = document.getElementById("card");

    const dataUrl = await domtoimage.toPng(card);
  
    var link = document.createElement("a");
    document.body.appendChild(link);
  
    link.setAttribute('type', 'hidden');
    link.download = "card.png";
    link.href = dataUrl;
    link.click();
}

const Export = () => (
    <button className="btn" onClick={dowloadCard} title="Download">
      Baixar cartão
    </button>
  );
  
  export default Export;