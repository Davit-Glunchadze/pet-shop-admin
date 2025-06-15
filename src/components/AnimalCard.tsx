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
  Button
} from "./styles/AnimalCard.styled";
import type { AnimalItem } from "../interfaces/Animal";

interface Props {
  animal: AnimalItem;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

const AnimalCard: React.FC<Props> = ({ animal, onEdit, onDelete }) => {
  return (
    <Card>
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
        {animal.description.length > 120
          ? `${animal.description.slice(0, 120)}...`
          : animal.description}
      </Description>

      <MetaRow>
        {animal.isPopular && <Tag>Popular</Tag>}
        <span style={{ fontSize: "13.6px", color: "#333" }}>
          Stock: {animal.stock}
        </span>
      </MetaRow>

      <ButtonGroup>
        <Button onClick={() => onEdit(animal.id)}>Edit</Button>
        <Button $danger onClick={() => onDelete(animal.id)}>Delete</Button>
      </ButtonGroup>
    </Card>
  );
};

export default AnimalCard;
