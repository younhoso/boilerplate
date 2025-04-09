import KakaoLoginButton from '@/components/KakaoLoginButton';
import UserProfile from '@/components/UserProfile';
import { MainPageStyled } from '@/styles/pages/MainPageStyled';
import { cx } from '@/utils/cx';

interface Props {}

const MainPage = async ({}: Props) => {
  return (
    <MainPageStyled className={cx('mainPage')}>
      <UserProfile />
      <KakaoLoginButton />
    </MainPageStyled>
  );
};

export default MainPage;
