import React, { useState } from 'react';
import './index.css';

const App = () => {
  const sendWhatsAppMessage = (phoneNumber, message) => {
    const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.location.href = whatsappLink;
  };

  const [expandedImage, setExpandedImage] = useState(null);
  const [currentProduct, setCurrentProduct] = useState(null);

  const expandImage = (product) => {
    setExpandedImage(product);
    setCurrentProduct(product);
  };

  const closeExpandedImage = () => {
    setExpandedImage(null);
    setCurrentProduct(null);
  };

  const products = [
    {
      name: "Vestido Rojo Vino",
      images: ["public/RojoVino/RojoVino-Atras.jpg","public/RojoVino/RojoVino-Frent.jpg"],
      price: "$300"
    },
    {
      name: "Vestido Morado Liso",
      images: ["public/MoradoLiso/VestidoMoradoLisoFrent.jpg","public/MoradoLiso/VestidoMoradoLisoCerca.jpg","public/MoradoLiso/VestidoMoradoLisoEspalda.jpg"],
      price: "$200"
    },
    {
      name: "Vestido Verde",
      images: ["public/VerdeFlor/VestidoverdeFlorFrente1.jpg","public/VerdeFlor/VestidoVerdeFloresCerca.jpg","public/VerdeFlor/VestidoverdeFlorAtras.jpg"],
      price: "$1200"
    },
    {
      name: "Morado Piedra",
      images: ["public/MoradoPiedra/VestidoMoradoPiedrasFrente.jpg","public/MoradoPiedra/VestidoMoradoPiedrasCerca.jpg","public/MoradoPiedra/VestidoMoradoPiedrasAtras.jpg"],
      price: "$200"
    },

    // Agrega más objetos de productos aquí
  ];

  return (
    <div className="container">
      <h1>El Bazar 3.16</h1>
      <div className="product-list">
        {products.map((product, index) => (
          <div className="product-item" key={index}>
            <img
              src={product.images[0]}
              alt="Producto"
              onClick={() => expandImage(product)}
            />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button onClick={() => sendWhatsAppMessage("9811201339", `¡Hola! Me interesa comprar el producto "${product.name}" en El Bazar 3.16. ¿Podrías proporcionarme más información?`)}>Me interesa</button>
          </div>
        ))}
      </div>

      {expandedImage && (
        <div className="expanded-image-overlay" onClick={closeExpandedImage}>
          <div className="expanded-image-container">
            {currentProduct.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt="Producto ampliado"
                className={index === 0 ? "expanded-image active" : "expanded-image"}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
  