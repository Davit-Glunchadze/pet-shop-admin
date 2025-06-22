import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  deleteCategory,
  fetchCategories,
} from "../features/categories/categorySlice";
import { useNavigate } from "react-router-dom";
import {
  PageContainer,
  Header,
  Title,
  AddButton,
  Grid,
  Card,
  CategoryName,
  Description,
  Meta,
  ButtonGroup,
  EditButton,
  DeleteButton,
} from "../components/styles/AdminCategoriesPage.styled";
import { fetchAnimals } from "../features/animals/animalsSlice";
import LoadingSpinner from "../components/LoadingSpinner";

const AdminCategoriesPage: React.FC = () => {
  console.log("🌀 AdminCategoriesPage RENDERED");
  const dispatch = useAppDispatch();
  const { categories, loading, error } = useAppSelector(
    (state) => state.category
  );
  const navigate = useNavigate();

  // კატეგორიების ჩამოტვირთვა კომპონენტის ჩატვირთვისას
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  // ცხოველების ჩამოტვირთვა რაოდენების დათვლისთვის
  const animals = useAppSelector((state) => state.animal.animals);
  useEffect(() => {
    // თუ კატეგორიები ცარიელია, მაშინ ჩატვირთოს.
    if (animals.length === 0) {
      dispatch(fetchAnimals());
    }
  }, [animals.length, dispatch]);

  //     useEffect(() => {
  //   console.log("Loaded categories:", categories);
  // }, [categories]);

  return (
    <PageContainer>
      <Header>
        <Title>All Categories</Title>
        <AddButton onClick={() => navigate(`/add-category/`)}>
          ➕ Add New Category
        </AddButton>
      </Header>

      {loading && <LoadingSpinner />}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <Grid>
        {categories.map((category) => {
          const count = animals.filter(
            (a) => a.categoryId === category.id
          ).length;
          return (
            <Card key={category.id}>
              <CategoryName>{category.title || "No title"}</CategoryName>
              <Description>
                {category.description || "No description"}
              </Description>
              <Meta>
                {count} pet{count !== 1 ? "s" : ""}
              </Meta>
              <ButtonGroup>
                <EditButton
                  onClick={() => navigate(`/add-category/${category.id}`)}
                >
                  Edit
                </EditButton>
                <DeleteButton
                  onClick={() => dispatch(deleteCategory(category.id))}
                >
                  Delete
                </DeleteButton>
              </ButtonGroup>
            </Card>
          );
        })}
      </Grid>
    </PageContainer>
  );
};

export default AdminCategoriesPage;
