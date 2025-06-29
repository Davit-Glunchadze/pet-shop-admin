import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { deleteAnimal, fetchAnimals } from "../features/animals/animalsSlice";
import AnimalCard from "../components/AnimalCard";
import { useNavigate } from "react-router-dom";
import {
  AddButton,
  Header,
  PageContainer,
  Title,
} from "../components/styles/AdminCategoriesPage.styled";
import { Animalcards } from "../components/styles/AdminPetspage.styled";
import LoadingSpinner from "../components/LoadingSpinner";

const AdminPetsPage = () => {
  console.log("🌀 AdminPetsPage RENDERED");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { animals, loading, error } = useAppSelector((state) => state.animal);

  useEffect(() => {
    dispatch(fetchAnimals());
  }, [dispatch]);

  //   useEffect(() => {
  //   console.log("Loaded animals:", animals);
  // }, [animals]);

  return (
    <PageContainer>
      <Header>
        <Title>All Pets</Title>
        <AddButton onClick={() => navigate("/Add")}>➕ Add New Pet</AddButton>
      </Header>
      {loading && <LoadingSpinner />}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <Animalcards>
        {animals.map((animal) => (
          <AnimalCard
            key={animal.id}
            animal={animal}
            onEdit={(id) => navigate(`/add-pet/${id}`)}
            onDelete={(id) => dispatch(deleteAnimal(id))}
            onView={(id) => navigate(`/pets/${id}`)}
          />
        ))}
      </Animalcards>
    </PageContainer>
  );
};

export default AdminPetsPage;
