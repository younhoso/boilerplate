import { QueryFunctionContext, useQuery } from '@tanstack/react-query';

import { customAxios } from '@/libs/customAxios';

async function fetchData<T>(
  { queryKey }: QueryFunctionContext,
  params?: Record<string, unknown>,
  customQuery?: string,
) {
  const queryString = customQuery || (queryKey[0] as string);
  const response = await customAxios().get<T>(queryString, { params });
  return response.data;
}

export function useCustomQuery<T>({
  queryKey,
  params,
  customQuery,
  enabled = true,
}: {
  queryKey: QueryFunctionContext['queryKey'];
  params?: Record<string, unknown>;
  customQuery?: string;
  enabled?: boolean;
}) {
  return useQuery({
    queryKey,
    queryFn: (context: QueryFunctionContext) => fetchData<T>(context, params, customQuery),
    enabled,
  });
}
