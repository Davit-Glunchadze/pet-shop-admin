import { useParams, useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../redux/hooks';
import { updateAnimal } from '../features/animals/animalsSlice'
import type { AnimalItem } from '../interfaces/Animal';
import { useEffect, useState } from 'react';


const AdminEditPetPage = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const animal = useAppSelector((state) =>
    state.animal.animals.find((a) => a.id === Number(id))
  );

  const [formData, setFormData] = useState<AnimalItem | null>(null);


  useEffect(() => {
    if (animal) setFormData(animal);
  }, [animal]);

  if (!formData) return <p>Loading...</p>;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type, checked } = target;
    setFormData((prev) =>
      prev
        ? {
            ...prev,
            [name]: type === 'checkbox' ? checked : type === 'number' ? Number(value) : value,
          }
        : null
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData) {
      dispatch(updateAnimal(formData)).then(() => navigate('/animals'));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Animal</h2>
      <input name="name" value={formData.name} onChange={handleChange} />
      <input name="priceUSD" type="number" value={formData.priceUSD} onChange={handleChange} />
      <input name="priceGEL" type="number" value={formData.priceGEL} onChange={handleChange} />
      <textarea name="description" value={formData.description} onChange={handleChange} />
      <input name="stock" type="number" value={formData.stock} onChange={handleChange} />
      <label>
        Popular:
        <input name="isPopular" type="checkbox" checked={formData.isPopular} onChange={handleChange} />
      </label>
      <button type="submit">Save</button>
    </form>
  );
};

export default AdminEditPetPage;
