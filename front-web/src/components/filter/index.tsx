<<<<<<< HEAD
import './styles.css';
import 'flatpickr/dist/themes/material_green.css';
import flatpickrLib from 'flatpickr';
import { Portuguese } from 'flatpickr/dist/l10n/pt';
import FlatPicker from 'react-flatpickr';
import React, { useState } from 'react';
import { FilterData, Gender } from '../../types';

flatpickrLib.localize(Portuguese);
=======
import Select from 'react-select';
import React, { useState, useEffect } from 'react';
import axios, { AxiosRequestConfig } from 'axios';
import { FilterData, Store } from '../../types';
import { Controller, useForm } from 'react-hook-form';
import { BASE_URL } from '../../utils/resquests';
import './styles.css';
>>>>>>> 5aa1c83402d14efe2975e369b8ab9d808c2652f6

type Props = {
  onFilterChange: (filter: FilterData) => void;
};

function Filter({ onFilterChange }: Props) {
<<<<<<< HEAD
  const [dates, setDates] = useState<Date[]>([]);
  const [gender, setGender] = useState<Gender>();

  const onChangeDate = (dates: Date[]) => {
    if (dates.length === 2) {
      setDates(dates);
      onFilterChange({ dates, gender });
    }
  };

  const onChangeGender = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedGender = event.target.value as Gender;

    setGender(selectedGender);
    onFilterChange({ dates, gender: selectedGender });
=======
  const [store, setStore] = useState<Store>();
  const [selectStore, setSelectStore] = useState<Store[]>([]);
  const { control } = useForm();

  const handleChange = (data: { value: number; label: string }) => {
    // Total sales
    const paramsForTotalSales: AxiosRequestConfig = {
      url:
        data == null || undefined
          ? `${BASE_URL}/stores`
          : `${BASE_URL}/sales/summary?storeId=${data.value}`
    };

    // Using store to filter gender sales
    const paramsForGenderFiltering: AxiosRequestConfig = {
      url:
        data == null || undefined
          ? `${BASE_URL}/sales/by-gender?storeId=0`
          : `${BASE_URL}/sales/by-gender?storeId=${data.value}`
    };

    setStore(data);
    onFilterChange({ store: data });
    console.log('SELECTED DATA', data);

    axios(paramsForTotalSales).catch((error) => {
      console.log(error);
    });

    axios(paramsForGenderFiltering).catch((error) => {
      console.log(error);
    });
>>>>>>> 5aa1c83402d14efe2975e369b8ab9d808c2652f6
  };

  useEffect(() => {
    const params: AxiosRequestConfig = {
      url: `${BASE_URL}/stores`
    };

    axios(params).then((response) => {
      type DataItem = {
        id: number;
        name: string;
      };

      const transformedData: { value: number; label: string }[] = response.data.map(
        (item: DataItem) => {
          return {
            value: item.id,
            label: item.name
          };
        }
      );
      setSelectStore(transformedData);
    });
  }, []);

  return (
<<<<<<< HEAD
    <div className="filter-container base-card">
      <FlatPicker
        options={{
          mode: 'range',
          dateFormat: 'd/m/Y',
          showMonths: 2
        }}
        className="filter-input"
        onChange={onChangeDate}
        placeholder="Selecione um período"
      />
      <select className="filter-input" value={gender} onChange={onChangeGender}>
        <option value="">Selecione um gênero</option>
        <option value="MALE">Masculino</option>
        <option value="FEMALE">Feminino</option>
        <option value="OTHER">Outro</option>
      </select>
=======
    <div className="filter-container">
      <div className="filter-row">
        <div className="filter-search">
          <Controller
            control={control}
            name="store"
            render={({ field }) => (
              <Select
                classNamePrefix="filter-search-select"
                options={selectStore}
                isClearable={true}
                placeholder="Selecione..."
                onChange={(selectedOption) => {
                  field.onChange(selectedOption);
                  handleChange(selectedOption);
                }}
                value={field.value}
              />
            )}
          />
        </div>
      </div>
>>>>>>> 5aa1c83402d14efe2975e369b8ab9d808c2652f6
    </div>
  );
}

export default Filter;
