import Image, { StaticImageData } from 'next/image';

import { cx } from '@/utils/cx';

import { AutoSizeImageStyled } from './styled';

interface Props {
  src: string | StaticImageData;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
}

const AutoSizeImage = ({ src = '', alt = '', ...rest }: Props) => {
  return (
    <AutoSizeImageStyled className={cx('autoSizeImage')}>
      <Image src={src} alt={alt} {...rest} />
    </AutoSizeImageStyled>
  );
};

export default AutoSizeImage;
