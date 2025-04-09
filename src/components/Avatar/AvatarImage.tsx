import Image, { StaticImageData } from 'next/image';

import { cx } from '@/utils/cx';

import { AvatarImageStyled } from './styled';

interface Props {
  src: string | StaticImageData;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
}

const AvatarImage = ({ src = '', alt = '', ...rest }: Props) => {
  return (
    <AvatarImageStyled className={cx('avatarImage')}>
      <Image src={src} alt={alt} {...rest} />
    </AvatarImageStyled>
  );
};

export default AvatarImage;
