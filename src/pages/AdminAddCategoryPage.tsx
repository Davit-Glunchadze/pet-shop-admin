import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { useNavigate, useParams } from "react-router-dom";
import { addCategory, updateCategory } from "../features/categories/categorySlice";

import {
  Container,
  BackButton,
  Card,
  Title,
  FormField,
  ButtonRow,
  SaveButton,
  CancelButton,
} from "../components/styles/AdminAddCategoryPage.styled";


const AdminAddCategoryPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  //კატეგორიის ID-ს ვიღებთ URL-დან
  const { id } = useParams<{ id: string }>();
  //თუ ID არსებობს, მაშინ ეს არის რედაქტირების რეჟიმი
  const isEditMode = Boolean(id);

  const { categories } = useAppSelector((state) => state.category);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    if (isEditMode && id) {
      const existingCategory = categories.find((c) => c.id === id);
      if (existingCategory) {
        setFormData({
          title: existingCategory.title,
          description: existingCategory.description,
        });
      }
    }
  }, [id, categories]);

  //ცვლილების დამუშავება
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  //ფორმის გაგზავნის დამუშავება
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (isEditMode && id) {
        // კატეგორიის განახლება
        console.log("Updating with ID:", id);
        await dispatch(updateCategory({ id, updatedData: formData })).unwrap(); 
      } else {
        // ახალი კატეგორიის დამატება
        await dispatch(addCategory(formData)).unwrap();
      }
      navigate("/categories");
    } catch (error) {
      console.error("Failed to submit category:", error);
    }
  };

  return (
    <Container>
      <BackButton onClick={() => navigate("/categories")}>
        ← Back to Categories
      </BackButton>
      <Card>
        <Title>{isEditMode ? "Edit Category" : "Add New Category"}</Title>
        <form onSubmit={handleSubmit}>
          <FormField>
            <label htmlFor="title">Category Title</label>
            <input
              id="title"
              name="title"
              type="text"
              value={formData.title}
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
              required
            />
          </FormField>
          <ButtonRow>
            <CancelButton type="button" onClick={() => navigate("/categories")}>
              Cancel
            </CancelButton>
            <SaveButton type="submit">
              {isEditMode ? "Update Category" : "Save Category"}
            </SaveButton>
          </ButtonRow>
        </form>
      </Card>
    </Container>
  );
};

export default AdminAddCategoryPage;
