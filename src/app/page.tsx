import AutoSizeImage from '@/components/AutoSizeImage';
import { Avatar, AvatarImage } from '@/components/Avatar';
import MyDatePicker from '@/components/DayPicker';
import KakaoLoginButton from '@/components/KakaoLoginButton';
import UserProfile from '@/components/UserProfile';
import { MainPageStyled } from '@/styles/pages/MainPageStyled';
import { cx } from '@/utils/cx';

import FSD_Architecture from '../../public/images/FSD_Architecture.png';

interface Props {}

const MainPage = async ({}: Props) => {
  return (
    <MainPageStyled className={cx('mainPage')}>
      <UserProfile />
      <KakaoLoginButton />
      <MyDatePicker />
      <AutoSizeImage src={FSD_Architecture} alt="" />
    </MainPageStyled>
  );
};

export default MainPage;
