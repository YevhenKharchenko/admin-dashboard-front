import Select from 'react-select';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { addProductValidationSchema } from '../../validation/validationSchema.js';
import { categoryStyles } from '../../constants/selectStyles.js';
import { CATEGORY_OPTIONS } from '../../constants/index.js';
import CloseBtn from '../shared/CloseBtn/CloseBtn.jsx';
import Input from '../shared/Input/Input.jsx';
import Button from '../shared/Button/Button.jsx';
import s from './EditProductData.module.scss';
import { useDispatch } from 'react-redux';
import { editProduct, getProducts } from '../../redux/products/operations.js';

const EditProductData = ({ closeModal, item, currentPage }) => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ resolver: yupResolver(addProductValidationSchema) });

  const onSubmit = async formData => {
    await dispatch(editProduct({ id: item._id, formData }));
    await dispatch(getProducts({ page: currentPage, perPage: 5, name: '' }));
  };

  return (
    <section className={s.container}>
      <CloseBtn handleClick={closeModal} />
      <h2 className={s.title}>Edit data</h2>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={s.inputWrapper}>
          <label>
            <Input
              className={s.input}
              placeholder="Product Info"
              defaultValue={item.name}
              {...register('name')}
            />
            <div className={s.errorContainer}>
              {errors.name && <p className={s.error}>{errors.name.message}</p>}
            </div>
          </label>
          <label>
            <Controller
              name="category"
              control={control}
              defaultValue={item.category}
              rules={{ required: 'Category is required' }}
              render={({ field }) => (
                <Select
                  {...field}
                  options={CATEGORY_OPTIONS}
                  styles={categoryStyles}
                  placeholder="Select Category"
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
            <Input
              className={s.input}
              placeholder="Suppliers"
              defaultValue={item.suppliers}
              {...register('suppliers')}
            />
            <div className={s.errorContainer}>
              {errors.suppliers && <p className={s.error}>{errors.suppliers.message}</p>}
            </div>
          </label>
          <label>
            <Input
              className={s.input}
              placeholder="Stock"
              defaultValue={item.stock}
              {...register('stock')}
            />
            <div className={s.errorContainer}>
              {errors.stock && <p className={s.error}>{errors.stock.message}</p>}
            </div>
          </label>
          <label>
            <Input
              className={s.input}
              placeholder="Price"
              defaultValue={item.price}
              {...register('price')}
            />
            <div className={s.errorContainer}>
              {errors.price && <p className={s.error}>{errors.price.message}</p>}
            </div>
          </label>
        </div>
        <div className={s.btnWrapper}>
          <Button type="submit" className={s.btn}>
            Save
          </Button>
          <Button type="button" className={s.cancelBtn} onClick={closeModal}>
            Cancel
          </Button>
        </div>
      </form>
    </section>
  );
};

export default EditProductData;
