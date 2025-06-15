import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchCategories } from "../features/categories/categorySlice";
import { useNavigate } from "react-router-dom";
import {
  addAnimal,
  linkAnimalToCategory,
} from "../features/animals/animalsSlice";

import {
  Container,
  BackButton,
  Card,
  Title,
  FormField,
  CheckboxField,
  ButtonRow,
  SaveButton,
  CancelButton,
} from "../components/styles/AdminAddPetPage.styled";

const AdminAddPetPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    priceUSD: 0,
    priceGEL: 0,
    description: "",
    isPopular: false,
    stock: 0,
    categoryId: 0,
    imageUrl: "",
  });

  const dispatch = useAppDispatch();
  const { categories } = useAppSelector((state) => state.category);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
          : type === "number"
          ? Number(value)
          : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await dispatch(
        addAnimal({
          ...formData,
          category: categoryTitle,
        })
      ).unwrap();

      await dispatch(
        linkAnimalToCategory({
          animalId: result.id,
          categoryId: formData.categoryId,
        })
      );

      navigate("/");
    } catch (err) {
      console.error("Error adding animal:", err);
    }
  };

  const selectedCategory = categories.find(
    (cat) => cat.id === formData.categoryId
  );
  const categoryTitle = selectedCategory?.data?.[0]?.title || "";

  return (
    <Container>
      <BackButton onClick={() => navigate("/")}>← Back to Pets</BackButton>
      <Card>
        <Title>Add New Pet</Title>

        {formData.imageUrl && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "1rem",
            }}
          >
            <img
              src={formData.imageUrl}
              alt={formData.name || "Pet preview"}
              style={{ width: "120px", height: "120px", objectFit: "contain" }}
            />
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <FormField>
            <label htmlFor="name">Pet Name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </FormField>

          <FormField>
            <label htmlFor="imageUrl">Image URL</label>
            <input
              id="imageUrl"
              name="imageUrl"
              type="text"
              value={formData.imageUrl}
              onChange={handleChange}
              placeholder="https://example.com/image.png"
            />
          </FormField>

          <FormField>
            <label htmlFor="categoryId">Category</label>
            <select
              id="categoryId"
              name="categoryId"
              value={formData.categoryId}
              onChange={handleChange}
              required
            >
              <option value={0}>Select a category</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.data?.[0]?.title}
                </option>
              ))}
            </select>
          </FormField>

          <FormField>
            <label htmlFor="priceUSD">Price (USD)</label>
            <input
              id="priceUSD"
              name="priceUSD"
              type="number"
              value={formData.priceUSD}
              onChange={handleChange}
              required
            />
          </FormField>

          <FormField>
            <label htmlFor="priceGEL">Price (GEL)</label>
            <input
              id="priceGEL"
              name="priceGEL"
              type="number"
              value={formData.priceGEL}
              onChange={handleChange}
              required
            />
          </FormField>

          <FormField>
            <label htmlFor="stock">Stock</label>
            <input
              id="stock"
              name="stock"
              type="number"
              value={formData.stock}
              onChange={handleChange}
              required
            />
          </FormField>

          <FormField>
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </FormField>

          <CheckboxField>
            <input
              id="isPopular"
              name="isPopular"
              type="checkbox"
              checked={formData.isPopular}
              onChange={handleChange}
            />
            <span>Popular Pet</span>
          </CheckboxField>

          <ButtonRow>
            <CancelButton type="button" onClick={() => navigate("/")}>
              Cancel
            </CancelButton>
            <SaveButton type="submit">Save Pet</SaveButton>
          </ButtonRow>
        </form>
      </Card>
    </Container>
  );
};

export default AdminAddPetPage;
