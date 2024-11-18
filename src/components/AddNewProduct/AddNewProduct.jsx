import Select from 'react-select';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import { addProduct, getProducts } from '../../redux/products/operations.js';
import { addProductValidationSchema } from '../../validation/validationSchema.js';
import { categoryStyles } from '../../constants/selectStyles.js';
import { CATEGORY_OPTIONS } from '../../constants/index.js';
import CloseBtn from '../shared/CloseBtn/CloseBtn.jsx';
import Input from '../shared/Input/Input.jsx';
import Button from '../shared/Button/Button.jsx';
import s from './AddNewProduct.module.scss';

const AddNewProduct = ({ closeModal, currentPage }) => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ resolver: yupResolver(addProductValidationSchema) });

  const onSubmit = async data => {
    await dispatch(addProduct(data));
    await dispatch(getProducts({ page: currentPage, perPage: 5, name: '' }));
    closeModal();
  };

  return (
    <section className={s.container}>
      <CloseBtn handleClick={closeModal} />
      <h2 className={s.title}>Add a new product</h2>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={s.inputWrapper}>
          <label>
            <Input className={s.input} placeholder="Product Info" {...register('name')} />
            <div className={s.errorContainer}>
              {errors.name && <p className={s.error}>{errors.name.message}</p>}
            </div>
          </label>
          <label>
            <Controller
              name="category"
              control={control}
              defaultValue=""
              rules={{ required: 'Category is required' }}
              render={({ field }) => (
                <Select
                  {...field}
                  options={CATEGORY_OPTIONS}
                  styles={categoryStyles}
                  placeholder="Category"
                  value={CATEGORY_OPTIONS.find(option => option.value === field.value)}
                  onChange={selectedOption => field.onChange(selectedOption?.value)}
                />
              )}
            />
            <div className={s.errorContainer}>
              {errors.category && <p className={s.error}>{errors.category.message}</p>}
            </div>
          </label>
          <label>
            <Input className={s.input} placeholder="Suppliers" {...register('suppliers')} />
            <div className={s.errorContainer}>
              {errors.suppliers && <p className={s.error}>{errors.suppliers.message}</p>}
            </div>
          </label>
          <label>
            <Input className={s.input} placeholder="Stock" {...register('stock')} />
            <div className={s.errorContainer}>
              {errors.stock && <p className={s.error}>{errors.stock.message}</p>}
            </div>
          </label>
          <label>
            <Input className={s.input} placeholder="Price" {...register('price')} />
            <div className={s.errorContainer}>
              {errors.price && <p className={s.error}>{errors.price.message}</p>}
            </div>
          </label>
        </div>
        <div className={s.btnWrapper}>
          <Button type="submit" className={s.btn}>
            Add
          </Button>
          <Button type="button" className={s.cancelBtn} onClick={closeModal}>
            Cancel
          </Button>
        </div>
      </form>
    </section>
  );
};

export default AddNewProduct;
