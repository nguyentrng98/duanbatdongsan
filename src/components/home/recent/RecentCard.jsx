import React, { useState, useEffect } from "react";

const RecentCard = () => {
  const [estates, setEstates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedEstate, setSelectedEstate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchEstates = async () => {
      try {
        const response = await fetch("http://localhost:5000/posts");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setEstates(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEstates();
  }, []);

  const openModal = (estate) => {
    setSelectedEstate(estate);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="content grid3 mtop">
      {estates.map((estate, index) => {
        const { cover, category, location, name, price, type } = estate;
        return (
          <div
            className="box shadow"
            key={index}
            onClick={() => openModal(estate)}
          >
            <div className="img">
              <img src={cover} alt={name} />
            </div>
            <div className="text">
              <div className="category flex">
                <span
                  style={{
                    background:
                      category === "For Sale" ? "#25b5791a" : "#ff98001a",
                    color: category === "For Sale" ? "#25b579" : "#ff9800",
                  }}
                >
                  {category}
                </span>
                <i className="fa fa-heart"></i>
              </div>
              <h4>{name}</h4>
              <p>
                <i className="fa fa-location-dot"></i> {location}
              </p>
            </div>
            <div className="button flex">
              <div>
                <button className="btn2">{price}</button>{" "}
                <label>/sqft</label>
              </div>
              <span>{type}</span>
            </div>
          </div>
        );
      })}

      {/* Modal for estate details */}
      {isModalOpen && selectedEstate && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h2>{selectedEstate.name}</h2>
              <button className="close-btn" onClick={closeModal}>X</button>
            </div>
            <div className="modal-content">
              <div className="modal-body">
                <div className="modal-image">
                  <img src={selectedEstate.cover} alt={selectedEstate.name} />
                </div>
                <div className="modal-info">
                  <p><strong>Name:</strong> {selectedEstate.name}</p>
                  <p><strong>Location:</strong> {selectedEstate.location}</p>
                  <p><strong>Price:</strong> {selectedEstate.price}</p>
                  <p><strong>Description:</strong> {selectedEstate.description}</p>
                  <p><strong>Category:</strong> {selectedEstate.category}</p>
                  <p><strong>Type:</strong> {selectedEstate.type}</p>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn2" onClick={closeModal}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecentCard;
