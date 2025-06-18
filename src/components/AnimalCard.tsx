import React from "react";
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
import type { AnimalItem } from "../interfaces/Animal";

interface Props {
  animal: AnimalItem;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  onView: (id: string) => void;
}

const AnimalCard: React.FC<Props> = ({ animal, onEdit, onDelete, onView }) => {
  const handleEdit = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (animal.id) {
      onEdit(animal.id);
    }
  };

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (animal.id) {
      onDelete(animal.id);
    }
  };

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
      <Badge>{animal.category}</Badge>

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
        <Button $danger onClick={handleDelete}>
          Delete
        </Button>
      </ButtonGroup>
    </Card>
  );
};

export default AnimalCard;
