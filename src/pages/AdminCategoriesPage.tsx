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

const AdminCategoriesPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { categories, loading, error } = useAppSelector(
    (state) => state.category
  );
  const Navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <PageContainer>
      <Header>
        <Title>All Categories</Title>
        <AddButton onClick={() => Navigate(`/add-category/`)}>➕ Add New Category</AddButton>
      </Header>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <Grid>
        {categories.map((category, index) => {
          const normal = category.data?.[0] ?? category;

          return (
            <Card key={category.id || index}>
              <CategoryName>{normal.title || "No title"}</CategoryName>
              <Description>
                {normal.description || "No description"}
              </Description>
              <Meta>1 pet</Meta>
              <ButtonGroup>
                <EditButton
                  onClick={() => Navigate(`/add-category/${category.id}`)}
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
