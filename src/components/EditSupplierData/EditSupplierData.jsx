import Select from 'react-select';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import { editSupplier, getSuppliers } from '../../redux/suppliers/operations.js';
import { addSupplierValidationSchema } from '../../validation/validationSchema.js';
import { categoryStyles } from '../../constants/selectStyles.js';
import { STATUS_OPTIONS } from '../../constants/index.js';
import { sprite } from '../../assets/icons/index.js';
import CloseBtn from '../shared/CloseBtn/CloseBtn.jsx';
import Input from '../shared/Input/Input.jsx';
import Button from '../shared/Button/Button.jsx';
import s from './EditSupplierData.module.scss';

const EditSupplierData = ({ closeModal, item, currentPage }) => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ resolver: yupResolver(addSupplierValidationSchema) });

  const onSubmit = async formData => {
    await dispatch(editSupplier({ id: item._id, formData }));
    await dispatch(getSuppliers({ page: currentPage, perPage: 5, name: '' }));
    closeModal();
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
              placeholder="Suppliers Info"
              defaultValue={item.name}
              {...register('name')}
            />
            <div className={s.errorContainer}>
              {errors.name && <p className={s.error}>{errors.name.message}</p>}
            </div>
          </label>
          <label>
            <Input
              className={s.input}
              placeholder="Address"
              defaultValue={item.address}
              {...register('address')}
            />
            <div className={s.errorContainer}>
              {errors.address && <p className={s.error}>{errors.address.message}</p>}
            </div>
          </label>
          <label>
            <Input
              className={s.input}
              placeholder="Company"
              defaultValue={item.suppliers}
              {...register('suppliers')}
            />
            <div className={s.errorContainer}>
              {errors.suppliers && <p className={s.error}>{errors.suppliers.message}</p>}
            </div>
          </label>
          <label>
            <div className={s.dateWrapper}>
              <Controller
                name="date"
                control={control}
                defaultValue={item.date}
                render={({ field: { value, onChange, onBlur } }) => (
                  <DatePicker
                    id="date-input"
                    className={s.dateInput}
                    placeholderText="Delivery date"
                    selected={value}
                    onChange={date => {
                      if (date) {
                        const formattedDate = format(date, 'MMMM d, yyyy');
                        onChange(formattedDate);
                      } else {
                        onChange(null);
                      }
                    }}
                    onBlur={onBlur}
                    dateFormat="MMMM d, yyyy"
                  />
                )}
              />
              <svg className={s.calendarIcon} width="16" height="16">
                <use xlinkHref={`${sprite}#icon-calendar`}></use>
              </svg>
            </div>
            <div className={s.errorContainer}>
              {errors.date && <p className={s.error}>{errors.date.message}</p>}
            </div>
          </label>
          <label>
            <Input
              className={s.input}
              placeholder="Amount"
              defaultValue={item.amount}
              {...register('amount')}
            />
            <div className={s.errorContainer}>
              {errors.amount && <p className={s.error}>{errors.amount.message}</p>}
            </div>
          </label>
          <label>
            <Controller
              name="status"
              control={control}
              defaultValue={item.status}
              rules={{ required: 'Status is required' }}
              render={({ field }) => (
                <Select
                  {...field}
                  options={STATUS_OPTIONS}
                  styles={categoryStyles}
                  placeholder="Status"
                  value={STATUS_OPTIONS.find(option => option.value === field.value)}
                  onChange={selectedOption => field.onChange(selectedOption?.value)}
                />
              )}
            />
            <div className={s.errorContainer}>
              {errors.status && <p className={s.error}>{errors.status.message}</p>}
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

export default EditSupplierData;
