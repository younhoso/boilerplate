'use client';

import styled from 'styled-components';

interface TableProps {}

interface TableHeadProps {}

interface TableHeaderCellProps {}

interface TableBodyProps {}

interface TableBodyCellProps {}

interface TableRowProps {}

export const TableStyled = styled.div<TableProps>``;

export const TableHeadStyled = styled.div<TableHeadProps>`
  background-color: #f4f6f8;
  border-top: 1px solid #333;
  font-weight: bold;
  text-align: left;
`;

export const TableHeaderCellStyled = styled.div<TableHeaderCellProps>`
  min-width: 160px;
  padding: 12px 20px;
  font-size: 14px;
  color: #333;
  text-align: center;
  &:first-child {
    min-width: auto;
  }
`;

export const TableBodyStyled = styled.div<TableBodyProps>`
  background-color: #fff;
`;

export const TableBodyCellStyled = styled.div<TableBodyCellProps>`
  min-width: 160px;
  padding: 10px 20px;
  font-size: 14px;
  color: #666;
  text-align: center;
  &:first-child {
    min-width: auto;
  }
`;

export const TableRowStyled = styled.div<TableRowProps>`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-bottom: 1px solid #d2d6db;
`;

export const CheckboxCell = styled.div`
  padding: 12px;
  width: 40px;
  text-align: center;
`;

export const ActionCell = styled.div`
  padding: 12px;
  text-align: center;
  button {
    padding: 6px 12px;
    border: none;
    background-color: #007bff;
    color: white;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
      background-color: #0056b3;
    }
  }
`;
