import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchCategories } from "../features/categories/categorySlice";
import {
  addAnimal,
  linkAnimalToCategory,
  updateAnimal,
} from "../features/animals/animalsSlice";
import { useNavigate, useParams } from "react-router-dom";

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
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { id } = useParams<{ id?: string }>();
  const isEditMode = Boolean(id);

  const { categories } = useAppSelector((state) => state.category);
  const existingAnimal = useAppSelector((state) =>
    state.animal.animals.find((a) => a.id === id)
  );

  const [formData, setFormData] = useState({
    name: "",
    priceUSD: 0,
    priceGEL: 0,
    description: "",
    isPopular: false,
    stock: 0,
    categoryId: "",
    imageUrl: "",
  });

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  useEffect(() => {
    if (isEditMode && existingAnimal) {
      const { id: _, ...data } = existingAnimal;
      setFormData({
        name: data.name || "",
        priceUSD: data.priceUSD ?? 0,
        priceGEL: data.priceGEL ?? 0,
        description: data.description || "",
        isPopular: data.isPopular ?? false,
        stock: data.stock ?? 0,
        categoryId: data.categoryId || "",
        imageUrl: data.imageUrl || "",
      });
    }
  }, [isEditMode, existingAnimal]);

  //კურსის გამოთვლა
  const [exchangeRate, setExchangeRate] = useState<number | null>(null);

  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        const res = await fetch(
          "https://nbg.gov.ge/gw/api/ct/monetarypolicy/currencies/ka/json"
        );
        const data = await res.json();
        const usdRate = data[0].currencies.find(
          (c: any) => c.code === "USD"
        )?.rate;
        if (usdRate) {
          setExchangeRate(usdRate);
        }
      } catch (err) {
        console.error("Failed to fetch exchange rate", err);
      }
    };

    fetchExchangeRate();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;

    const parsedValue =
      type === "checkbox" ? checked : type === "number" ? Number(value) : value;

    if (name === "priceUSD" && exchangeRate) {
      const gel = Number(value) * exchangeRate;
      setFormData((prev) => ({
        ...prev,
        priceUSD: Number(value),
        priceGEL: Number(gel.toFixed(2)),
      }));
    } else if (name === "priceGEL" && exchangeRate) {
      const usd = Number(value) / exchangeRate;
      setFormData((prev) => ({
        ...prev,
        priceGEL: Number(value),
        priceUSD: Number(usd.toFixed(2)),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: parsedValue,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const selectedCategory = categories.find(
        (cat) => cat.id === formData.categoryId
      );
      const categoryTitle = selectedCategory?.title || "";

      if (isEditMode && id) {
        await dispatch(
          updateAnimal({
            ...formData,
            id,
            category: categoryTitle,
          })
        ).unwrap();
      } else {
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
      }

      navigate("/");
    } catch (err) {
      console.error("Error saving animal:", err);
    }
  };

  function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}


  return (
    <Container>
      <BackButton onClick={() => navigate("/")}>← Back to Pets</BackButton>
      <Card>
        <Title>{isEditMode ? "Edit Pet" : "Add New Pet"}</Title>

        {formData.imageUrl && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "32px",
            }}
          >
            <img
              src={
                isValidUrl(formData.imageUrl)
                  ? formData.imageUrl
                  : "/fallback.png"
              }
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
              <option value="">Select a category</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.title}
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
            <SaveButton type="submit">
              {isEditMode ? "Update Pet" : "Save Pet"}
            </SaveButton>
          </ButtonRow>
        </form>
      </Card>
    </Container>
  );
};

export default AdminAddPetPage;
