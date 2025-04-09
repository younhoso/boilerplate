import { user } from '@/libs/repositories/supabase/user';
import { MainPageStyled } from '@/styles/pages/MainPageStyled';
import cx from '@/utils';

interface Props {}

const MainPage = async ({}: Props) => {
  const userData = await user.getUser('abc123');
  console.log(userData);

  return <MainPageStyled className={cx('')}></MainPageStyled>;
};

export default MainPage;
