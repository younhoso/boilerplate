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
  font-weight: bold;
  text-align: left;
`;

export const TableHeaderCellStyled = styled.div<TableHeaderCellProps>`
  min-width: 180px;
  padding: 12px 20px;
  text-align: left;
  font-size: 14px;
  color: #333;
  text-align: center;
`;

export const TableBodyStyled = styled.div<TableBodyProps>`
  background-color: #fff;
`;

export const TableBodyCellStyled = styled.div<TableBodyCellProps>`
  min-width: 180px;
  padding: 10px 20px;
  text-align: left;
  font-size: 14px;
  color: #666;
  word-break: break-word;
  text-align: center;
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
