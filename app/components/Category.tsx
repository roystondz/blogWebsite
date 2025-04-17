import React, { useState } from 'react';

const VerticalCategoryMenu = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const categories = ['Tech', 'Lifestyle', 'Design'];

  return (
    <div className="vertical-category-menu">
      {categories.map((category) => (
        <div 
          key={category}
          className="category-item"
          onMouseEnter={() => setHoveredItem(category)}
          onMouseLeave={() => setHoveredItem(null)}
          onClick={() => setActiveItem(category)}
        >
          <div className="category-line"></div>
          <div className="category-text">
            {category}
          </div>
        </div>
      ))}

      <style jsx>{`
        .vertical-category-menu {
          position: absolute;
          right: -120px;
          top: 45%;
          transform: translateY(-50%);
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 40px;
          padding: 20px;
          z-index: 100;
        }
      
        .category-item {
          position: relative;
          text-align: right;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .category-line {
          position: absolute;
          right: -15px;
          top: 100%;
          width: 25px;
          height: 1px;
          background-color: black;
          transform: rotate(90deg);
          transform-origin: right center;
          transition: all 0.3s ease;
          opacity: 0.7;
        }

        .category-text {
          font-size: 18px;
          font-family: 'Montserrat', sans-serif;
          font-weight: 400;
          padding-right: 20px;
          color: black;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
        }

        .category-item:hover .category-line,
        .category-item:active .category-line {
          background-color: #3b82f6;
          opacity: 1;
        }

        .category-item:hover .category-text,
        .category-item:active .category-text {
          color: #3b82f6;
          transform: translateX(-5px);
        }

        .category-item:active .category-text {
          font-weight: 600;
        }

        /* Responsive styles */
        @media (max-width: 1440px) {
          .vertical-category-menu {
            right: -60px;
          }
        }
        media (max-width: 1340px) {
          .vertical-category-menu {
            right: -30px;
          }
        }

        @media (max-width: 1245px) {
          .vertical-category-menu {
            right:10px;
            gap: 35px;
          }
          .category-text {
            font-size: 16px;
          }
        }
        @media (max-width: 1200px) {
          .vertical-category-menu {
            right:10px;
            gap: 35px;
          }
          .category-text {
            font-size: 16px;
          }
        }

        @media (max-width: 992px) {
          .vertical-category-menu {
            right: 10px;
            gap: 30px;
          }
        }

        @media (max-width: 768px) {
          .vertical-category-menu {
            right: 10px;
            gap: 25px;
            padding: 15px;
          }
          .category-text {
            font-size: 15px;
            padding-right: 15px;
          }
          .category-line {
            right: -12px;
            width: 20px;
          }
        }

        @media (max-width: 576px) {
          .vertical-category-menu {
            right: 10px;
            gap: 20px;
            padding: 10px;
          }
          .category-text {
            font-size: 14px;
          }
        }

        @media (max-width: 400px) {
          .vertical-category-menu {
            right: 10px;
            gap: 15px;
          }
          .category-text {
            font-size: 13px;
            padding-right: 10px;
          }
          .category-line {
            right: -10px;
            width: 15px;
          }
        }
         
      `}</style>
    </div>
  );
};

export default VerticalCategoryMenu;