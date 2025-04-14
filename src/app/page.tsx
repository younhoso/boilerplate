'use client';

import { useState } from 'react';

import { ko } from 'date-fns/locale';

import AutoSizeImage from '@/components/AutoSizeImage';
import DatePicker from '@/components/DayPicker';
import KakaoLoginButton from '@/components/KakaoLoginButton';
import UserProfile from '@/components/UserProfile';
import { MainPageStyled } from '@/styles/pages/MainPageStyled';
import { PickerProps } from '@/types/dayPicker';
import { cx } from '@/utils/cx';

import FSD_Architecture from '../../public/images/FSD_Architecture.png';

interface Props {}

const MainPage = ({}: Props) => {
  const [selected, setSelected] = useState<PickerProps<'single'>['selected']>();

  return (
    <MainPageStyled className={cx('mainPage')}>
      <UserProfile />
      <KakaoLoginButton />
      <DatePicker
        mode="single"
        showOutsideDays
        selected={selected}
        onSelect={setSelected}
        locale={ko}
        weekStartsOn={0}
        numberOfMonths={1}
      />
      <AutoSizeImage src={FSD_Architecture} alt="" />
    </MainPageStyled>
  );
};

export default MainPage;
