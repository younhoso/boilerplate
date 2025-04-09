'use client';

import styled from 'styled-components';

interface DayPickerProps {}

export const DayPickerStyled = styled.div<DayPickerProps>`
  .rdp {
    padding: 16px;
    border-radius: 12px;
    background-color: white;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .rdp-caption {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
  }

  .rdp-caption_label {
    font-weight: bold;
    font-size: 1rem;
  }

  .rdp-day {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s ease;
    &:hover {
      background-color: #f0f0f0;
    }

    &.rdp-selected {
      background-color: #2563eb;
      color: white;
    }
    &.rdp-today {
      border: 1px solid #2563eb;
    }
  }
`;
