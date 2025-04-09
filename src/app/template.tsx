import { TemplateStyled } from '@/styles/pages/TemplateStyled';
import { cx } from '@/utils/cx';

interface Props extends PropsWithChildren {}

const Template = ({ children }: Props) => {
  return <TemplateStyled className={cx('')}>{children}</TemplateStyled>;
};

export default Template;
