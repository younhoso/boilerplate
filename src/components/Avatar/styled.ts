'use client';

import styled from 'styled-components';

interface AvatarProps {}

interface AvatarImageProps {}

interface AvatarFallbackProps {}

export const AvatarStyled = styled.div<AvatarProps>``;

export const AvatarImageStyled = styled.div<AvatarImageProps>`
  position: relative;
  width: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* 이미지가 컨테이너에 맞게 조정되도록 */
  }
`;

export const AvatarFallbackStyled = styled.div<AvatarFallbackProps>``;
