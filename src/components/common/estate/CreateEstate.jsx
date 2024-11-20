import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const CreateEstate = () => {
  const [estateName, setEstateName] = useState("");
  const [estateLocation, setEstateLocation] = useState("");
  const [estatePrice, setEstatePrice] = useState("");
  const [estateDescription, setEstateDescription] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [category, setCategory] = useState("For Rent");
  const [type, setType] = useState("Apartment");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newEstate = {
      name: estateName,
      location: estateLocation,
      price: estatePrice,
      description: estateDescription,
      category: category,
      type: type,
      cover: coverImage, // Lưu URL ảnh từ input text
    };

    try {
      const response = await fetch("http://localhost:5000/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newEstate),
      });

      if (response.ok) {
        alert("Estate created successfully!");
        navigate("/");
      } else {
        alert("Failed to create estate");
      }
    } catch (error) {
      console.error("Error creating estate:", error);
      alert("An error occurred while creating estate");
    }
  };

  return (
    <div className="create-estate-form">
      <h1>Create New Estate</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Estate Name:</label>
          <input
            type="text"
            value={estateName}
            onChange={(e) => setEstateName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Location:</label>
          <input
            type="text"
            value={estateLocation}
            onChange={(e) => setEstateLocation(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Price:</label>
          <input
            type="text"
            value={estatePrice}
            onChange={(e) => setEstatePrice(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Category:</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="For Rent">For Rent</option>
            <option value="For Sale">For Sale</option>
          </select>
        </div>
        <div className="form-group">
          <label>Type:</label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            required
          >
            <option value="Apartment">Apartment</option>
            <option value="Commercial">Commercial</option>
            <option value="Homes & Villas">Homes & Villas</option>
            <option value="Offices">Offices</option>
            <option value="Condos">Condos</option>
          </select>
        </div>
        <div className="form-group">
          <label>Cover Image URL:</label>
          <input
            type="text"
            value={coverImage}
            onChange={(e) => setCoverImage(e.target.value)}
            placeholder="Enter image URL"
          />
        </div>
        <div className="form-group">
        <label>Description:</label>
        <input
            type="text"
            value={estateDescription}
            onChange={(e) => setEstateDescription(e.target.value)}
          />
        </div>
        <button type="submit" className="submit-btn">Create Estate</button>
      </form>
    </div>
  );
};

export default CreateEstate;
