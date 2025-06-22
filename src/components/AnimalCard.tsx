import React, { useEffect } from "react";
import type { CompProps } from "../interfaces/Animal";
import {
  Card,
  ImageWrapper,
  Title,
  Badge,
  PriceRow,
  Description,
  Tag,
  MetaRow,
  ButtonGroup,
  Button,
} from "./styles/AnimalCard.styled";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchCategories } from "../features/categories/categorySlice";

const AnimalCard: React.FC<CompProps> = ({
  animal,
  onEdit,
  onDelete,
  onView,
}) => {
  const handleEdit = (e: React.MouseEvent) => {
    // არ გავრცელდეს click მოვლენა სხვა ელემენტებზე
    e.stopPropagation();
    if (animal.id) {
      onEdit(animal.id);
    }
  };

  const handleDelete = (e: React.MouseEvent) => {
    // არ გავრცელდეს click მოვლენა სხვა ელემენტებზე
    e.stopPropagation();
    if (animal.id) {
      onDelete(animal.id);
    }
  };

  const categories = useAppSelector((state) => state.category.categories);
  const dispatch = useAppDispatch();

  useEffect(() => {
    // თუ კატეგორიები ცარიელია, მაშინ ჩატვირთოს.
    if (categories.length === 0) {
      dispatch(fetchCategories());
    }
  }, [categories.length, dispatch]);

  return (
    <Card onClick={() => onView(animal.id)} style={{ cursor: "pointer" }}>
      <ImageWrapper>
        {animal.imageUrl ? (
          <img src={animal.imageUrl} alt={animal.name} />
        ) : (
          <span style={{ fontSize: "48px" }}>🐾</span>
        )}
      </ImageWrapper>

      <Title>{animal.name}</Title>
      <Badge>
        {categories.find((c) => c.id === animal.categoryId)?.title || "Uncategorized"}
      </Badge>

      <PriceRow>
        <span>${animal.priceUSD}</span>
        <span>₾{animal.priceGEL}</span>
      </PriceRow>

      <Description>
        {animal.description?.length > 120
          ? `${animal.description.slice(0, 120)}...`
          : animal.description || "No description"}
      </Description>

      <MetaRow>
        {animal.isPopular && <Tag>Popular</Tag>}
        <span style={{ fontSize: "13.6px", color: "#333" }}>
          Stock: {animal.stock}
        </span>
      </MetaRow>

      <ButtonGroup>
        <Button onClick={handleEdit}>Edit</Button>
        <Button $colorProps onClick={handleDelete}>
          Delete
        </Button>
      </ButtonGroup>
    </Card>
  );
};

export default AnimalCard;
