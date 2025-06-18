import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { deleteAnimal } from "../features/animals/animalsSlice";
import {
  Container,
  ImageWrapper,
  Title,
  Badge,
  PriceBox,
  Description,
  ButtonRow,
  Maindiv,
  Smallcontainer,
  TextWrapper,
} from "../components/styles/PetDetailsPage.styled";
import { BackButton } from "../components/styles/AdminAddPetPage.styled";

const PetDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const pet = useAppSelector((state) =>
    state.animal.animals.find((a) => a.id === id)
  );

  if (!pet) return <p style={{ textAlign: "center" }}>Pet not found.</p>;

  return (
    <Maindiv>
      <BackButton onClick={() => navigate("/")}>← Back to Pets</BackButton>
      <Container>
        <Smallcontainer>
          <ImageWrapper>
            {pet.imageUrl ? (
              <img src={pet.imageUrl} alt={pet.name} />
            ) : (
              <span style={{ fontSize: "4rem" }}>🐾</span>
            )}
          </ImageWrapper>
          <TextWrapper>
            <Title>{pet.name}</Title>
            <div style={{ marginBottom: "1rem" }}>
              <Badge>{pet.category}</Badge>
            </div>

            <PriceBox>
              <div className="usd">
                <div>USD Price</div>
                <h4>${pet.priceUSD}</h4>
              </div>
              <div className="gel">
                <div>GEL Price</div>
                <h4>₾{pet.priceGEL}</h4>
              </div>
              <div className="stock">
                <div>Stock</div>
                <h4>{pet.stock}</h4>
              </div>
            </PriceBox>

            {pet.isPopular && (
              <div style={{ textAlign: "center", marginBottom: "1rem" }}>
                <span
                  style={{
                    background: "#FEEBC8",
                    color: "#DD6B20",
                    padding: "6px 12px",
                    borderRadius: "8px",
                    fontSize: "20px",
                    fontWeight: 600,
                    border: "1px solid #F6AD55",
                  }}
                >
                  Popular Pet
                </span>
              </div>
            )}
          </TextWrapper>
        </Smallcontainer>

        <h4>Description</h4>
        <Description>{pet.description}</Description>

        <ButtonRow>
          <button
            className="edit"
            onClick={() => navigate(`/add-pet/${pet.id}`)}
          >
            Edit Pet
          </button>
          <button
            className="delete"
            onClick={() => {
              dispatch(deleteAnimal(pet.id));
              navigate("/");
            }}
          >
            Delete Pet
          </button>
        </ButtonRow>
      </Container>
    </Maindiv>
  );
};

export default PetDetailsPage;
